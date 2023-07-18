import React, { Fragment } from "react";
import "./App.scss";
import HelloWorld from "./components/ex1/HelloWorld";
import Animals from "./components/ex2/Animals";
import Checkbox from "./components/ex3/Checkbox";
import ButtonClick from "./components/ex4/ButtonClick";
import Form from "./components/ex5/Form";
import FunnyQuiz from "./components/ex6/FunnyQuiz";
import FilterSearch from "./components/ex7/FilterSearch";
import ImageSlider from "./components/ex8/ImageSlider";
import APIEndPoint from "./components/ex9/APIEndPoint";
import NavigationMenu from "./components/ex10/NavigationMenu";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <NavigationMenu />

      <Routes>
        <Route
          path="/"
          element={
            <h1 style={{ textAlign: "center", marginTop: "10%" }}>
              Please Checkout My Exercises...
            </h1>
          }
        />
        <Route path="/ex1" element={<HelloWorld />} />
        <Route path="/ex2" element={<Animals />} />
        <Route path="/ex3" element={<ButtonClick />} />
        <Route path="/ex4" element={<Checkbox />} />
        <Route path="/ex5" element={<Form />} />
        <Route path="/ex6" element={<FunnyQuiz />} />
        <Route path="/ex7" element={<FilterSearch />} />
        <Route path="/ex8" element={<ImageSlider />} />
        <Route path="/ex9" element={<APIEndPoint />} />
      </Routes>
    </Fragment>
  );
}

export default App;
