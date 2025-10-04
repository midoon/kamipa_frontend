export const userRegister = async ({ email, password, student_nisn }) => {
  return await fetch(
    `${import.meta.env.VITE_KAMIPA_BE_ENDPOINT}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password, student_nisn }),
    }
  );
};

export const userLogin = async ({ password, student_nisn }) => {
  return await fetch(
    `${import.meta.env.VITE_KAMIPA_BE_ENDPOINT}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ password, student_nisn }),
    }
  );
};
