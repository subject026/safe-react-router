import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { breadAbi } from "./abi/bread";

export default defineConfig({
  out: "app/generated.ts",
  contracts: [
    {
      name: "bread",
      abi: breadAbi,
    },
  ],
  plugins: [react()],
});
