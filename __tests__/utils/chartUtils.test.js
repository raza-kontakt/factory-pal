import { formatTickLabel } from "../../src/utils/chartUtils";

describe("chartUtils", () => {
  describe("formatTickLabel", () => {
    const originalInnerWidth = window.innerWidth;

    afterEach(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: originalInnerWidth,
      });
    });

    it("returns full label on desktop (width >= 768)", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });

      const data = [
        { id: "test-id", label: "Very Long Label Name", value: 100 },
      ];

      const result = formatTickLabel("test-id", data);

      expect(result).toBe("Very Long Label Name");
    });

    it("truncates long labels on mobile (width < 768)", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 500,
      });

      const data = [
        { id: "test-id", label: "Very Long Label Name", value: 100 },
      ];

      const result = formatTickLabel("test-id", data);

      expect(result).toBe("Very Lon...");
    });

    it("returns exactly 8 characters without truncation on mobile", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 500,
      });

      const data = [{ id: "test-id", label: "8CharMax", value: 100 }];

      const result = formatTickLabel("test-id", data);

      expect(result).toBe("8CharMax");
    });
  });
});
