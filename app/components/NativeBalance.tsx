import { formatUnits, type Hex } from "viem";
import { useBalance } from "wagmi";

export function NativeBalance({ address }: { address: Hex }) {
  const { status, data } = useBalance({
    address,
  });

  return (
    <div>
      native balance:{" "}
      {status === "success" && formatUnits(data.value, data.decimals)}
    </div>
  );
}
