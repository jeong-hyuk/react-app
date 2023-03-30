import React, { useState } from 'react';
import Timer from './Timer';

export default function TimerRender() {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState('보이기');

  const change = () => {
    if (btn === '보이기') {
      setBtn('숨기기');
    } else {
      setBtn('보이기');
    }
    setShow((cur) => !cur);
  };

  return (
    <>
      {show && <Timer />}
      <button onClick={change}>{btn}</button>
    </>
  );
}
