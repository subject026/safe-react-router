import { useQuery } from "@tanstack/react-query";
import type { Hex } from "viem";

import { Card } from "./Card";
import { H2 } from "./Typography";
import { useSafeTransaction } from "~/context/SafeTransactionContext";
import { useEffect } from "react";

export function SafeTransaction() {
  const { hash } = useSafeTransaction();

  return (
    <Card>
      <H2>Safe Transactions</H2>
      {hash ? <TransactionPresenter hash={hash} /> : "No transactions yet"}
    </Card>
  );
}

function TransactionPresenter({ hash }: { hash: Hex }) {
  const { setHash } = useSafeTransaction();

  const { status, data } = useQuery<{
    dataDecoded: {
      method: string;
    };
    confirmationsRequired: number;
    confirmations: Array<{
      owner: Hex;
    }>;
    isSuccessful: boolean;
  }>({
    queryKey: [`safe_tx_${hash}`],
    queryFn: async () =>
      fetch(
        `https://safe-transaction-gnosis-chain.safe.global/api/v1/multisig-transactions/${hash}`,
      ).then((res) => res.json()),
    refetchInterval: 3000,
  });

  const canBeExecuted =
    data?.confirmations.length === data?.confirmationsRequired;

  return (
    <section className="flex items-center justify-between py-4">
      {status === "success" && (
        <>
          <div className="flex flex-col items-center gap-2">
            <span>hash</span>
            <span>{hash.slice(0, 5) + "..." + hash.slice(-5)}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>confirmations</span>
            {data.confirmations.length}/{data.confirmationsRequired}
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>can execute?</span>
            <span>{canBeExecuted ? "✅" : "❌"}</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span>is successful?</span>
            <span>{data.isSuccessful ? "✅" : "❌"}</span>
          </div>
        </>
      )}
    </section>
  );
}
