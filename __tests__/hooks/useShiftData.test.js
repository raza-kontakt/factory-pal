import { renderHook } from "@testing-library/react";
import { useChartData } from "../../src/hooks/useShiftData";
import { createMockShift } from "../../src/test-utils";

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
      id: "mech_problems",
      label: "Mechanical",
      value: 45,
      type: "minutes",
      description: "Mechanical problems",
      category: "downtime",
    },
    {
      id: "quality_issues",
      label: "Quality",
      value: 30,
      type: "minutes",
      description: "Quality issues",
      category: "downtime",
    },
  ],
});

describe("useChartData", () => {
  it("returns all logs when selectedCategory is 'All'", () => {
    const { result } = renderHook(() =>
      useChartData({ shift: mockShift, selectedCategory: "All" })
    );

    const { chartData, totalLogs } = result.current;

    expect(chartData).toHaveLength(5);
    expect(totalLogs).toBe(5);
  });

  it("filters logs by category when specific category selected", () => {
    const { result } = renderHook(() =>
      useChartData({ shift: mockShift, selectedCategory: "shift" })
    );

    const { chartData, totalLogs } = result.current;

    expect(chartData).toHaveLength(2);
    expect(chartData[0].category).toBe("shift");
    expect(chartData[1].category).toBe("shift");
    expect(totalLogs).toBe(5);
  });

  it("transforms logs for display correctly", () => {
    const { result } = renderHook(() =>
      useChartData({ shift: mockShift, selectedCategory: "All" })
    );

    const { chartData } = result.current;

    expect(chartData).toHaveLength(5);
    expect(chartData[0]).toHaveProperty("displayValue");
    expect(chartData[0].displayValue).toBe(480);
    expect(chartData[1].displayValue).toBe(75);
  });

  it("defaults to 'All' when NOO selectedCategory provided", () => {
    const { result } = renderHook(() => useChartData({ shift: mockShift }));

    const { chartData } = result.current;

    expect(chartData).toHaveLength(5);
  });
});
