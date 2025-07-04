import styled from "@emotion/styled";
import React from "react";

function Alert({ children, type }) {
  // js
  const StyledAlert = styled.div`
    background-color: ${props => {
      switch (props.type) {
        case "success":
          return "#5195ee";
        case "error":
          return "#e46e80";
        case "warning":
          return "#e5e5e5";
        default:
          return "#fff";
      }
    }};

    color: ${props => {
      switch (props.type) {
        case "success":
          return "#e46e80";
        case "error":
          return "#e5e5e5";
        case "warning":
          return "#e46e80";
        default:
          return "#5195ee";
      }
    }};
    padding: 12px 16px;
    border-radius: 4px;
    margin-right: 10px 0;
    border: 1px solid transparent;
  `;
  //jsx

  return <StyledAlert type={type}>{children}</StyledAlert>;
}

export default Alert;
