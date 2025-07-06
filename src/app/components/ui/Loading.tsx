import React from "react";
import { Box, Skeleton } from "@mui/material";
import styled, { keyframes } from "styled-components";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  message?: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  animation: ${fadeIn} 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

const SkeletonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 600px;
`;

const Loading: React.FC<LoadingProps> = ({ size = "medium" }) => {
  const getSkeletonHeight = () => {
    switch (size) {
      case "small":
        return 40;
      case "medium":
        return 60;
      case "large":
        return 80;
      default:
        return 60;
    }
  };

  const getSkeletonCount = () => {
    switch (size) {
      case "small":
        return 3;
      case "medium":
        return 4;
      case "large":
        return 5;
      default:
        return 4;
    }
  };

  const getSkeletonWidthVariant = (index: number) => {
    const variants = ["100%", "85%", "95%", "90%", "80%"];
    return variants[index % variants.length];
  };

  return (
    <LoadingContainer>
      <SkeletonContainer>
        {Array.from({ length: getSkeletonCount() }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={getSkeletonWidthVariant(index)}
            height={getSkeletonHeight()}
            sx={{
              borderRadius: 2,
              bgcolor: "#e5e7eb",
              animation: "wave 1.2s ease-in-out infinite",
              "&::after": {
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              },
            }}
          />
        ))}
      </SkeletonContainer>
    </LoadingContainer>
  );
};

export default Loading;
