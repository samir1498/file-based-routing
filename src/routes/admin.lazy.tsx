import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin")({
  component: About,
});

function About() {
  return <div className="p-2">Hello from Admin!</div>;
}
