import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { default: "Workspace", template: "%s | TeamFlow" },
  robots: { index: false },
};

// Marketing navbar/footer are intentionally absent here.
// The dashboard shell lives in app/[workspace]/layout.tsx because it needs the workspace.
export default function AppGroupLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="bg-paper min-h-screen">{children}</div>;
}
