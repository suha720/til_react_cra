import styled from "@emotion/styled";
import React from "react";

function AlbumsList({ userid, id, title }) {
  // js
  //   const AlbumsCard = styled.div``;
  //   const AlbumsTitle = styled.h2``;
  //   const AlbumsUser = styled.div``;

  const AlbumsCard = styled.div`
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
  const AlbumsTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const AlbumsUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  // jsx
  return (
    <AlbumsCard>
      <AlbumsTitle>
        {id} : {title}
      </AlbumsTitle>
      <AlbumsUser>User : {userid}</AlbumsUser>
    </AlbumsCard>
  );
}

export default AlbumsList;
