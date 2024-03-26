import { CasdoorSDK } from "../../Setting";
import { Userinfo } from "../entities/user";

export async function getUserInfo(token: string) {
  return (await CasdoorSDK.getUserInfo(token)) as Userinfo;
}
