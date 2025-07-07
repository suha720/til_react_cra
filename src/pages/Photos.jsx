import React, { useState } from "react";
import PhotosList from "../components/photos/PhotosList";

function Photos() {
  const [photosData, setphotosData] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      console.log(result);
      setphotosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getPhotos();

  function resetList() {
    setphotosData([]);
  }

  return (
    <div>
      <h2>
        Photos 목록
        <button onClick={getPhotos}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h2>
      <div>
        {photosData.map((item, index) => {
          return (
            <PhotosList
              albumId={item.albumId}
              id={item.id}
              title={item.title}
              url={item.url}
              thumbnailUrl={item.thumbnailUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
