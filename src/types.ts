import { QueryClient } from "@tanstack/react-query";

export type Context = {
  isLoggedIn: boolean;
  queryClient: QueryClient;
};
