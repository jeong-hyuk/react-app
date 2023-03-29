import React, { useRef } from 'react';

export default function Example5() {
  const inputEl = useRef();
  const divEl = useRef();

  const adjustCSS = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={adjustCSS}>색 적용</button>
    </div>
  );
}
