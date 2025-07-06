import React from "react";
import { render } from "@testing-library/react";
import BarChart from "../../src/components/charts/BarChart/BarChart";
import { createMockShift } from "../../src/test-utils";

jest.mock("../../src/hooks/useShiftData", () => ({
  useChartData: jest.fn(() => ({
    chartData: [
      { id: "shift_duration", displayValue: 480, category: "shift" },
      { id: "oee", displayValue: 75, category: "efficiency" },
      { id: "downtime", displayValue: 45, category: "downtime" },
    ],
  })),
}));

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
  ],
});

const mockShiftLogCategories = ["All", "shift", "efficiency", "downtime"];

describe("BarChart", () => {
  it("RENDERS", () => {
    const { container } = render(
      <BarChart shift={mockShift} shiftLogCategories={mockShiftLogCategories} />
    );

    expect(container).toBeInTheDocument();
  });

  it("renders with custom height", () => {
    render(
      <BarChart
        shift={mockShift}
        height={300}
        shiftLogCategories={mockShiftLogCategories}
      />
    );

    const chartWrapper = document.querySelector("div[style*='height: 300px']");
    expect(chartWrapper).toBeInTheDocument();
  });

  it("calls useChartData hook with correct parameters", () => {
    const useChartData = require("../../src/hooks/useShiftData").useChartData;

    render(
      <BarChart
        shift={mockShift}
        selectedCategory="shift"
        shiftLogCategories={mockShiftLogCategories}
      />
    );

    expect(useChartData).toHaveBeenCalledWith({
      shift: mockShift,
      selectedCategory: "shift",
    });
  });

  it("renders responsive container", () => {
    render(
      <BarChart shift={mockShift} shiftLogCategories={mockShiftLogCategories} />
    );

    const responsiveContainer = document.querySelector(
      ".recharts-responsive-container"
    );
    expect(responsiveContainer).toBeInTheDocument();
  });
});
