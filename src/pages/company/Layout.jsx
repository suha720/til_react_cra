import React, { useEffect } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button } from "../todo/Todo.style";

function Layout() {
  // js
  const navigate = useNavigate();
  const handleClickHome = () => {
    const path = "/";
    const 숨긴정보 = {
      memo: "숨결숨결 회사소개",
      good: "상품 머야 ",
      favirite: `이 사람 제품1 에 관심`,
    };
    navigate("/");
  };

  // 현재 path 알아내기
  const { pathname, search, state } = useLocation;
  console.log(pathname); // ;\companny/List
  console.log(search);
  console.log(state); // null

  useEffect(() => {
    const user = {
      name: "iu",
      age: 28,
      id: 100,
    };
    const queryStr = createSearchParams({ ...user }).toString();
    console.log(queryStr);
  }, []);

  // jsx
  return (
    <div>
      <div>로컬메뉴</div>
      <div>
        <div>
          <Button onClick={handleClickHome}>홈</Button>
          <Link to="/company">회사소개</Link>
          <br />
          <Link to="/company/list">제품소개</Link>
          <br />
          <Link to="/company/location">회사위치 소개</Link>
        </div>
        <h2>Outlet 자리</h2>
        <div style={{ background: "cyan", minHeight: 100 }}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Layout;
