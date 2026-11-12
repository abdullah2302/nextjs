import { NotFoundView } from "@/features/dashboard/components/NotFoundView";

export default function NotFound() {
  return (
    <NotFoundView
      title="Team page not found"
      message="We could not find that team page."
      backLabel="Back to team"
      backSegment="team"
    />
  );
}
