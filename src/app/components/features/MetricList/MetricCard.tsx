import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  color?: "success" | "error" | "warning" | "info";
  isNegative?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  color = "success",
  isNegative = false,
}) => {
  const getBorderColor = () => {
    switch (color) {
      case "success":
        return "#22c55e";
      case "error":
        return "#ef4444";
      case "warning":
        return "#f59e0b";
      case "info":
        return "#22c55e";
      default:
        return "#22c55e";
    }
  };

  const formatValue = () => {
    if (typeof value === "number") {
      return isNegative ? value.toString() : Math.abs(value).toString();
    }
    return value.toString();
  };

  return (
    <StyledCard $borderColor={getBorderColor()}>
      <StyledCardContent>
        <ValueTypography
          variant="h5"
        >
          {formatValue()}
          {unit && (
            <UnitSpan>
              {unit}
            </UnitSpan>
          )}
        </ValueTypography>
        <TitleTypography variant="body2">
          {title}
        </TitleTypography>
      </StyledCardContent>
    </StyledCard>
  );
};


const StyledCard = styled(Card)<{ $borderColor: string }>`
  border-radius: 12px !important;
  background-color: white !important;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s ease-in-out !important;
  border: 1px solid #e5e7eb !important;
  border-top: 4px solid ${props => props.$borderColor} !important;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
    transform: translateY(-2px);
  }
`;

const StyledCardContent = styled(CardContent)`
  text-align: center !important;
  padding: 24px !important;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ValueTypography = styled(Typography)`
  font-weight: 700 !important;
  font-size: 1.75rem !important;
  line-height: 1.1 !important;
  color: #1f2937 !important;
  margin-bottom: 8px !important;
  
  @media (max-width: 959px) {
    font-size: 1.5rem !important;
  }
  
  @media (max-width: 599px) {
    font-size: 1.75rem !important;
  }
`;

const UnitSpan = styled.span`
  font-size: 1.4rem !important;
  margin-left: 4px;
  font-weight: 400 !important;
  color: #6b7280 !important;
  
  @media (max-width: 959px) {
    font-size: 1.2rem !important;
  }
  
  @media (max-width: 599px) {
    font-size: 1rem !important;
  }
`;

const TitleTypography = styled(Typography)`
  color: #9ca3af !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  margin-top: 8px !important;
  
  @media (max-width: 599px) {
    font-size: 0.9rem !important;
  }
`;


export default MetricCard; 