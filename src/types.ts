import { QueryClient } from "@tanstack/react-query";

export type Context = {
  redirect: string;
  queryClient: QueryClient;
};
