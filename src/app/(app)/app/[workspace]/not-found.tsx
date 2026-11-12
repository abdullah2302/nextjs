import { NotFoundView } from "@/features/dashboard/components/NotFoundView";

export default function NotFound() {
  return (
    <NotFoundView
      title="Page not found"
      message="We could not find that page in this workspace."
      backLabel="Back to overview"
      backSegment=""
    />
  );
}
