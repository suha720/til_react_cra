import React, { useState } from "react";
import AlbumsList from "../components/albums/AlbumsList";

function Albums() {
  // js
  const [albumsData, setalbumsData] = useState([]);

  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      console.log(result);

      // set 함수 초기화하는중
      setalbumsData(result);
    } catch (error) {
      console.log(error);
    }
  }

  //   getAlbums();

  function resetList() {
    setalbumsData([]);
  }

  return (
    <div>
      <h2>
        Albums 목록
        <button onClick={getAlbums}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h2>
      <div>
        {albumsData.map((item, index) => {
          return (
            <AlbumsList
              userid={item.userId}
              id={item.id}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
