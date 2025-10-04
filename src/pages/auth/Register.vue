<script setup>
import { reactive } from "vue";
import { userRegister } from "../../lib/api/UserApi";
import { alertError, alertSuccess } from "../../lib/alert";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  email: "",
  student_nisn: "",
  password: "",
  confirm_password: "",
});

const handleSubmit = async () => {
  if (user.password !== user.confirm_password) {
    await alertError("Password dan konfirmasi password tidak sama");
    return;
  }

  if (user.password.length < 8) {
    await alertError("Password minimal 8 karakter");
    return;
  }

  try {
    const response = await userRegister(user);
    const responseBody = await response.json();

    if (responseBody.status) {
      await alertSuccess("Berhasil melakukan registrasi");
      await router.push({ name: "Login" });
    } else {
      // handle errornya nanti, [duplicate nisn, validation, atau email]
      if (responseBody.message.toLowerCase().includes("student not found")) {
        return await alertError("nisn siswa tidak terdaftar");
      }
      await alertError(responseBody.message);
    }
  } catch (error) {
    await alertError(error.message);
  }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-6 md:bg-slate-100"
  >
    <!-- card -->
    <div
      class="w-full md:w-[400px] md:rounded-lg md:shadow-lg md:px-10 md:py-10 bg-white"
    >
      <!-- logo / title -->
      <div class="mb-10 text-center">
        <p class="font-roboto font-bold text-primary-background text-3xl">
          KAMIPA
        </p>
      </div>

      <!-- form -->
      <div>
        <p class="mb-4 font-medium text-secondary-text">Daftarkan akun anda</p>
        <form
          action=""
          class="flex flex-col gap-4 w-full mb-10"
          v-on:submit.prevent="handleSubmit"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            class="border border-gray-300 rounded-md p-3 w-full"
            required
            v-model="user.email"
          />
          <input
            type="text"
            name="student_nisn"
            id="student_nisn"
            placeholder="nisn siswa"
            class="border border-gray-300 rounded-md p-3 w-full"
            required
            v-model="user.student_nisn"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            class="border border-gray-300 rounded-md p-3 w-full"
            required
            v-model="user.password"
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="konfirmasi password"
            class="border border-gray-300 rounded-md p-3 w-full"
            required
            v-model="user.confirm_password"
          />

          <button
            type="submit"
            class="p-3 border rounded-lg w-full bg-primary-background text-white hover:bg-accent-background"
          >
            Daftar
          </button>
        </form>
        <p class="text-center">
          Sudah punya akun?
          <RouterLink
            :to="{ name: 'Login' }"
            class="text-primary-background hover:underline font-bold"
            >Login di sini!</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
