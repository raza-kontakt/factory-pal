import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import Container from "../common/Container";

interface ErrorStateProps {
  title: string;
  description?: string;
  actionText?: string;
  onActionClick?: () => void;
  minHeight?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  description,
  actionText,
  onActionClick,
  minHeight = "50vh",
}) => {
  return (
    <Container noPadding>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ minHeight: minHeight }}
      >
        <Typography variant="h3" color="error" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" color="text.secondary" textAlign="center">
            {description}
          </Typography>
        )}
        {actionText && onActionClick && (
          <Button
            variant="contained"
            color="primary"
            onClick={onActionClick}
            size="large"
          >
            {actionText}
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default ErrorState;
