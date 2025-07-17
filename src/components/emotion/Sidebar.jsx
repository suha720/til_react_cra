import styled from "@emotion/styled";
import React from "react";

const Siv = styled.div`
  background-color: #f0f0f0;
  max-width: 456px;
  margin: 84px auto;
  padding: 15px;
  border-radius: 12px;
`;
const SHto = styled.h2`
  text-align: center;
`;

const SP = styled.p`
  text-align: center;
`;

function Sidebar() {
  return (
    <Siv>
      <SHto>
        안녕하세요
        <br />
        오늘 하루는 어떠셨나요?
      </SHto>
      <SP>오늘의 감정을 솔직하게 기록해 보세요</SP>
      <div>
        <img src="/hi.png" alt="" />
      </div>
      <label>날짜</label>
      <input type="date" />
      <br />
      <label>내용</label>
      <textarea name="" id=""></textarea>
      <br />
      <button>저장</button>
    </Siv>
  );
}

export default Sidebar;
