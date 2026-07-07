import React, { useState } from "react";

const Counter = () => {
  let [Count, setCount] = useState(0);
  console.log("rerendring");

  return (
    <div>
      <h1>Counter {Count}</h1>
      <button
        onClick={() => {
          setCount((prev) => {
            prev + 1;
          });
          setCount((prev) => {
            prev + 1;
          });
          setCount((prev) => {
            prev + 1;
          });
        }}
      >
        increate
      </button>
    </div>
  );
};

export default Counter;
