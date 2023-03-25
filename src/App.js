import "./App.css";
import MainHeader from "./components/MainHeader";
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassBtnToNaver from "./components/ClassBtnToNaver";
import ClassImgComponent from "./components/ClassImgComponent";

function App() {
  return (
    <div className="App">
      <MainHeader />
      {/* <BtnToNaver />
      <ImgComponent /> */}
      <ClassComponent />
      <FunctionalComponent />
      <ClassBtnToNaver />
    </div>
  );
}
export default App;
