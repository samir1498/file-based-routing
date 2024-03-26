// src/routes/_admin.tsx
import {
  Navigate,
  Outlet,
  createFileRoute,
  useRouteContext,
} from "@tanstack/react-router";

import { userQueryOptions } from "../domain/entities/user";
import { AuthUseCase } from "../domain/usecases/AuthUseCase";

function AdminProtectedRoute() {
  const context = useRouteContext({ from: "/_admin" });
  const isLoggedIn = AuthUseCase.checkLogin(context.queryClient);
  const user = Route.useLoaderData();

  const isAdmin = user?.roles?.includes("admin");

  if (!isLoggedIn || !isAdmin) {
    sessionStorage.setItem("redirect", location.pathname);

    return <Navigate to="/login" search={{ redirect: location.href }} />;
  }
  return <Outlet />;
}
export const Route = createFileRoute("/_admin")({
  component: () => <AdminProtectedRoute />,
  loader: async ({ context }) => {
    const token = AuthUseCase.getToken(context.queryClient);
    const user = await context.queryClient.ensureQueryData(
      userQueryOptions(token ?? "")
    );

    return user;
  },
});
