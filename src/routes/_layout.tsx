import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import * as Setting from "../Setting";

export const Route = createFileRoute("/_layout")({
  component: () => <Outlet />,
  beforeLoad: () => {
    if (!Setting.isLoggedIn()) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
    }
  },
});
