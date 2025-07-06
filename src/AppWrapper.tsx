import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme.tsx";
import { ErrorBoundary } from "react-error-boundary";
import GlobalErrorFallback from "./components/common/GlobalErrorFallback.tsx";
import { handleGlobalError } from "./utils/errorHandler.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/QueryClient.ts";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./locales/i18n.ts";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={GlobalErrorFallback}
      onError={handleGlobalError}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default AppWrapper;
