// src/domain/repositories/UserRepository.ts
import Sdk from "casdoor-js-sdk";
import { Userinfo } from "../entities/user";

export class UserRepository {
  static async getUserInfo(
    token: string,
    CasdoorSDK: Sdk
  ): Promise<Userinfo | undefined> {
    return (await CasdoorSDK.getUserInfo(token)) as Userinfo;
  }

  // Add more methods as needed for user data access
}
