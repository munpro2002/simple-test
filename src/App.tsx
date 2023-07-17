import React, { Fragment } from "react";
import "./App.scss";
import HelloWorld from "./components/ex1/HelloWorld";
import Animals from "./components/ex2/Animals";
import ButtonClick from "./components/ex4/ButtonClick";
import Checkbox from "./components/ex3/Checkbox";

function App() {
  return (
    <Fragment>
      {/* <HelloWorld />; */}
      {/* <Animals /> */}
      <ButtonClick />
      {/* <Checkbox /> */}
    </Fragment>
  );
}

export default App;
