import { createContext, use, useState, type ReactNode } from "react";
import type { Hex } from "viem";

const SafeTransactionContext = createContext<{
  hash: Hex | null;
  setHash: (hash: Hex | null) => void;
} | null>(null);

export function SafeTransactionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Hex | null>(null);

  function setHash(hash: Hex | null) {
    setState(hash);
  }

  return (
    <SafeTransactionContext.Provider value={{ hash: state, setHash }}>
      {children}
    </SafeTransactionContext.Provider>
  );
}

export function useSafeTransaction() {
  const state = use(SafeTransactionContext);
  if (!state)
    throw new Error(
      "useSafeTransaction must be called inside a SafeTransactionContext",
    );
  return state;
}
