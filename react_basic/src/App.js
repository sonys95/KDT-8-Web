import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";
import Form from "./13Form/Form";
// import Router from "./Router";

function App() {
  return (
    <>
      {/*  ver1
      <Router></Router> 
      */}
      {/* ver2 */}
      {/* <Header></Header>
      <Outlet></Outlet> */}
      <Form></Form>
    </>
  );
}

export default App;
