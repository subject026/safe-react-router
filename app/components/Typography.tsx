import type { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}
