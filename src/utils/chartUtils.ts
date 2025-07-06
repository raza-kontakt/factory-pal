import type { Log } from "../types/Shift";

export const formatYAxisValue = (value: number): string => {
  if (Math.abs(value) >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};

export const formatTickLabel = (value: string, data: Log[]): string => {
  const item = data.find((d: Log) => d.id === value);
  const label = item ? item.label : value;

  if (window.innerWidth < 768 && label.length > 8) {
    return label.substring(0, 8) + "...";
  }

  return label;
};
