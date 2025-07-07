import React, { useState } from "react";
import PostList from "../components/posts/PostList";

function Posts() {
  // js 자리
  //   let postsArr = [];
  const [postsArr, setPostArr] = useState([]);

  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      console.log(result);
      //   postsArr = result;
      setPostArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getPosts();

  // 데이터를 컴포넌트로 출력하는 함수
  function makePostList() {
    let list = [];
    list = postsArr.map((요소, 인덱스) => {
      return <PostList key={인덱스}></PostList>;
    });
    return list;

    // return postsArr.map((요소, 인덱스) => {
    //   return <PostList key={인덱스}></PostList>;
    // });
  }

  function resetList() {
    setPostArr([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Posts 목록
        <button onClick={getPosts}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {postsArr.map((요소, 인덱스) => {
          return (
            <PostList
              id={요소.id}
              title={요소.title}
              body={요소.body}
              userid={요소.userId}
              key={인덱스}
            ></PostList>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
