import { useAccount, useConnect } from "wagmi";
import { useEffect, useState } from "react";

export function useSafeAutoConnect() {
  const { connect, connectors } = useConnect();

  useEffect(() => {
    const safeConnector = connectors.find((c) => c.id === "safe");

    if (safeConnector) connect({ connector: safeConnector });
  }, [connect, connectors]);
}
