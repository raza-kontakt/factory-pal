import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../../theme/theme";
import { ErrorBoundary } from "react-error-boundary";
import GlobalErrorFallback from "./GlobalErrorFallback";
import { handleGlobalError } from "../../utils/errorHandler";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={GlobalErrorFallback}
      onError={handleGlobalError}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default AppWrapper;
