import type { ErrorInfo } from "react";

export interface ErrorData {
  message: string;
  stack?: string;
  name: string;
  timestamp: string;
  url: string;
  userAgent: string;
  componentStack: string;
}

export const reloadPage = (): void => {
  // eslint-disable-next-line no-self-assign
  window.location.href = window.location.href;
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

export * from "./chartUtils";
