import React from "react";
import { Link } from "react-router-dom";

function Header({ children, company, service, setIsLogin }) {
  return (
    <header>
      <div onClick={() => setIsLogin(true)}>로그인하기</div>
      <div onClick={() => setIsLogin(false)}>로그아웃하기</div>
      {children}
      <Link to="/">{company}</Link>
      <Link to="/about">✨ {service}소개</Link>
      <Link to="/about/mission">🚲 소개/미션</Link>
      <Link to="/about/team">🚩 소개/팀</Link>
      <Link to="/service">서비스</Link>
      <Link to="/blog">블로그</Link>
      <Link to="/blog/design/55">블로그 55번 글</Link>
      <Link to="/blog/design/detail?id=111&user=qvic">
        블로그 111번 글 상세
      </Link>
    </header>
  );
}

export default Header;
