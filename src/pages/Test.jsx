import React, { useEffect, useState } from "react";
// 전역 자리
function Test() {
  // js 자리
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ㅠㅠ useEffect는 한번이니?");

    return () => {
      console.log("안녕 회신종료");
    };
  });

  useEffect(() => {
    console.log(`${count} ㅎㅎ`);
  }, [count]);
  // jsx 자리
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>점수</button>
    </div>
  );
}

export default Test;
