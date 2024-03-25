import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import * as Setting from "../Setting";
import { Context } from "../types";

export const Route = createRootRouteWithContext<Context>()({
  component: () => (
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
          onClick={() => {
            Setting.logout();
          }}
        >
          Logout
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
