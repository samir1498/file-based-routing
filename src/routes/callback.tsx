import {
  Navigate,
  createFileRoute,
  redirect,
  useSearch,
} from "@tanstack/react-router";

import { useEffect } from "react";
import * as Setting from "../Setting";
import { setToken } from "../Setting";

export const AuthCallback = () => {
  const params = useSearch({ from: "/callback" });
  console.log(params);
  useEffect(() => {
    Setting.CasdoorSDK.exchangeForAccessToken().then((res) => {
      setToken(res.access_token);
      redirect({ to: "/user" });
    });
  }, []);
  return <Navigate to="/user" />;
};

export const Route = createFileRoute("/callback")({
  component: AuthCallback,
});
