// Settings.ts
import Sdk from "casdoor-js-sdk";

const sdkConfig = {
  serverUrl: import.meta.env.VITE_SERVER_URL,
  clientId: import.meta.env.VITE_CLIENT_ID,
  organizationName: import.meta.env.VITE_ORG_NAME,
  appName: import.meta.env.VITE_APP_NAME,
  redirectPath: import.meta.env.VITE_REDIRECT_PATH,
};

export const CasdoorSDK = new Sdk(sdkConfig);
export const ServerUrl = import.meta.env.VITE_SERVER_URL;

export const logout = () => {
  localStorage.removeItem("accessToken");
};
