import { http, createConfig } from "wagmi";
import { safe } from "wagmi/connectors";
import { gnosis } from "wagmi/chains";

export const config = createConfig({
  chains: [gnosis],
  transports: {
    [gnosis.id]: http(),
  },
  connectors: [safe()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
