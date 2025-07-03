import type { ErrorInfo } from "react";
import { getErrorData } from ".";

export const handleGlobalError = (error: Error, errorInfo: ErrorInfo) => {
  const errorData = getErrorData(error, errorInfo);

  if (process.env.NODE_ENV === "development") {
    console.log(errorData);
  }

  if (process.env.NODE_ENV === "production") {
    console.error("Production Error:", errorData);

    // TODO: Send error to error reporting service
  }
};
