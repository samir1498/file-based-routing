// src/application/user/UserUseCase.ts

import { CasdoorSDK } from "../../Setting";
import { Userinfo } from "../entities/user";
import { UserRepository } from "../repositories/UserRepository";

export class UserUseCase {
  static async getUserInfo(token: string): Promise<Userinfo | undefined> {
    return await UserRepository.getUserInfo(token, CasdoorSDK);
  }
}
