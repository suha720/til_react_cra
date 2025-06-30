import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
// css
// 모듈 방식으로 업그레이드
// import "../css/StartPage.css";
import styles from "../css/StartPage.module.css";

function StartPage() {
  return (
    <>
      <div className={styles.box}>로고</div>
      <div>StartPage</div>
      <div>StartPage</div>
      <div>StartPage</div>
      <Header></Header>
      <Slide></Slide>
      {/* 분류메뉴 */}
      {/* 공지 */}
      {/* 추천 */}
      {/* 새목록 */}
      {/* 앱설치 안내 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
