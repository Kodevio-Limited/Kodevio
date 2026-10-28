"use client";

import type { ReactNode } from "react";

/* Natural 1:1 scroll overlay: the hero is sticky and this content scrolls over it. */
export default function CompanyReveal({
  children,
}: {
  enabled?: boolean;
  children: ReactNode;
}) {
  return <div className="relative z-10">{children}</div>;
}
