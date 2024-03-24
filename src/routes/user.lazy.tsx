import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/user")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome User!</h3>
    </div>
  );
}
