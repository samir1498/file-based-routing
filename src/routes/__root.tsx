import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import * as Setting from "../Setting";
import { Context } from "../types";

function Layout() {
  const context = useRouteContext({ from: "__root__" });
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/admin" className="[&.active]:font-bold">
          admin
        </Link>{" "}
        <Link to="/user" className="[&.active]:font-bold">
          user
        </Link>
        <Link
          to="/login"
          style={{
            marginLeft: "1rem",
          }}
          onClick={async () => {
            Setting.logout();
            context.queryClient.clear();

            Route.router?.invalidate();
          }}
        >
          Logout
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRouteWithContext<Context>()({
  component: Layout,
});
