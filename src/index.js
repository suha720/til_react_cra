import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hide from "./pages/Hide";
import StartPage from "./pages/StartPage";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Header 컴포넌트
// const Header = () => {
//   return <header className="header">상단</header>;
// };
const Hello = function () {
  return <div>안녕</div>;
};
const Dello = function () {
  return <div>졸려</div>;
};

root.render(
  <>
    <Header></Header>
    <div>안녕하세요</div>
    <Hello></Hello>
    <Dello></Dello>
    <Hide></Hide>
    <StartPage></StartPage>
  </>,
);
