import { createFileRoute } from "@tanstack/react-router";

import * as Setting from "../Setting";

const Login = () => {
  const login = () => {
    Setting.CasdoorSDK.signin_redirect();
  };

  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <button onClick={login}>Casdoor Login</button>
    </div>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
  beforeLoad: ({ context }) => {
    console.log(context);
  },
});
