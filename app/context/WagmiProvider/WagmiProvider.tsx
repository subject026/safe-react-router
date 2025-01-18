import type { ReactNode } from "react";
import { WagmiProvider as WagmiProviderLib } from "wagmi";
import { config } from "./wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function WagmiProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProviderLib config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProviderLib>
  );
}
