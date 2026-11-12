import { NotFoundView } from "@/features/dashboard/components/NotFoundView";

export default function NotFound() {
  return (
    <NotFoundView
      title="Settings page not found"
      message="We could not find that settings page."
      backLabel="Back to settings"
      backSegment="settings"
    />
  );
}
