import { useQuery } from "@tanstack/react-query";
import { withSentry } from "../withSentry";

export const useSentryTest = withSentry(() => {
  const thingy = useQuery({
    queryKey: ["testQuery"],
    queryFn: async () => {
      throw new Error("throw an error");
    },
  });
  return thingy;
});
