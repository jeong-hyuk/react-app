import React from 'react';

function EventHandler() {
  function alertFunc() {
    alert('클릭 됨');
  }
  return (
    <div>
      <span
        onClick={() => {
          alertFunc();
        }}
      >
        클릭!
      </span>
      <br />
      <span onClick={alertFunc}>클릭?</span>
      <br />
      <span
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자 계산
      </span>
    </div>
  );
}

export default EventHandler;
