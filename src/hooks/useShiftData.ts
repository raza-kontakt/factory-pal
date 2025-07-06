import type { Log, Shift } from "../types/Shift";
import { transformLogsForDisplay } from "../utils/shiftParser";

export interface UseChartDataProps {
  shift: Shift;
  selectedCategory?: string;
}

export interface UseChartDataReturn {
  chartData: (Log & { displayValue: number })[];
  filteredLogs: Log[];
  totalLogs: number;
}

export const useChartData = ({
  shift,
  selectedCategory = "All",
}: UseChartDataProps): UseChartDataReturn => {
  const filteredLogs =
    selectedCategory === "All"
      ? shift.logs
      : shift.logs.filter((log: Log) => log.category === selectedCategory);

  const chartData = transformLogsForDisplay(filteredLogs);

  return {
    chartData,
    filteredLogs,
    totalLogs: shift.logs.length,
  };
};
