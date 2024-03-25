import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => <Outlet />,
  beforeLoad: ({ context }) => {
    const isLoggedIn = context.queryClient.getQueryState<{
      access_token: string;
    }>(["auth"])?.data?.access_token;
    console.log("isloggedin", isLoggedIn);
    if (!isLoggedIn) {
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
    return isLoggedIn;
  },
});
