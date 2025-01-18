import { useReadErc20BalanceOf } from "~/generated";
import type { Route } from "../+types/root";
import { useSentryTest } from "~/hooks/useSentryTest";
import { chainConfig } from "~/chainConfig";
import { formatUnits } from "viem";
import { NativeBalance } from "~/components/NativeBalance";
import { BreadBalance } from "~/components/BreadBalance";
import { useAccount } from "wagmi";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  // const { status, data, error } = useSentryTest();

  const account = useAccount();
  return (
    <div>
      <h1>this is the home page</h1>
      <h2>
        {account.status === "connected" && (
          <>
            {account.address}
            <NativeBalance address={account.address} />
            <BreadBalance address={account.address} />
          </>
        )}
      </h2>
    </div>
  );
}
