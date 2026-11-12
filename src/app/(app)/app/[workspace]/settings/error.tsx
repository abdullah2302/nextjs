"use client";

import { SegmentError } from "@/features/dashboard/components/SegmentError";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <SegmentError {...props} />;
}
