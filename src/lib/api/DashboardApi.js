import { apiFetch } from "./apiClient";

export const getNews = async () => {
  return await apiFetch(`/api/news`, { method: "GET" });
};

export const getAchievements = async () => {
  return await apiFetch(`/api/achievements`, { method: "GET" });
};
