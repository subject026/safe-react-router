import { captureException } from "@sentry/react";
import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";

export const withSentry = (fn: () => UseQueryResult) => () => {
  const { error, ...rest } = fn();

  useEffect(() => {
    if (error) {
      captureException(error);
    }
  }, [error]);

  return { error, ...rest };
};
