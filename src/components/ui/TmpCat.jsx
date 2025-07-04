import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
function TmpCat({ child, variant, bc }) {
  // js 자리
  // emotion
  const mov = keyframes`
  0% {background-position: -400px 0}
  100% {background-position: 400px 0}
  `;

  const Cat = styled.div`
    width: 500px;
    height: 500px;
    margin: 20px auto;
    position: relative;
    overflow: hidden;
    &:hover .eyeL {
      transform: scaleY(1.2);
    }

    &:hover .eyeR {
      transform: scaleY(1.2);
    }
    /* background-color: ${props => {
      switch (props.variant) {
        case "primary":
          return "#6b5ee1";
        case "danger":
          return "#e46e80";
        case "success":
          return "#519511";
        case "info":
          return "#8c95a8";
        default:
          return "#6b5ee1";
      }
    }}; */

    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );

    animation: ${mov} 1.2s infinite linear;

    opacity: ${props => (props.look ? 1 : 0.8)};
    &:hover {
      opacity: 0.3;
    }
  `;
  const Tail = styled.div`
    position: absolute;
    width: 150px;
    height: 30px;
    background-color: rgb(255, 225, 58);
    border-radius: 50px;
    right: 0;
    bottom: 120px;
    transform: rotate(-40deg);
    transition: transform 0.3s;
  `;

  const CatBody = styled.div`
    position: absolute;
    width: 330px;
    height: 400px;
    bottom: -50px;
    left: 50%;
    border-radius: 50%;
    background-color: ${props => props.bc};
    transform: translateX(-50%);
  `;

  const Belly = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    bottom: 20px;
    left: 50%;
    border-radius: 50%;
    background-color: white;
    transform: translateX(-50%) scaleY(1.3);
  `;

  const FootLeft = styled.div`
    position: absolute;
    width: 100px;
    height: 50px;
    left: 130px;
    bottom: 0;
    border: rgb(255, 225, 58) solid 2px;
    border-radius: 50px 50px 0 0;
    background-color: white;
  `;

  const FootRight = styled.div`
    position: absolute;
    width: 100px;
    height: 50px;
    right: 130px;
    bottom: 0;
    border: rgb(255, 225, 58) solid 2px;
    border-radius: 50px 50px 0 0;
    background-color: white;
  `;

  const EarLeft1 = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: rgb(255, 225, 58);
    top: 40px;
    left: 130px;
    transform: rotate(30deg) skewX(30deg);
    transition: transform 0.3s;
  `;
  const EarLeft2 = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: rgb(255, 148, 166);
    top: 40px;
    left: 130px;
    transform: rotate(30deg) skewX(30deg) scale(0.7);
    transition: transform 0.3s;
  `;

  const EarRight1 = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: rgb(255, 225, 58);
    top: 40px;
    right: 130px;
    transform: rotate(-30deg) skewX(-30deg);
    transition: transform 0.3s;
  `;

  const EarRight2 = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: rgb(255, 148, 166);
    top: 40px;
    right: 130px;
    transform: rotate(-30deg) skewX(-30deg) scale(0.7);
    transition: transform 0.3s;
  `;

  const CatHead = styled.div`
    position: absolute;
    width: 270px;
    height: 200px;
    border-radius: 150px;
    top: 45px;
    left: 50%;
    background-color: rgb(255, 225, 58);
    transform: translateX(-50%);
  `;

  const EyeLeft = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    left: 37%;
    top: 100px;
    transform: scale(1.2, 0.3);
    transition: transform 0.3s;
  `;

  const EyeRight = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    right: 37%;
    top: 100px;
    transform: scale(1.2, 0.3);
    transition: transform 0.3s;
  `;

  const MouthLeft = styled.div`
    position: absolute;
    width: 5px;
    height: 20px;
    background-color: rgb(255, 148, 166);
    top: 140px;
    left: 235px;
    transform: skewX(-50deg);
  `;

  const MouthRight = styled.div`
    position: absolute;
    width: 5px;
    height: 20px;
    background-color: rgb(255, 148, 166);
    top: 140px;
    right: 235px;
    transform: skewX(50deg);
  `;

  const Nose = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-top: 20px solid rgb(255, 148, 166);
    border-bottom: 20px solid transparent;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    top: 122px;
    right: 50%;
    transform: translateX(50%);
  `;

  const WhiskerLeft1 = styled.div`
    position: absolute;
    width: 3px;
    height: 60px;
    top: 110px;
    left: 120px;
    background-color: black;
    transform: rotate(-70deg);
    transition: transform 0.3s;
  `;

  const WhiskerLeft2 = styled.div`
    position: absolute;
    width: 3px;
    height: 60px;
    top: 140px;
    left: 120px;
    background-color: black;
    transform: rotate(-110deg);
    transition: transform 0.3s;
  `;

  const WhiskerRight1 = styled.div`
    position: absolute;
    width: 3px;
    height: 60px;
    top: 110px;
    right: 120px;
    background-color: black;
    transform: rotate(70deg);
    transition: transform 0.3s;
  `;

  const WhiskerRight2 = styled.div`
    position: absolute;
    width: 3px;
    height: 60px;
    top: 140px;
    right: 120px;
    background-color: black;
    transform: rotate(110deg);
    transition: transform 0.3s;
  `;

  // jsx 문법 시작
  return (
    <Cat variant={variant}>
      <Tail></Tail>
      <CatBody bc={bc}></CatBody>
      <Belly></Belly>
      <FootLeft></FootLeft>
      <FootRight></FootRight>
      <EarLeft1></EarLeft1>
      <EarLeft2></EarLeft2>
      <EarRight1></EarRight1>
      <EarRight2></EarRight2>
      <CatHead></CatHead>
      <EyeLeft className="eyeL"></EyeLeft>
      <EyeRight className="eyeR"></EyeRight>
      <MouthLeft></MouthLeft>
      <MouthRight></MouthRight>
      <Nose></Nose>
      <WhiskerLeft1></WhiskerLeft1>
      <WhiskerLeft2></WhiskerLeft2>
      <WhiskerRight1></WhiskerRight1>
      <WhiskerRight2></WhiskerRight2>
    </Cat>
  );
}

export default TmpCat;
