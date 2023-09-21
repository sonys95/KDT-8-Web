import React, { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0);
  const onClickEvent = () => setNumber(number + 1);

  return (
    <div>
      <h1> {number} </h1>
      <button onClick={onClickEvent}>+1</button>
    </div>
  );
}

export default Counter;
