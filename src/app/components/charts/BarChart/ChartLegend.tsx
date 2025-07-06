import React from "react";
import styled from "styled-components";
import { Legend } from "recharts";
import { CATEGORY_COLORS } from "../../../utils/consts/chartConstants";

interface ChartLegendProps {
  categories: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  showLegend?: boolean;
}

const ChartLegend: React.FC<ChartLegendProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  showLegend = true,
}) => {
  if (!showLegend) return null;

  return (
    <Legend
      wrapperStyle={{ paddingTop: "20px" }}
      content={() => (
        <LegendContainer>
          {categories?.map((category: string) => (
            <LegendItem
              key={category}
              onClick={() => onCategoryChange?.(category)}
              $isClickable={!!onCategoryChange}
              $isSelected={selectedCategory === category}
            >
              <LegendColorBox
                $color={CATEGORY_COLORS[category] || "#6b7280"}
              />
              <LegendLabel $isSelected={selectedCategory === category}>
                {category}
              </LegendLabel>
            </LegendItem>
          ))}
        </LegendContainer>
      )}
    />
  );
};

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LegendItem = styled.div<{
  $isClickable: boolean;
  $isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#f3f4f6" : "transparent"};

  &:hover {
    background-color: ${({ $isClickable }) =>
      $isClickable ? "#f9fafb" : "transparent"};
  }
`;

const LegendColorBox = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${({ $color }) => $color};
  border-radius: 2px;
`;

const LegendLabel = styled.span<{ $isSelected: boolean }>`
  font-size: 12px;
  color: #6b7280;
  text-transform: capitalize;
  font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "400")};
`;

export default ChartLegend; 