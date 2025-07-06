import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../app/theme/theme";

export const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
); 