import { useEffect, useState } from "react";
import SafeSDK from "@safe-global/safe-apps-sdk";
import { parseUnits, type Hex } from "viem";

import { Card } from "./Card";
import { H2 } from "./Typography";
import { useWriteBreadBurn } from "~/generated";
import { chainConfig } from "~/chainConfig";
import { Button } from "./Button";
import { useSafeTransaction } from "~/context/SafeTransactionContext";

export function Burn({ address }: { address: Hex }) {
  const [amount, setAmount] = useState("");

  const { writeContract, status, data } = useWriteBreadBurn();
  const { setHash } = useSafeTransaction();

  useEffect(() => {
    if (!data) return;
    setHash(data);

    // const sdk = new SafeSDK();
    // sdk.txs.getBySafeTxHash(data).then((res) => {
    //   console.log("safeByTxHash: ", res);
    // });
  }, [status, data]);

  return (
    <Card>
      <H2>Burn</H2>
      <div className="flex justify-between">
        <input
          type="text"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <Button
          onClick={() => {
            writeContract({
              address: chainConfig.BREAD.address,
              account: address,
              args: [parseUnits(amount, 18), address],
            });
          }}
        >
          Burn
        </Button>
      </div>
    </Card>
  );
}
