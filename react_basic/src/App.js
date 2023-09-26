import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";
// import Router from "./Router";

function App() {
  return (
    <>
      {/*  ver1
      <Router></Router> 
      */}
      {/* ver2 */}
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
