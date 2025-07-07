import React, { useState } from "react";
import CommentsList from "../components/comments/CommentsList";

function Comments() {
  const [commentsData, setcommentsData] = useState([]);

  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      console.log(result);
      setcommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getComments();
  function resetList() {
    setcommentsData([]);
  }

  return (
    <div>
      <h2>
        Comments 목록
        <button onClick={getComments}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h2>
      <div>
        {commentsData.map((item, index) => {
          return (
            <CommentsList
              postId={item.postId}
              id={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
