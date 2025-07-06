import React from "react";
import { Container as MUIContainer } from "@mui/material";
import type { ContainerProps } from "@mui/material";

interface AppContainerProps extends ContainerProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

const Container: React.FC<AppContainerProps> = ({
  children,
  maxWidth = "xl",
  noPadding = false,
  sx,
  ...rest
}) => {
  const defaultSx = noPadding ? {} : { py: 4 };
  const combinedSx = { ...defaultSx, ...sx };

  return (
    <MUIContainer maxWidth={maxWidth} sx={combinedSx} {...rest}>
      {children}
    </MUIContainer>
  );
};

export default Container; 