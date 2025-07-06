import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import styled from "styled-components";
import CustomTooltip from "./ChartTooltip";
import ChartLegend from "./ChartLegend";
import type { Log, Shift } from "../../../types/Shift";
import { useChartData } from "../../../hooks/useShiftData";
import { CATEGORY_COLORS } from "../../../utils/consts/chartConstants";
import { colors } from "../../../utils/consts/colors";
import { formatTickLabel, formatYAxisValue } from "../../../utils";

interface ShiftBarChartProps {
  shift: Shift;
  height?: number;
  showTitle?: boolean;
  showLegend?: boolean;
  className?: string;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const BarChart: React.FC<ShiftBarChartProps> = ({
  shift,
  height = 500,
  showLegend = true,
  className,
  selectedCategory = "All",
  onCategoryChange,
}) => {
  const { chartData, filteredLogs, allCategories } = useChartData({
    shift,
    selectedCategory,
  });

  return (
    <ChartContainer className={className}>
      <ChartWrapper style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <XAxis
              dataKey="id"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => formatTickLabel(value, filteredLogs)}
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => formatYAxisValue(value)}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />

            <ChartLegend
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={onCategoryChange}
              showLegend={showLegend}
            />

            <Bar
              dataKey="displayValue"
              radius={[8, 8, 0, 0]}
              strokeWidth={1}
              stroke="#c0c0c0"
            >
              {chartData.map((entry: Log, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CATEGORY_COLORS[entry?.category] || colors.primary.main}
                />
              ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0px;
  margin: 16px 0;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export default BarChart;
