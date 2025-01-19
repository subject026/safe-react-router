import { useState } from "react";

import { Card } from "./Card";
import { H2 } from "./Typography";

export function Bake() {
  const [amount, setAmount] = useState("");

  return (
    <Card>
      <H2>Bake</H2>
      <div className="flex justify-between">
        <input
          type="text"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button className="rounded bg-pink-400 px-3 py-2 font-bold text-neutral-900">
          Bake
        </button>
      </div>
    </Card>
  );
}
