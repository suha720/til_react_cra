import React, { useState } from "react";
import TodosList from "../components/todos/TodosList";

function Todos() {
  const [todosData, settodosData] = useState([]);
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      console.log(result);
      settodosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getTodos();
  function resetList() {
    settodosData([]);
  }

  return (
    <div>
      <h2>
        Todos 목록
        <button onClick={getTodos}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h2>
      <div>
        {todosData.map((item, index) => {
          return (
            <TodosList
              userId={item.userId}
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
