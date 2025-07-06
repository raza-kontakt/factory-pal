import React from "react";
import styled from "styled-components";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      id: string;
      label: string;
      value: number;
      type: string;
      description: string;
      category: string;
    };
  }>;
}

const ChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <TooltipContainer>
        <TooltipTitle>{data.label}</TooltipTitle>
        <TooltipText>
          <strong>Value:</strong> {data.value}
        </TooltipText>
        <TooltipText>
          <strong>Category:</strong> {data.category}
        </TooltipText>
        <TooltipDescription>{data.description}</TooltipDescription>
      </TooltipContainer>
    );
  }

  return null;
};

const TooltipContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 250px;
`;

const TooltipTitle = styled.div`
  margin: 0 0 8px 0;
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
`;

const TooltipText = styled.div`
  margin: 0 0 4px 0;
  color: #6b7280;
  font-size: 1rem;
`;

const TooltipDescription = styled.div`
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
`;

export default ChartTooltip;
