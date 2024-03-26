import { QueryClient } from "@tanstack/react-query";

export function checkLogin(queryClient: QueryClient) {
  const token = queryClient.getQueryState<{
    access_token: string;
  }>(["auth"])?.data?.access_token;
  return token && token !== null && token !== "undefiend" && token.length > 0;
}
