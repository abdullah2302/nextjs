import Link from "next/link";

import { NotFoundView } from "@/features/dashboard/components/NotFoundView";

export default function WorkspaceNotFound() {
  return (
    <div className="bg-grid grid min-h-screen place-items-center px-5">
      <div>
        <Link
          href="/"
          className="font-display mb-4 block text-center text-2xl font-extrabold"
        >
          TeamFlow <span className="text-brand">✦</span>
        </Link>
        <NotFoundView
          title="Workspace not found"
          message="This workspace does not exist, or you do not have access to it. Check the address or pick another workspace."
          backLabel="Go to my workspace"
          href="/app"
        />
      </div>
    </div>
  );
}
