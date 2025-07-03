import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
// css
// 모듈 방식으로 업그레이드
// import "../css/StartPage.css";
// import styles from "../css/StartPage.module.css";
// import "./StartPage.scss";
import styles from "./StartPage.module.scss";

function StartPage() {
  // return <div className="wrap"></div>;
  return (
    <div className={styles.wrap}>
      <Header></Header>
      <div>안녕하세요</div>
      <Slide></Slide>
    </div>
  );
}

export default StartPage;
