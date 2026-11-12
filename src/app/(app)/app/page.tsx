import { redirect } from "next/navigation";

import { DEFAULT_WORKSPACE } from "@/features/workspaces/data";

export default function AppIndexPage() {
  redirect(`/app/${DEFAULT_WORKSPACE}`);
}
