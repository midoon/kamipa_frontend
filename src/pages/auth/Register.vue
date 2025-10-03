<template>
  <div class="px-6">
    <div class="min-h-screen flex flex-col justify-center">
      <div class="mb-20 flex-none mt-[10vh]">
        <p
          class="font-roboto font-bold text-primary-background text-3xl text-center"
        >
          KAMIPA
        </p>
      </div>
      <div class="grow">
        <p class="mb-4 font-medium text-secondary-text">Daftarkan akun anda</p>
        <form action="" class="flex flex-col gap-4 w-full mb-10">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            class="border border-gray-300 rounded-md p-3 w-full"
          />
          <input
            type="text"
            name="nisn"
            id="nisn"
            placeholder="nisn siswa"
            class="border border-gray-300 rounded-md p-3 w-full"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
            class="border border-gray-300 rounded-md p-3 w-full"
          />
          <input
            type="text"
            name="confirm_password"
            id="confirm_password"
            placeholder="konfirmasi password"
            class="border border-gray-300 rounded-md p-3 w-full"
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
            to="/login"
            class="text-primary-background hover:underline font-bold"
            >Login di sini!</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
