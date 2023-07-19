import React, { useState, Fragment } from "react";
import styles from "./checkbox.module.scss";

const FRUITS = ["Apple", "Banana", "Tea", "Coffee"];

const Checkbox = () => {
  const [checkedFruits, setCheckedFruits] = useState<string[]>([]);

  const fruitCheckHandler = (e: any) => {
    if (e.target.checked) {
      setCheckedFruits((prev) => {
        let newCheckedFruits: string[] = [...prev, e.target.value];
        return newCheckedFruits;
      });
    } else {
      setCheckedFruits((prev) => {
        let newCheckedFruits: string[] = prev.filter(
          (fruit) => fruit !== e.target.value
        );
        return newCheckedFruits;
      });
    }
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <h1>Your CheckList</h1>
        <div>
          {FRUITS.map((fruit, index) => {
            return (
              <div key={index}>
                <input
                  value={fruit}
                  onChange={fruitCheckHandler}
                  type="checkbox"
                />
                <label>{fruit}</label>
              </div>
            );
          })}
        </div>
        <h3>Items checked are:</h3>
        {checkedFruits.length === 0 && <span>No fruit selected</span>}
        <div>
          {checkedFruits.map((fruit, index) => (
            <span key={index}>({fruit})</span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Checkbox;
