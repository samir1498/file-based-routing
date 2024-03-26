// user.ts
import { queryOptions } from "@tanstack/react-query";
import { UserUseCase } from "../usecases/UserUseCase";
export interface User {
  aud: string;
  iss: string;
  name: string;
  picture?: string; // Optional property
  preferred_username: string;
  sub: string;
  roles: string[];
}
export interface Userinfo extends Response {
  aud: string;
  iss: string;
  name: string;
  picture?: string; // Optional property
  preferred_username: string;
  sub: string;
  roles: string[];
}

export const userQueryOptions = (token: string) =>
  queryOptions({
    queryKey: ["user"],
    queryFn: async () => await UserUseCase.getUserInfo(token),
  });
