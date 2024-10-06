import React from "react";
import styled, { keyframes } from "styled-components";

// Define the prop types for Loader
interface LoaderProps {
  size?: number;
  color?: string;
}

// Define the prop types for Spinner
interface SpinnerProps {
  size?: number;
  color?: string;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px; /* Adjust as needed */
`;

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => {
    const size =
      typeof props.size === "number"
        ? props.size
        : parseInt(props.size || "40");
    return `${size}px`;
  }};
  height: ${(props) => {
    const size =
      typeof props.size === "number"
        ? props.size
        : parseInt(props.size || "40");
    return `${size}px`;
  }};
  border: ${(props) => {
    const size =
      typeof props.size === "number"
        ? props.size
        : parseInt(props.size || "40");
    return `${size / 12}px solid rgba(0, 0, 0, 0.1)`;
  }};
  border-left-color: ${(props) => props.color || "#0366d6"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = ({ size, color }: { size: number; color: string }) => (
  <LoaderWrapper>
    <Spinner size={size} color={color} />
  </LoaderWrapper>
);

export default Loader;
