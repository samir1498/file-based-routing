import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import * as Setting from "../../Setting";

export const Route = createFileRoute("/_layout/admin")({
  component: About,
});

function About() {
  useEffect(() => {
    if (Setting.isLoggedIn()) {
      Setting.getUserinfo().then((res) => {
        console.log(res);
      });
    }
  });
  return (
    <div className="p-2">
      <h3>Welcome Admin!</h3>
    </div>
  );
}
