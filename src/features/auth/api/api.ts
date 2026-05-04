import { api } from "@/shared/api/auth.api";

export interface User {
  id: string;
  email: string;
  displayName?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  username?: string;
}

export const authApi = {
  me: () => api<User>("/users/profile"),

  login: (dto: LoginDto) =>
    api<User>("/auth/login", {
      method: "POST",
      json: dto,
    }),

  register: (dto: RegisterDto) =>
    api<User>("/auth/register", {
      method: "POST",
      json: dto,
    }),

  logout: () =>
    api<{ success: boolean }>("/auth/logout", {
      method: "POST",
    }),
};