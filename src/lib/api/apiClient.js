import { useAuthStore } from "@/store/auth";
import { alertError } from "../../lib/alert";

const BASE_URL = import.meta.env.VITE_KAMIPA_BE_ENDPOINT;

let isRefreshing = false;
let pendingRequest = [];

const MAX_RETRY_ATTEMPTS = 4;

function subscribeTokenRefresh(cb) {
  pendingRequest.push(cb);
}

function onRefreshed(newToken) {
  pendingRequest.forEach((cb) => {
    cb(newToken);
  });
  pendingRequest = [];
}

async function refreshAccessToken(refreshToken) {
  const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  const data = await response.json();

  if (!response.ok || !data?.data?.access_token) {
    throw new Error("Failed to refresh token");
  }

  const auth = useAuthStore();
  auth.storeToken(data.data);
  return data.data.access_token;
}

export const apiFetch = async (endpoint, option = {}, retryCount = 0) => {
  const auth = useAuthStore();
  const token = auth.accessToken;

  const headers = {
    ...(option.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...option,
      headers,
    });

    // if token expired
    if (res.status === 401) {
      const data = await res.clone().json();

      if (data?.message?.toLowerCase().includes("token expired")) {
        if (retryCount >= MAX_RETRY_ATTEMPTS) {
          console.warn("Retry limit reached — logging out...");
          auth.logout();
          window.location.href = "/login";
          throw new Error("Max retry attempts reached");
        }

        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const newToken = await refreshAccessToken(auth.refreshToken);
            onRefreshed(newToken);
          } catch (err) {
            auth.logout();
            window.location.href = "/login";
            throw err;
          } finally {
            isRefreshing = false;
          }
        }

        // wait new token
        return new Promise((resolve) => {
          subscribeTokenRefresh(async (newToken) => {
            const retryRes = await fetch(`${BASE_URL}${endpoint}`, {
              ...option,
              headers: {
                ...headers,
                Authorization: `Bearer ${newToken}`,
              },
            });
            resolve(retryRes);
          });
        });
      } else {
        auth.logout();
        await alertError("Sesi anda telah habis, silahkan login kembali");
        window.location.href = "/login";
      }
    }

    return res;
  } catch (error) {
    console.error("apiFetch error:", err);
    throw err;
  }
};
