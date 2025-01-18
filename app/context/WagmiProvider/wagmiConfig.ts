import { http, createConfig, injected } from "wagmi";
import { safe, walletConnect } from "wagmi/connectors";
import { gnosis, mainnet, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [gnosis],
  transports: {
    [gnosis.id]: http(),
  },
  connectors: [
    safe({
      allowedDomains: [/^app\.safe\.global$/],
      debug: true,
      // chains,
      // options: {
      //   debug: false,
      // },
    }),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
    // injected(),
  ],
});
