import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hide from "./pages/Hide";
import StartPage from "./pages/StartPage";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import Test from "./pages/Test";

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
  <div className="wrap">
    <Test></Test>
  </div>,
);

// root.render(
//   <>
//     <StartPage></StartPage>
//    <Posts></Posts>
// <Albums></Albums>
// <Photos></Photos>
// <Todos></Todos>
// <Users></Users>
// <Comments></Comments>

//   </>,
// );
