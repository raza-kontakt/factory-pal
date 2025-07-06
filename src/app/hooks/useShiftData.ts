import type { Log, Shift } from "../types/Shift";
import {
  parseShiftData,
  type ParsedShift,
  transformLogsForDisplay,
} from "../utils/shiftParser";

export const useShiftData = (
  shift: Shift | undefined
): ParsedShift | undefined => {
  if (!shift) return undefined;
  return parseShiftData(shift);
};

// New hook for chart data
export interface UseChartDataProps {
  shift: Shift;
  selectedCategory?: string;
}

export interface UseChartDataReturn {
  chartData: (Log & { displayValue: number })[];
  filteredLogs: Log[];
  allCategories: string[];
  totalLogs: number;
  categoryCount: Record<string, number>;
}

export const useChartData = ({
  shift,
  selectedCategory = "All",
}: UseChartDataProps): UseChartDataReturn => {
  const filteredLogs = selectedCategory === "All"
    ? shift.logs
    : shift.logs.filter((log: Log) => log.category === selectedCategory);

  const chartData = transformLogsForDisplay(filteredLogs);

  const allCategories = Array.from(new Set(shift.logs.map((item: Log) => item.category)));

  const categoryCount = shift.logs.reduce((acc, log) => {
    acc[log.category] = (acc[log.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    chartData,
    filteredLogs,
    allCategories,
    totalLogs: shift.logs.length,
    categoryCount,
  };
};
