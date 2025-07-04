import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { reloadPage } from "../app/utils";

import {
  createMockT,
  setupMocks,
  cleanupMocks,
} from "../test-utils/utils/testUtils";
import {
  testTranslations,
  testErrors,
  expectedElements,
} from "../test-utils/fixtures/globalErrorFallback.fixtures";
import {
  renderGlobalErrorFallback,
  getButtons,
} from "../test-utils/helpers/globalErrorFallback.helpers";

// Mock the utilities
jest.mock("../app/utils", () => ({
  reloadPage: jest.fn(),
}));

// Mock i18n with actual translations
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
      renderGlobalErrorFallback(
        testErrors.withoutMessage,
        mockResetErrorBoundary
      );

      expect(screen.getByText(expectedElements.title)).toBeInTheDocument();
    });

    it("handles error with null/undefined properties", () => {
      renderGlobalErrorFallback(testErrors.malformed, mockResetErrorBoundary);

      expect(screen.getByText(expectedElements.title)).toBeInTheDocument();
    });

    it("handles missing resetErrorBoundary function gracefully", () => {
      renderGlobalErrorFallback(
        testErrors.basic,
        undefined as unknown as () => void
      );

      const { tryAgainButton } = getButtons();
      expect(tryAgainButton).toBeInTheDocument();

      expect(() => fireEvent.click(tryAgainButton)).not.toThrow();
    });
  });

  it("calls reloadPage when Reload Page button is clicked", async () => {
    renderGlobalErrorFallback(testErrors.basic, mockResetErrorBoundary);

    const { reloadPageButton } = getButtons();
    fireEvent.click(reloadPageButton);

    await waitFor(() => {
      expect(reloadPage).toHaveBeenCalledTimes(1);
    });
  });
});
