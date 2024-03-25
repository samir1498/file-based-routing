import { createFileRoute } from "@tanstack/react-router";
import * as Setting from "../../Setting";
import { useEffect, useState } from "react";
export const Route = createFileRoute("/_layout/user")({
  component: Index,
});

function Index() {
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const res = await Setting.getUserinfo();
        console.log(res);
        if (res.name) {
          setUser(res.name); // Only set user if name exists
        } else {
          console.warn("Missing 'name' property in userinfo response");
        }
      } catch (error) {
        console.error("Error fetching userinfo:", error);
      }
    }
    fetchUserInfo();
  }, []);
  return (
    <div className="p-2">
      <h3>Welcome {user}</h3>
    </div>
  );
}
