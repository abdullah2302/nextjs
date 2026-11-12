import { NotFoundView } from "@/features/dashboard/components/NotFoundView";

export default function NotFound() {
  return (
    <NotFoundView
      title="Projects not found"
      message="We could not find those projects."
      backLabel="Back to projects"
      backSegment="projects"
    />
  );
}
