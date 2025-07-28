import { useContext } from "react";
import { TodayContext } from "../../contexts/TodayContext";

function TodoItem({ aaa }) {
  const { todo, dispatch } = useContext(TodayContext);
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch({ type: "toggle:," })}
      >
        {aaa.text}
      </span>{" "}
      <button
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
      ></button>
    </div>
  );
}

export default TodoItem;
