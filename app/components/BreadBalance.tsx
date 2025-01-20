import { formatUnits, type Hex } from "viem";

import { chainConfig } from "~/chainConfig";
import { useReadBreadBalanceOf } from "~/generated";

export function BreadBalance({ address }: { address: Hex }) {
  const { status, data } = useReadBreadBalanceOf({
    address: chainConfig.BREAD.address,
    args: [address],
    query: {
      refetchInterval: 3000,
    },
  });

  return (
    <div>Bread balance: {status === "success" && formatUnits(data, 18)}</div>
  );
}
