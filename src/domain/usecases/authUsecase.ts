// src/application/auth/AuthUseCase.ts

import { QueryClient } from "@tanstack/react-query";
import { AuthRepository } from "../repositories/AuthRepository";

export class AuthUseCase {
  /**
   * Checks if the user is logged in.
   *
   * @param {QueryClient} queryClient - The query client used to fetch the token.
   * @return {Promise<boolean>} A promise that resolves to true if the user is logged in, false otherwise.
   */
  static checkLogin(queryClient: QueryClient): boolean {
    const token = AuthRepository.getToken(queryClient);
    return token !== undefined && token !== null && token.length > 0;
  }
  static logout(queryClient: QueryClient) {
    queryClient.clear();
    sessionStorage.removeItem("accessToken");
  }
  static getToken(queryClient: QueryClient): string | undefined {
    return AuthRepository.getToken(queryClient);
  }
}
