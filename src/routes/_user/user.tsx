// src/routes/_user/user.tsx
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { UserUseCase } from "../../domain/usecases/UserUseCase";
import { AuthUseCase } from "../../domain/usecases/AuthUseCase";
export const Route = createFileRoute("/_user/user")({
  component: Index,
});

function Index() {
  const [user, setUser] = useState("");
  const context = useRouteContext({ from: "/_user/user" });
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const res = await UserUseCase.getUserInfo(
          AuthUseCase.getToken(context.queryClient) ?? ""
        );
        if (res?.name) {
          setUser(res.name); // Only set user if name exists
        } else {
          console.warn("Missing 'name' property in userinfo response");
        }
      } catch (error) {
        console.error("Error fetching userinfo:", error);
      }
    }
    fetchUserInfo();
  }, [context.queryClient]);
  return (
    <div className="p-2">
      <h3>Welcome {user}</h3>
    </div>
  );
}
