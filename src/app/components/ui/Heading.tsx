import React from "react";
import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface HeadingProps extends Omit<TypographyProps, "variant"> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}
const Heading: React.FC<HeadingProps> = ({
  variant = "h4",
  children,
  ...props
}) => {
  return (
    <StyledHeading variant={variant} {...props}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(2),
  fontWeight: 600,
  color: theme.palette.text.primary,

  "&.MuiTypography-h1": {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3),
  },

  "&.MuiTypography-h2": {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2.5),
  },

  "&.MuiTypography-h3": {
    marginBottom: theme.spacing(2.5),
    marginTop: theme.spacing(2),
  },

  "&.MuiTypography-h4": {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1.5),
  },

  "&.MuiTypography-h5": {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(1),
  },

  "&.MuiTypography-h6": {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },
}));

export default Heading;
