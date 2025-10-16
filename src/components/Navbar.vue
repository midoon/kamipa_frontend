<script setup>
const menus = ["home", "score", "attendance", "payment"];
</script>

<template>
  <nav
    class="fixed border border-slate-200 shadow-2xl bottom-4 z-50 left-2 right-2 rounded-xl"
  >
    <div class="grid grid-cols-4">
      <RouterLink
        v-for="(menu, i) in menus"
        :key="menu"
        class="h-full flex items-center justify-center text-xs font-bold text-accent-background text-center hover:bg-accent-background hover:text-white py-4 transition-colors"
        :class="{
          'rounded-l-xl': i === 0,
          'rounded-r-xl': i === menus.length - 1,
        }"
      >
        {{ menu }}
      </RouterLink>
    </div>
  </nav>
</template>
