import type { ComponentProps } from "react";

export function Button({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      className="rounded bg-pink-400 px-3 py-2 font-bold text-neutral-900"
      {...props}
    >
      {children}
    </button>
  );
}
