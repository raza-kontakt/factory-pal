import {
  convertToMinutes,
  computeShiftData,
  getParsedShift,
} from "../../src/utils/shiftParser";
import { createMockShift } from "../../src/test-utils";

describe("shiftParser", () => {
  describe("convertToMinutes", () => {
    it("converts seconds to minutes", () => {
      expect(convertToMinutes(3600, "secs")).toBe(60);
    });

    it("converts hours to minutes", () => {
      expect(convertToMinutes(2, "hours")).toBe(120);
    });

    it("converts minutes to minutes", () => {
      expect(convertToMinutes(30, "minutes")).toBe(30);
    });

    it("handles zero values", () => {
      expect(convertToMinutes(0, "secs")).toBe(0);
      expect(convertToMinutes(0, "hours")).toBe(0);
      expect(convertToMinutes(0, "minutes")).toBe(0);
    });

    it("handles unknown units by defaulting to minutes", () => {
      expect(convertToMinutes(45, "unknown")).toBe(45);
    });
  });

  describe("computeShiftData", () => {
    it("computes shift metrics correctly", () => {
      const mockShift = createMockShift({
        logs: [
          {
            id: "shift_duration",
            label: "Duration",
            value: 480,
            type: "minutes",
            description: "Shift duration",
            category: "shift",
          },
          {
            id: "oee",
            label: "OEE",
            value: 75,
            type: "percentage",
            description: "Overall Equipment Efficiency",
            category: "efficiency",
          },
          {
            id: "cln_shift",
            label: "Cleaning",
            value: 60,
            type: "minutes",
            description: "Cleaning time",
            category: "shift",
          },
          {
            id: "unexplained",
            label: "Unexplained",
            value: 30,
            type: "minutes",
            description: "Unexplained downtime",
            category: "downtime",
          },
          {
            id: "mech_problems",
            label: "Mechanical",
            value: 45,
            type: "minutes",
            description: "Mechanical problems",
            category: "downtime",
          },
        ],
      });

      const result = computeShiftData(mockShift);

      expect(result.computed.duration).toEqual({ value: 480, unit: "minutes" });
      expect(result.computed.oee).toBe(75);
      expect(result.computed.cleaningTime).toEqual({
        value: 60,
        unit: "minutes",
      });
      expect(result.computed.totalDowntime).toEqual({
        value: 135,
        unit: "minutes",
      }); // 60 + 30 + 45
      expect(result.computed.availability).toEqual({ value: 72, unit: "%" }); // (480-135)/480 * 100 = 72%
    });
  });

  describe("getParsedShift", () => {
    it("converts OEE percentage to normal percentage", () => {
      const mockShift = createMockShift({
        logs: [
          {
            id: "oee",
            label: "OEE",
            value: 0.68,
            type: "percentage",
            description: "Overall Equipment Efficiency",
            category: "efficiency",
          },
        ],
      });

      const result = getParsedShift(mockShift);
      const oeeLog = result.logs.find((log) => log.id === "oee");

      expect(oeeLog.value).toBe(68); // 0.68 * 100
    });

    it("converts time-based logs to minutes", () => {
      const mockShift = createMockShift({
        logs: [
          {
            id: "shift_duration",
            label: "Duration",
            value: 8,
            type: "hours",
            description: "Shift duration",
            category: "shift",
          },
        ],
      });

      const result = getParsedShift(mockShift);

      const shiftDuration = result.logs.find(
        (log) => log.id === "shift_duration"
      );

      expect(shiftDuration.value).toBe(480); // 8 hours = 480 minutes
      expect(shiftDuration.type).toBe("minutes");
    });

    it("handles empty logs array", () => {
      const mockShift = createMockShift({
        logs: [],
      });

      const result = getParsedShift(mockShift);

      expect(result.logs).toEqual([]);
    });
  });
});
