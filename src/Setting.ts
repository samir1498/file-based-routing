import Sdk from "casdoor-js-sdk";

const sdkConfig = {
  serverUrl: "http://localhost:8000",
  clientId: "294b09fbc17f95daf2fe",
  organizationName: "casbin",
  appName: "app-vue-python-example",
  redirectPath: "/callback",
};

export const CasdoorSDK = new Sdk(sdkConfig);

export const isLoggedIn = () => {
  const token = getToken();
  return token !== null && token.length > 0;
};

export const setToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const getUserinfo = () => {
  return CasdoorSDK.getUserInfo(getToken() ?? "");
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
