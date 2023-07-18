import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.scss";

const NavigationMenu = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/ex1">Exercise 1</Link>
      <Link to="/ex2">Exercise 2</Link>
      <Link to="/ex3">Exercise 3</Link>
      <Link to="/ex4">Exercise 4</Link>
      <Link to="/ex5">Exercise 5</Link>
      <Link to="/ex6">Exercise 6</Link>
      <Link to="/ex7">Exercise 7</Link>
      <Link to="/ex8">Exercise 8</Link>
      <Link to="/ex9">Exercise 9</Link>
    </div>
  );
};

export default NavigationMenu;
