import React from 'react';
import { useState } from 'react';

export default function Example3() {
  const [countState, setCountState] = useState(0);

  return (
    <div>
      <span
        onClick={() => {
          setCountState((cur) => cur + 1);
        }}
      >
        {countState >= 10 ? '😃' : '👍'}
      </span>
      <br />
      <span>{countState}</span>
    </div>
  );
}
