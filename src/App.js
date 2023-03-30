import './App.css';
import React from 'react';
import BtnToNaver from './components/BtnToNaver';

function App() {
  // const str = 'go naver';
  // const nameArr = ['뽀로로', '루피', '크롱'];
  // const pororoObj = {
  //   name: '뽀로로',
  //   age: '5',
  //   nickName: '뷰우우웅신',
  // };
  return (
    <div className="App">
      {/* <PropsHeader text="Hello, props" />
      <PropsHeader text="Hello, props11111" />
      <PropsHeader text="Hello, props22222" />
      <MultiProps text={str} href="https://naver.com" userID="jack" /> */}
      {/* <ClassProps name="뽀로로" age="5" nickName="병신" /> */}
      {/* <CustomList arr={nameArr} /> */}
      {/* <CustomObj obj={pororoObj} /> */}
      {/* <h1>안녕하세요</h1>
      <span>반갑습니다</span> */}
      <BtnToNaver />
    </div>
  );
}
export default App;
