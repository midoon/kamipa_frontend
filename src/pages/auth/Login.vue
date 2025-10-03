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
        <form action="" class="flex flex-col gap-4 w-full mb-10">
          <input
            type="text"
            name="nisn"
            id="nisn"
            placeholder="nisn siswa"
            class="border border-gray-300 rounded-md p-3 w-full"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            class="border border-gray-300 rounded-md p-3 w-full"
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
            to="/register"
            class="text-primary-background hover:underline font-bold"
            >Daftar di sini!</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped></style>
