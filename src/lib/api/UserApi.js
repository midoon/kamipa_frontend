import { apiFetch } from "./apiClient";

export const userRegister = async ({ email, password, student_nisn }) => {
  return await apiFetch(`/api/auth/register`, {
    method: "POST",
    body: JSON.stringify({ email, password, student_nisn }),
  });
};

export const userLogin = async ({ password, student_nisn }) => {
  return await apiFetch(`/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ password, student_nisn }),
  });
};
