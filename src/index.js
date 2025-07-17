import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import StartPage from "./pages/StartPage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Test from "./pages/Test";
import RegisterPage from "./pages/RegisterPage";
import Sidebar from "./components/emotion/Sidebar";
import App from "./App";
import OpenAI from "openai";
import TodoAdd from "./pages/todo/TodoAdd";
import Todo from "./pages/todo/Todo";
import Index from "./pages/todo/Index";
import TestApi from "./pages/TestApi";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    {/* <RegisterPage></RegisterPage> */}
    {/* <Test></Test> */}
    <Index />
    {/* <App></App> */}
    {/* <Sidebar></Sidebar> */}
    {/* <TestApi></TestApi> */}
  </div>,
);
