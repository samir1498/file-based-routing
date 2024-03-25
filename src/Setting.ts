import Sdk from "casdoor-js-sdk";

const sdkConfig = {
  serverUrl: import.meta.env.VITE_SERVER_URL,
  clientId: import.meta.env.VITE_CLIENT_ID,
  organizationName: import.meta.env.VITE_ORG_NAME,
  appName: import.meta.env.VITE_APP_NAME,
  redirectPath: import.meta.env.VITE_REDIRECT_PATH,
};
console.log(sdkConfig);

export const CasdoorSDK = new Sdk(sdkConfig);

export const isLoggedIn = () => {
  const token = getToken();
  return token !== null && token !== "undefiend" && token.length > 0;
};

export const setToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getToken = () => {
  return localStorage.getItem("accessToken");
};

interface Userinfo extends Response {
  aud: string;
  iss: string;
  name: string;
  picture?: string; // Optional property
  preferred_username: string;
  sub: string;
}

export const getUserinfo = (): Promise<Userinfo> => {
  return CasdoorSDK.getUserInfo(getToken() ?? "") as Promise<Userinfo>;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
