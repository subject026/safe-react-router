import { http, createConfig } from "wagmi";
import { metaMask, safe } from "wagmi/connectors";
import { gnosis } from "wagmi/chains";

export const config = createConfig({
  chains: [gnosis],
  transports: {
    [gnosis.id]: http(),
  },
  connectors: [metaMask(), safe()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
