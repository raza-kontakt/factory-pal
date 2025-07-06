import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { reloadPage } from "../src/app/utils";

import {
  createMockT,
  setupMocks,
  cleanupMocks,
} from "../src/test-utils/utils/testUtils";
import {
  testTranslations,
  expectedElements,
} from "../src/test-utils/fixtures/globalErrorFallback.fixtures";
import {
  renderGlobalErrorFallback,
  getButtons,
} from "../src/test-utils/helpers/globalErrorFallback.helpers";

jest.mock("../src/app/utils", () => ({
  reloadPage: jest.fn(),
}));

const mockT = createMockT(testTranslations);

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: mockT,
  }),
}));

describe("GlobalErrorFallback", () => {
  const mockResetErrorBoundary = jest.fn();

  beforeEach(() => {
    setupMocks();
  });

  afterEach(() => {
    cleanupMocks();
  });

  describe("Edge Cases", () => {
    it("handles error with missing message gracefully", () => {
      renderGlobalErrorFallback(mockResetErrorBoundary);

      expect(screen.getByText(expectedElements.title)).toBeInTheDocument();
    });

    it("handles error with null/undefined properties", () => {
      renderGlobalErrorFallback(mockResetErrorBoundary);

      expect(screen.getByText(expectedElements.title)).toBeInTheDocument();
    });

    it("handles missing resetErrorBoundary function gracefully", () => {
      renderGlobalErrorFallback(undefined as unknown as () => void);

      const { tryAgainButton } = getButtons();
      expect(tryAgainButton).toBeInTheDocument();

      expect(() => fireEvent.click(tryAgainButton)).not.toThrow();
    });
  });

  it("calls reloadPage when Reload Page button is clicked", async () => {
    renderGlobalErrorFallback(mockResetErrorBoundary);

    const { reloadPageButton } = getButtons();
    fireEvent.click(reloadPageButton);

    await waitFor(() => {
      expect(reloadPage).toHaveBeenCalledTimes(1);
    });
  });
});
