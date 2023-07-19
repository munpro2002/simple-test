import React, { useState } from "react";
import styles from "./FilterSearch.module.scss";

const FRUITS = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
];

const FilterSearch = () => {
  const [fruits, setFruits] = useState(FRUITS);

  const filterSearchHandler = (e: any) => {
    const filterFruits = FRUITS.filter((fruit) => {
      return fruit.toLowerCase().includes(e.target.value.toLowerCase().trim());
    });

    setFruits(filterFruits);
  };

  return (
    <div className={styles.container}>
      <div className={styles["input-field"]}>
        <label>Search: </label>
        <input
          onChange={filterSearchHandler}
          type="text"
          placeholder="Search for fruits..."
        />
      </div>
      <ul className={styles["fruits-list"]}>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilterSearch;
