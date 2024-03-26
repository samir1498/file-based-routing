import {
  Navigate,
  Outlet,
  createFileRoute,
  useRouteContext,
} from "@tanstack/react-router";
import { checkLogin } from "../domain/usecases/authUsecase";

function UserProtectedRoute() {
  const context = useRouteContext({ from: "/_user" });
  const isLoggedIn = checkLogin(context.queryClient);
  console.log(location.href);

  if (!isLoggedIn) {
    sessionStorage.setItem("redirect", location.pathname);

    return <Navigate to="/login" search={{ redirect: location.href }} />;
  }
  return <Outlet />;
}
export const Route = createFileRoute("/_user")({
  component: () => <UserProtectedRoute />,
});
