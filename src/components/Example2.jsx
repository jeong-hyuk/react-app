import React from "react";
import { useState } from "react";
export default function Example2() {
  let count = 1;
  let [countState, setCountState] = useState(count);

  return (
    <div>
      <span>{countState}</span>
      <br />
      <button
        onClick={() => {
          setCountState(--countState);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCountState(++countState);
        }}
      >
        +
      </button>
    </div>
  );
}
