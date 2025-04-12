"use client";

import { cn } from "@/lib/utils";

export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};
