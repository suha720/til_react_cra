import styled from "@emotion/styled";
import React from "react";
const CommentsCard = styled.div`
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
const CommentsName = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;
const CommentsEmail = styled.div`
  font-size: 13px;
  text-align: left;
  color: #999;
  margin-bottom: 10px;
`;
const CommentsBody = styled.div`
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

function CommentsList({ postId, id, name, email, body }) {
  return (
    <CommentsCard>
      <CommentsName>
        {id} : {name} <br />
        postId : {postId}
      </CommentsName>
      <CommentsEmail>email : {email}</CommentsEmail>
      <CommentsBody>albumId : {body}</CommentsBody>
    </CommentsCard>
  );
}

export default CommentsList;
