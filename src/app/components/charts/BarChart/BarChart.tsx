import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import styled from "styled-components";
import type { FactoryAnalyticsData } from "../../../consts/factory_analytics_data";
import CustomTooltip from "./CustomTooltip";
import { useTranslation } from "react-i18next";

const CATEGORY_COLORS: Record<string, string> = {
  efficiency: "#10b981",
  shift: "#3b82f6",
  downtime: "#ef4444",
};

interface FactoryAnalyticsBarChartProps {
  data: FactoryAnalyticsData;
  height?: number;
  showTitle?: boolean;
  showLegend?: boolean;
  className?: string;
}

const formatTickLabel = (value: string, data: FactoryAnalyticsData) => {
  const item = data.find((d) => d.id === value);
  const label = item ? item.label : value;

  if (window.innerWidth < 768 && label.length > 8) {
    return label.substring(0, 8) + "...";
  }

  return label;
};

const FactoryAnalyticsBarChart: React.FC<FactoryAnalyticsBarChartProps> = ({
  data,
  height = 400,
  showTitle = true,
  showLegend = true,
  className,
}) => {
  const chartData = data.map((item) => ({
    ...item,
    displayValue: item.value,
  }));

  const categories = Array.from(new Set(data.map((item) => item.category)));

  const { t } = useTranslation();

  return (
    <ChartContainer className={className}>
      {showTitle && <ChartTitle>{t("chart.barChart.title")}</ChartTitle>}

      <ChartWrapper style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f3f4f6"
              vertical={false}
            />
            <XAxis
              dataKey="id"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => formatTickLabel(value, data)}
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => {
                // Format large numbers
                if (Math.abs(value) >= 1000) {
                  return `${(value / 1000).toFixed(1)}k`;
                }
                return value.toString();
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />

            {showLegend && (
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                content={() => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      {categories.map((category) => (
                        <div
                          key={category}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <div
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor:
                                CATEGORY_COLORS[category] || "#6b7280",
                              borderRadius: "2px",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#6b7280",
                              textTransform: "capitalize",
                            }}
                          >
                            {category}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                }}
              />
            )}

            <Bar
              dataKey="displayValue"
              radius={[8, 8, 0, 0]}
              strokeWidth={2}
              stroke="#cococo"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CATEGORY_COLORS[entry.category] || "#6b7280"}
                />
              ))}
            </Bar>
          </BarChart>
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

const ChartTitle = styled.h2`
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
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

export default FactoryAnalyticsBarChart;
