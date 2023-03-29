import React, { useRef, useState } from 'react';

export default function Example6() {
  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);

  const [again, setAgain] = useState(true);
  const answerInput = useRef();

  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  const checkAnswer = () => {
    let answer = 0;
    if (randomArithmetic === 0) {
      answer = firstRandomNumber + secondRandomNumber;
    } else if (randomArithmetic === 1) {
      answer = firstRandomNumber - secondRandomNumber;
    } else {
      answer = firstRandomNumber * secondRandomNumber;
    }
    if (answer === parseInt(answerInput.current.value)) {
      alert('정답');
      setAgain(!again);
    } else {
      alert('오답');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber}
        {arithmeticArr[randomArithmetic]}
        {secondRandomNumber}
      </h1>
      <input ref={answerInput} type="text" />
      <button onClick={checkAnswer}>제출</button>
    </div>
  );
}
