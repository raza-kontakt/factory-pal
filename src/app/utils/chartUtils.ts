import type { FactoryAnalyticsData } from "./consts/factory_analytics_data";

export const formatUnit = (type: string): string => {
  switch (type) {
    case "percentage":
      return "%";
    case "secs":
      return " seconds";
    case "hours":
      return " hours";
    case "number":
      return "";
    default:
      return "";
  }
};

export const formatTickLabel = (
  value: string,
  data: FactoryAnalyticsData
): string => {
  const item = data.flatMap(shift => shift.logs).find((log) => log.id === value);
  const label = item ? item.label : value;

  if (
    typeof window !== "undefined" &&
    window.innerWidth < 768 &&
    label.length > 8
  ) {
    return label.substring(0, 8) + "...";
  }

  return label;
};

export const formatYAxisValue = (value: number): string => {
  if (Math.abs(value) >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};
