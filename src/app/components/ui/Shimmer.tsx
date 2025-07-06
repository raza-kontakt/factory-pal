import styled from "styled-components";

const Shimmer = styled.div<{ width?: string; height?: string }>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export default Shimmer;
