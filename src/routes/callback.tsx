// callback.tsx
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { authQueryOptions } from "../domain/entities/auth";

export const AuthCallback = () => {
  const auth = Route.useLoaderData();
  return (
    auth.access_token && (
      <Navigate to={sessionStorage.getItem("redirect") ?? "/"} />
    )
  );
};

export const Route = createFileRoute("/callback")({
  component: AuthCallback,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(authQueryOptions()),
});
