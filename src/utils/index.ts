import type { ErrorInfo } from "react";
import type { ErrorData } from "../types";

export const reloadPage = (): void => {
  window.location.reload();
};

export const getErrorData = (error: Error, errorInfo: ErrorInfo): ErrorData => {
  return {
    message: error.message,
    stack: error.stack,
    name: error.name,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    componentStack: errorInfo.componentStack || "",
  };
};

export const wait = async (ms: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

export * from "./chartUtils";
