"use client";

import { SegmentError } from "@/features/dashboard/components/SegmentError";

export default function AppError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-grid grid min-h-screen place-items-center px-5">
      <SegmentError {...props} />
    </div>
  );
}
