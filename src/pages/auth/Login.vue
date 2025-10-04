<script setup>
import { reactive } from "vue";
import { userLogin } from "../../lib/api/UserApi";
import { alertError, alertSuccess } from "../../lib/alert";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth";

const user = reactive({
  student_nisn: "",
  password: "",
});

const auth = useAuthStore();

const handleSubmit = async () => {
  console.log(user);
  try {
    const response = await userLogin(user);
    const responseBody = await response.json();
    console.log(responseBody);

    if (responseBody.status) {
      auth.storeToken(responseBody.data);
      await alertSuccess("Berhasil melakukan login");
      // redirect ke halaman dashboard
    } else {
      // handle errornya nanti, [duplicate nisn, validation, atau email]
      if (responseBody.message.toLowerCase().includes("record not found")) {
        return await alertError("nisn siswa atau password salah");
      } else if (responseBody.message.toLowerCase().includes("password")) {
        return await alertError("nisn siswa atau password salah");
      }
      return await alertError(responseBody.message);
    }
  } catch (error) {
    return await alertError(error.message);
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
        <p class="mb-4 font-medium text-secondary-text">
          Login dengan data berikut
        </p>
        <form
          action=""
          class="flex flex-col gap-4 w-full mb-10"
          v-on:submit.prevent="handleSubmit"
        >
          <input
            type="text"
            name="nisn"
            id="nisn"
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

          <button
            type="submit"
            class="p-3 border rounded-lg w-full bg-primary-background text-white hover:bg-accent-background"
          >
            Login
          </button>
        </form>
        <p class="text-center">
          Belum punya akun?
          <RouterLink
            :to="{ name: 'Register' }"
            class="text-primary-background hover:underline font-bold"
            >Daftar di sini!</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
