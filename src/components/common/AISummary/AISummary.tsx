import React, { useState } from "react";
import { Box, Button, CircularProgress, Alert } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useAISummary } from "../../../hooks/useAISummary";
import type { Shift } from "../../../types/Shift";
import { colors } from "../../../utils/consts/colors";
import AISummaryCard from "./AISummaryCard";

interface AISummaryProps {
  shift: Shift;
}

const AISummary: React.FC<AISummaryProps> = ({ shift }) => {
  const { t, i18n } = useTranslation();
  const [showSummary, setShowSummary] = useState(false);

  const {
    generateSummary,
    isLoading: isGeneratingSummary,
    error: summaryError,
    data: summaryData,
    isSuccess: isSummarySuccess,
    reset: resetSummary,
  } = useAISummary({
    onSuccess: () => setShowSummary(true),
  });

  const handleGenerateSummary = () => {
    if (!shift) return;
    resetSummary();
    generateSummary({ shift, language: i18n.language });
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
    resetSummary();
  };

  return (
    <SummaryContainer data-testid="ai-summary-container">
      <ButtonContainer>
        <StyledButton
          variant="contained"
          startIcon={
            isGeneratingSummary ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <AutoAwesome />
            )
          }
          onClick={handleGenerateSummary}
          disabled={isGeneratingSummary}
        >
          {isGeneratingSummary
            ? t("aiSummary.generating")
            : t("aiSummary.generateButton")}
        </StyledButton>
      </ButtonContainer>

      {summaryError && (
        <StyledAlert severity="error">{summaryError.message}</StyledAlert>
      )}

      <AISummaryCard
        summaryData={summaryData}
        isSummarySuccess={isSummarySuccess}
        showSummary={showSummary}
        handleCloseSummary={handleCloseSummary}
      />
    </SummaryContainer>
  );
};

const SummaryContainer = styled(Box)`
  margin-bottom: 24px;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  background-color: ${colors.primary} !important;
  text-transform: none !important;
  border-radius: 32px !important;
  padding: 8px 24px !important;

  &:hover {
    background-color: ${colors.secondary} !important;
  }

  &:disabled {
    background-color: #9ca3af !important;
  }
`;

const StyledAlert = styled(Alert)`
  margin-bottom: 24px !important;
`;

export default AISummary;
