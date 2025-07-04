import React from "react";
import { Typography, Button, Container } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { reloadPage } from "../../utils";

interface GlobalErrorFallbackProps {
  // error: Error;
  resetErrorBoundary: () => void;
}

const GlobalErrorFallback: React.FC<GlobalErrorFallbackProps> = ({
  // error,
  resetErrorBoundary,
}) => {
  const { t } = useTranslation();

  return (
    <ErrorContainer maxWidth="sm">
      <ErrorContent>
        <Typography variant="h3" color="error" gutterBottom>
          {t("error.title")}
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          {t("error.description")}
        </Typography>

        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={resetErrorBoundary}
            size="large"
          >
            {t("error.tryAgain")}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={reloadPage}
            size="large"
          >
            {t("error.reloadPage")}
          </Button>
        </ButtonContainer>

        <SupportText variant="caption" color="text.secondary">
          {t("error.supportMessage")}
        </SupportText>
      </ErrorContent>
    </ErrorContainer>
  );
};

const ErrorContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const SupportText = styled(Typography)`
  margin-top: 16px;
  font-style: italic;
`;

export default GlobalErrorFallback;
