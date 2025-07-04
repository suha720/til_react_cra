import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import TestCat from "../components/TestCat";
import Avatar from "../components/ui/Avatar";

// css
// 모듈 방식으로 업그레이드
// import "../css/StartPage.css";
// import styles from "../css/StartPage.module.css";
// import "./StartPage.scss";
import styles from "./StartPage.module.scss";
import Tag from "../components/Tag";
import Toast from "../components/ui/Toast";
import Alert from "../components/ui/Alert";
import Chip from "../components/ui/Chip";
import Modal from "../components/ui/Modal";
import ProgressBar from "../components/ui/ProgressBar";
import Skeleton from "../components/ui/Skeleton";
import Tooltip from "../components/ui/Tooltip";

function StartPage() {
  // return <div className="wrap"></div>;
  return (
    <div className={styles.wrap}>
      <Header></Header>
      <div>안녕하세요</div>
      <Tag></Tag>
      <span>태그 확인용입니다</span>
      <span>태그 확인용입니다</span>
      <span>태그 확인용입니다</span>
      <Slide></Slide>
      <Footer></Footer>
      <TestCat></TestCat>
      <Tag></Tag>
      <div>
        <Avatar />
        <Avatar src="https://i.pravatar.cc/100" alt="" size="80px" shadow="" />
        <Avatar src="https://i.pravatar.cc/100" alt="" size="" />
        <Avatar src="https://i.pravatar.cc/100" alt="" size="" />
      </div>
      <div>
        <Toast></Toast>
        <Toast msg="토스트 태그입니다." bg="#6b5ee1"></Toast>
      </div>
      <div>
        <Alert></Alert>
        <Alert type="success">성공</Alert>
        <Alert type="error">에러</Alert>
        <Alert type="warning">경고</Alert>
        <Alert type="info">정보</Alert>
      </div>
      <div>
        <Chip></Chip>
        <Chip lavel="React"></Chip>
        <Chip lavel="Vue"></Chip>
        <Chip lavel="JavaScript"></Chip>
      </div>
      <div>
        {/* <Modal>
          <h3>모달타이들</h3>
          <p>모달내용</p>
        </Modal> */}
      </div>

      <div>
        <ProgressBar />
        <ProgressBar percent={30} color="#f00" />
        <ProgressBar percent={50} color="#0f0" />
        <ProgressBar percent={80} color="#00f" />
        <ProgressBar percent={100} color="#ff0" />
      </div>
      <div>
        <Skeleton width="80%" height="20px"></Skeleton>
        <Skeleton width="60%" height="18px"></Skeleton>
      </div>

      <div>
        <Tooltip text="클릭하세요">
          <button>회원가입을 위한 버튼입니다</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default StartPage;
