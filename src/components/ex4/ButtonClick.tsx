import React, { useState } from "react";
import styles from "./ButtonClick.module.scss";

const ButtonClick = () => {
  const [count, setCount] = useState(0);

  const increaseCountHandler = () => {
    setCount((prev) => prev + 1);
  };

  const resetCountHandler = () => {
    setCount(0);
  };

  return (
    <div className={styles.container}>
      <div>Button has been click: {count} times</div>
      <button className={styles.increaseBtn} onClick={increaseCountHandler}>
        Click Me
      </button>
      <button onClick={resetCountHandler}>Reset Count</button>
    </div>
  );
};

export default ButtonClick;
