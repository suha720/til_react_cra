import React from "react";

function Foods() {
  async function getFoods() {
    const res = await fetch("https://learn.codeit.kr/1000/foods");
    const result = await res.json();
    console.log(result);
  }

  getFoods();

  return <div>Foods</div>;
}

export default Foods;
