import { apiFetch } from "./apiClient";

export const getNews = async () => {
  return await apiFetch(`/api/news`, { method: "GET" });
};

export const getAchivements = async () => {
  return await apiFetch(`/api/achivements`, { method: "GET" });
};
