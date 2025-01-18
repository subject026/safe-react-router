import { useConnect } from "wagmi";
import { useEffect } from "react";

export function useSafeAutoConnect() {
  const { connect, connectors } = useConnect();

  useEffect(() => {
    const safeConnector = connectors.find((c) => c.name === "Safe");
    console.log({ connectors });
    safeConnector!.connect();
    if (safeConnector) connect({ connector: safeConnector });
  }, [connect, connectors]);
}
