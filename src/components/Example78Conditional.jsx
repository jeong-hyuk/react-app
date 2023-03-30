import React, { useState } from 'react';
import Example7 from './Example7';
import Example8 from './Example8';

export default function Example78Conditional() {
  const [condition, setCondition] = useState('1번');
  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };
  return (
    <>
      {condition === '1번' ? (
        <Example7 text={condition} />
      ) : (
        <Example8 text={condition} />
      )}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
