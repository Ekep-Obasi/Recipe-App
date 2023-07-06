import httpClient from "./axios";

export const login = (user) => httpClient.post("/login", user);

export const register = (user) => httpClient.post("user", user);

export const forgotPassword = (data) =>
  httpClient.post("forgot-password", data);

export const logInWithGoogle = async () => {
  try {
    httpClient.get("/auth/google");
  } catch (err) {
    console.log(err);
  }
};
