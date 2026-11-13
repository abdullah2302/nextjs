"use client";

import { useEffect } from "react";

export function ExitIntent() {
  useEffect(() => {
    // The popup is a JavaScript custom element without TypeScript declarations.
    // @ts-expect-error No declaration file is provided for this module.
    import("@/lib/exit-intent-popup.js");
  }, []);

  return <exit-intent-popup auto-close="3000" once="false" />;
}