<script setup>
import { onMounted, ref } from "vue";
import { getNews, getAchievements } from "@/lib/api/DashboardApi";
import { alertError } from "@/lib/alert";
import { useRouter } from "vue-router";

const news = ref([]);
const achievements = ref([]);

const router = useRouter();

onMounted(async () => {
  try {
    const resNews = await getNews();
    const dataNews = await resNews.json();

    const resAchievements = await getAchievements();
    const dataAchievements = await resAchievements.json();

    news.value = dataNews.data;
    achievements.value = dataAchievements.data;
  } catch (err) {
    console.log(err.message);
    // await alertError(err.message);
    // await router.push({ name: "Login" });
  }
});
</script>
<template>
  <div>
    <p>Ini dashboard</p>
  </div>
</template>
