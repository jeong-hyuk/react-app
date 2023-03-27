import React, { useState } from "react";

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  let variable = 0;
  // 변수는 계속 재정의가 되기 때문에 계속 0만 찍는다
  function plusVariable() {
    variable += 1;
    console.log(`state: ${state}, variable: ${variable}`);
  }
  return (
    <div>
      <h1>
        {state}/{variable}
      </h1>
      <button
        onClick={() => {
          setState((cur) => cur + 1);
          plusVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
