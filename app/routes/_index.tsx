import { useAccount } from "wagmi";
import type { Route } from "../+types/root";

import { NativeBalance } from "~/components/NativeBalance";
import { BreadBalance } from "~/components/BreadBalance";
import { Burn } from "~/components/Burn";
import { SafeTransaction } from "~/components/SafeTransaction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  const account = useAccount();

  return (
    <div>
      {account.status === "connected" && (
        <>
          {account.address}
          <div className="grid gap-6">
            <NativeBalance address={account.address} />
            <BreadBalance address={account.address} />
            <Burn address={account.address} />
            <SafeTransaction />
          </div>
        </>
      )}
    </div>
  );
}
