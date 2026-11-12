import { NotFoundView } from "@/features/dashboard/components/NotFoundView";

export default function NotFound() {
  return (
    <NotFoundView
      title="Project not found"
      message="This project does not exist or was removed."
      backLabel="Back to projects"
      backSegment="projects"
    />
  );
}
