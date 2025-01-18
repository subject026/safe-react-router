import { formatUnits, type Hex } from "viem";

import { chainConfig } from "~/chainConfig";
import { useReadErc20BalanceOf } from "~/generated";

export function BreadBalance({ address }: { address: Hex }) {
  const { status, data } = useReadErc20BalanceOf({
    address: chainConfig.BREAD.address,
    args: [address],
  });

  return <div>{status === "success" && formatUnits(data, 18)}</div>;
}
