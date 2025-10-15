<script setup>
import { onMounted } from "vue";
import { getNews, getAchivements } from "@/lib/api/DashboardApi";
import { alertError } from "@/lib/alert";

onMounted(async () => {
  try {
    const resNews = await getNews();
    const dataNews = await resNews.json();
    console.log("Dashboard dataNews:", dataNews);
  } catch (err) {
    alertError(err.message);
  }
});
</script>
<template>
  <div>
    <p>Ini dashboard</p>
  </div>
</template>
