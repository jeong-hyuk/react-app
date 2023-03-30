import React from 'react';

export default function Example4Props({ item, price }) {
  return (
    <div>
      <h1>품목명 : {item}</h1>
      <br />
      <p>가격 : {price}</p>
    </div>
  );
}
