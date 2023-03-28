import React from "react";
import { useState } from "react";

export default function StateProblem() {
  const [state, setState] = useState({ teacher: "김정혁" });
  console.log(state);
  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          state.teacher = "jeong-hyuk";
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}
