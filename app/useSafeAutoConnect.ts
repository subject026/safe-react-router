import { useAccount, useConnect } from "wagmi";
import { useEffect } from "react";

export function useSafeAutoConnect() {
  const { connect, connectors, status } = useConnect();
  const account = useAccount();

  useEffect(() => {
    if (account.isConnected) return;
    const safeConnector = connectors.find((c) => c.id === "safe");
    if (!safeConnector) throw new Error("no safe connector present");

    connect(
      { connector: safeConnector },
      {
        onError: (error) => {
          console.log("connect onError: ", error);
        },
      },
    );
  }, [connect, connectors]);
}
