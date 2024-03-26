import { queryOptions } from "@tanstack/react-query";
import { getUserInfo } from "../usecases/userUsecase";
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

async function fetchUserInfo(token: string) {
  try {
    const res = await getUserInfo(token);
    console.log(res);
    if (res.roles.includes("admin")) {
      return res; // Only set user if name exists
    } else {
      console.warn("Missing 'roles' property in userinfo response");
    }
  } catch (error) {
    console.error("Error fetching userinfo:", error);
  }
}
export const userQueryOptions = (token: string) =>
  queryOptions({
    queryKey: ["user"],
    queryFn: () => fetchUserInfo(token),
  });
