import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  actions: {
    storeToken(token) {
      console.log("data", token);
      this.accessToken = token.access_token;
      this.refreshToken = token.refresh_token;
      localStorage.setItem("accessToken", this.accessToken);
      localStorage.setItem("refreshToken", this.refreshToken);
    },
    logout() {
      this.accessToken = null;
      this.refreshToken = null;
      localStorage.clear();
    },
  },
});
