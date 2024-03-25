import {
  Navigate,
  createFileRoute,
  useRouteContext,
} from "@tanstack/react-router";

import * as Setting from "../Setting";

import { queryOptions } from "@tanstack/react-query";

const authQueryOptions = () =>
  queryOptions({
    queryKey: ["auth"],
    queryFn: () => Setting.CasdoorSDK.exchangeForAccessToken(),
  });

export const AuthCallback = () => {
  const auth = Route.useLoaderData();
  const context = useRouteContext({ from: "/callback" });
  if (auth.access_token) {
    Setting.setToken(auth.access_token);
    context.isLoggedIn = true;
    Route.router?.invalidate();
    console.log(auth.access_token);
  }

  return context.isLoggedIn && <Navigate to="/user" />;
};

export const Route = createFileRoute("/callback")({
  component: AuthCallback,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(authQueryOptions()),
});
