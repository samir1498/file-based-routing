// src/routes/_user.tsx
import {
  Navigate,
  Outlet,
  createFileRoute,
  useRouteContext,
} from "@tanstack/react-router";
import { AuthUseCase } from "../domain/usecases/AuthUseCase";

function UserProtectedRoute() {
  const context = useRouteContext({ from: "/_user" });
  const isLoggedIn = AuthUseCase.checkLogin(context.queryClient);

  if (!isLoggedIn) {
    sessionStorage.setItem("redirect", location.pathname);

    return <Navigate to="/login" search={{ redirect: location.href }} />;
  }
  return <Outlet />;
}
export const Route = createFileRoute("/_user")({
  component: () => <UserProtectedRoute />,
});
