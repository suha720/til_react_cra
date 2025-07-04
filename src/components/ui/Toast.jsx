import styled from "@emotion/styled";
import React from "react";

function Toast({ msg, bg = "#ccc" }) {
  // js
  const StyledToast = styled.div`
    background-color: ${props => props.bg};
    z-index: 1;
    position: fixed;
    bottom: 20px;
    right: 30px;
    padding: 12px 20px;
    border-radius: 18px;
    box-shadow: 0px 2px 6px 0.3px;
    color: #fff;
    &:hover {
      opacity: 0.5;
      transition: 1s;
    }
  `;
  //jsx
  return <StyledToast bg={bg}>{msg}</StyledToast>;
}

export default Toast;
