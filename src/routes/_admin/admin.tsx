// src/routes/_admin/admin.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/admin")({
  component: Admin,
});

function Admin() {
  return (
    <div className="p-2">
      <h3>Welcome Admin!</h3>
    </div>
  );
}
