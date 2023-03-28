import logo from "./logo.svg";
import "./App.css";

import Example3 from "./components/Example3";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";
import StateProblem from "./components/StateProblem";
import List from "./components/List";
import PropsHeader from "./components/PropsHeader";
import MultiProps from "./components/MultiProps";
import ClassProps from "./components/ClassProps";
import Example4 from "./components/Example4";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ChangeObjProps from "./components/ChangeObjProps";
import ChangeObj from "./components/ChangeObj";

function App() {
  const str = "go naver";
  const nameArr = ["뽀로로", "루피", "크롱"];
  const pororoObj = {
    name: "뽀로로",
    age: "5",
    nickName: "뷰우우웅신",
  };
  return (
    <div className="App">
      {/* <PropsHeader text="Hello, props" />
      <PropsHeader text="Hello, props11111" />
      <PropsHeader text="Hello, props22222" />
      <MultiProps text={str} href="https://naver.com" userID="jack" /> */}
      {/* <ClassProps name="뽀로로" age="5" nickName="병신" /> */}
      {/* <CustomList arr={nameArr} />
      <CustomObj obj={pororoObj} /> */}

      <ChangeObj />
    </div>
  );
}
export default App;
