import type { ReactNode } from "react";

import { Footer } from "@/features/layout/components/Footer";
import { Navbar } from "@/features/layout/components/Navbar";

export default function MarketingLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
