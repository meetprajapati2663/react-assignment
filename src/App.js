import react from "react";
import FuncComp from "./Assignment/FuncComp";
import ClassCompo from "./Assignment/ClassCompo";
import Props from "./Assignment/Props";
import MainProps from "./Assignment/MainProps";
import Counter from "./Assignment/Counter";
import Text from "./Assignment/Text";
import Form from "./Assignment/Form";
import Ulogin from "./Assignment/Ulogin";
import Hooks from "./Assignment/Hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Assignment/Home";
import About from "./Assignment/About";

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      {/* <FuncComp />
      <ClassCompo />
      {/* <MainProps /> */}
      {/* <Counter />
      <Text />
      <Form />  */}
      {/* <Ulogin /> */}
      {/* <Hooks /> */}
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
