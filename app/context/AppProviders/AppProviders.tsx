import type { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeTransactionProvider } from "../SafeTransactionContext";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SafeTransactionProvider>{children}</SafeTransactionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
