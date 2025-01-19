import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <section className="grid gap-4 rounded bg-neutral-900 p-4">
      {children}
    </section>
  );
}
