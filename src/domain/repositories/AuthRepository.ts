// src/domain/repositories/AuthRepository.ts

import { QueryClient } from "@tanstack/react-query";
import { authQueryOptions } from "../entities/auth";

export class AuthRepository {
  static getToken(queryClient: QueryClient): string | undefined {
    return queryClient.getQueryState<{
      access_token: string;
    }>(["auth"])?.data?.access_token;
  }
  static async fetchToken(queryClient: QueryClient) {
    return queryClient.ensureQueryData(authQueryOptions());
  }
}
