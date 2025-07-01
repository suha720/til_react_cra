import React from "react";
import "../css/Footer.css";
import BgObjRed, { BgObj } from "./bg";
function Header() {
  // js 코드 자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "으흐흐";
  }
  const isLogin = false;

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? BgObj : BgObjRed}>{title}</div>
      <div>
        버전 : {version} {say()}
      </div>
    </div>
  );
}

export default Header;
