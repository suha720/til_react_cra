import styled from "@emotion/styled";
import React from "react";

const Siv = styled.div`
  background-color: #f0f0f0;
  max-width: 760px;
  margin: 30px auto;
  padding: 15px;
  border-radius: 12px;
`;

function Sidebar() {
  return (
    <Siv>
      <h2>감정 일기 ✍️</h2>
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
