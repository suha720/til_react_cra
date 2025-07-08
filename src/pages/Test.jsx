import React from "react";

function Test() {
  const handleFocus = () => {
    console.log("포커스 되었네요");
  };
  const handleBlur = () => {
    console.log("포커스 해제 되었네요");
  };

  return (
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default Test;
