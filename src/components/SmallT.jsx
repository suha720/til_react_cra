import React from "react";
import styled from "@emotion/styled";
function SmallT({ children, itemC = "#332200", size = "16px" }) {
  const StyleTag = styled.div`
    display: inline;
    color: ${itemC};
    font-size: ${size};
  `;
  return <StyleTag itemC={itemC}>@{children}</StyleTag>;
}

export default SmallT;
