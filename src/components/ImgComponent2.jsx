import React from 'react';
import pinguImg from '../components/images/pingu.jpeg';

export default function ImgComponent2() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/pingu.jpeg" alt="핑구" />
      <h1>SRC 폴더</h1>
      <img src={pinguImg} alt="핑구" />
    </>
  );
}
