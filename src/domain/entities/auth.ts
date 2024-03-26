// auth.ts
import { QueryClient, queryOptions } from "@tanstack/react-query";
import { CasdoorSDK } from "../../Setting";

export type auth = {
  access_token: string;
  token_type: "Bearer";
  refresh_token: string;
  expires_in: number;
  scope: string;
};

export async function getToken(queryClient: QueryClient) {
  return queryClient.getQueryState<{
    access_token: string;
  }>(["auth"])?.data?.access_token;
}

export const authQueryOptions = () =>
  queryOptions({
    queryKey: ["auth"],
    queryFn: () => CasdoorSDK.exchangeForAccessToken(),
  });
