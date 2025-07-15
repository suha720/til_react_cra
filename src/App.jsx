import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/about/About";
import Mission from "./pages/about/Mission";
import Team from "./pages/about/Team";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import Design from "./pages/blog/Design";
import Detail from "./pages/blog/Detail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [lsLogin, setIsLogin] = useState(false);

  // 리액트 변수의 변화를 감지
  useEffect(() => {
    console.log(lsLogin);
  }, [lsLogin]);

  return (
    <Router>
      <Header
        company={"좋은 회사"}
        service={"Todo 서비스"}
        setIsLogin={setIsLogin}
      >
        <div>🚘 헤더의 자식입니다</div>
        <div>🚘 헤더의 자식은 둘 이상 입니다</div>
        <div></div>
      </Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Index firt={"첫 페이지 입니다"}></Index>}
          ></Route>
          {/* About 관련 */}
          <Route path="/about">
            <Route index element={<About />}></Route>
            <Route path="mission" element={<Mission />}></Route>
            <Route path="team" element={<Team />}></Route>
          </Route>
          <Route path="/service" element={<Service></Service>}></Route>
          {/* Blog 관련 */}
          <Route path="/blog">
            <Route index element={<Blog></Blog>}></Route>
            {/* 이중 중첩 Design 관련 */}
            <Route path="design">
              <Route path=":id" element={<Design />}></Route>
              {/* <Route index element={<Design />}></Route> */}
              {/* <Route path="1" element={<Design />}></Route> */}
              <Route path="detail" element={<Detail />}></Route>
            </Route>
          </Route>
          {/* 잘못된 경로 접근 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer>{lsLogin ? <p>로그인 중이넹</p> : <p>로그아웃이야</p>}</Footer>
    </Router>
  );
}

export default App;
