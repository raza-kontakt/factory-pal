import React from "react";
import { render, screen } from "@testing-library/react";
import { TestWrapper } from "../utils/TestWrapper";
import GlobalErrorFallback from "../../app/components/common/GlobalErrorFallback";
import { expectedElements } from "../fixtures/globalErrorFallback.fixtures";

// Helper to render GlobalErrorFallback with TestWrapper
export const renderGlobalErrorFallback = (
  error: Error,
  resetErrorBoundary: () => void = jest.fn()
) => {
  return render(
    React.createElement(TestWrapper, {
      children: React.createElement(GlobalErrorFallback, {
        error,
        resetErrorBoundary,
      }),
    })
  );
};

// Helper to get buttons
export const getButtons = () => ({
  tryAgainButton: screen.getByRole("button", {
    name: expectedElements.tryAgainButton,
  }),
  reloadPageButton: screen.getByRole("button", {
    name: expectedElements.reloadPageButton,
  }),
});
