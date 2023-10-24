import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import FoodProps from "./FoodProps";
import BookProps from "./BookProps";
import "./App.css";

function App() {
  return (
    <>
      {/* <ClassComponent name="코딩온"></ClassComponent>
      <ClassComponent /> */}
      {/* <FunctionComponent name="KDT8" age={12}>
        안녕
      </FunctionComponent>
      <FunctionComponent /> */}
      {/* <FoodProps food="카레"></FoodProps>
      <FoodProps /> */}
      <BookProps
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기개발서"
      ></BookProps>
    </>
  );
}

export default App;
