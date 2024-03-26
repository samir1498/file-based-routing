import {
  Navigate,
  Outlet,
  createFileRoute,
  useRouteContext,
} from "@tanstack/react-router";

import { checkLogin } from "../domain/usecases/authUsecase";
import { userQueryOptions } from "../domain/entities/user";
import { getToken } from "../domain/entities/auth";

function AdminProtectedRoute() {
  const context = useRouteContext({ from: "/_admin" });
  const isLoggedIn = checkLogin(context.queryClient);
  const user = Route.useLoaderData();

  const isAdmin = user?.roles?.includes("admin");

  console.log("isloggedIn", isAdmin);
  console.log(location.href);

  if (!isLoggedIn || !isAdmin) {
    sessionStorage.setItem("redirect", location.pathname);

    return <Navigate to="/login" search={{ redirect: location.href }} />;
  }
  return <Outlet />;
}
export const Route = createFileRoute("/_admin")({
  component: () => <AdminProtectedRoute />,
  loader: async ({ context }) => {
    const token = await getToken(context.queryClient);
    const user = await context.queryClient.ensureQueryData(
      userQueryOptions(token ?? "")
    );

    return user;
  },
});
