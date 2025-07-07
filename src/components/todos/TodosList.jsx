import styled from "@emotion/styled";
import React from "react";
const TodosCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border: 6px solid #ffb703;
  margin: 20px;
  padding: 20px;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-10px);
  }
  cursor: pointer;
`;
const TodosTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;
const TodosUser = styled.div`
  font-size: 13px;
  text-align: right;
  color: #999;
`;

function TodosList({ userId, id, title, completed }) {
  return (
    <TodosCard>
      <TodosTitle>
        {id} : {title}
      </TodosTitle>
      <TodosUser>User : {userId}</TodosUser>
      <TodosUser>User : {String(completed)}</TodosUser>
    </TodosCard>
  );
}

export default TodosList;
