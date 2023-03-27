import React from "react";
import { useState } from "react";

export default function State() {
  // let teacher = "김정혁";

  // function inEnglish() {
  //   const spanEl = document.querySelector("#text");
  //   spanEl.innerHTML = "jeong-hyuk";
  // }

  const [teacher, setTeacher] = useState("김정혁");
  return (
    <div>
      <button
        onClick={() => {
          // inEnglish();
          setTeacher("jeong-hyuk");
        }}
      >
        영어로
      </button>
      <br />
      <span id="text">{teacher}</span>
    </div>
  );
}
