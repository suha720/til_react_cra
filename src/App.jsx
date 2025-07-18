import React, { useRef } from "react";

function App() {
  // html 참조가 아니라서 `null`이 아닌 숫자 `0`을 씀
  // Ref 는 리랜더링 안한대
  const countRef = useRef(0);
  const incre = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  return (
    <div>
      <h1>값 보관 및 저장 {countRef.current}</h1>
      <button onClick={incre}>증가</button>
    </div>
  );
}

export default App;
