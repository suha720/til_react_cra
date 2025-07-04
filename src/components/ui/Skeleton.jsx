import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

function Skeleton({ width = "100%", height = "20px" }) {
  // keyframes css 애니메이션
  const mov = keyframes`
  0% {background-position: -400px 0}
  100% {background-position: 400px 0}
  `;

  const SkeletonBox = styled.div`
    margin-bottom: 16px;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      rgba(42, 123, 155, 1) 45%,
      rgba(87, 199, 133, 1) 69%,
      rgba(130, 205, 119, 1) 84%,
      rgba(237, 221, 83, 1) 100%
    );
    background-size: 800px 100%;

    animation: ${mov} 1.2s infinite linear;
  `;

  return <SkeletonBox width={width} height={height} />;
}

export default Skeleton;
