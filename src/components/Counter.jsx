import React from "react";
import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const increaseNumber = () => {
    setNum(num + 1);
  };
  const decreaseNumber = () => {
    setNum(num - 1);
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
    </>
  );
}
