import React from "react";
import styles from "./Animals.module.scss";

import dog from "./dog.png";
import cat from "./cat.png";
import chicken from "./chicken.png";
import cow from "./cow.png";
import sheep from "./sheep.png";
import horse from "./horse.png";

const ANIMALS_DATA = [
  { name: "dog", img: dog },
  { name: "cat", img: cat },
  { name: "chicken", img: chicken },
  { name: "cow", img: cow },
  { name: "sheep", img: sheep },
  { name: "horse", img: horse },
];

const Animals = () => {
  return (
    <div className={styles.container}>
      {ANIMALS_DATA.map((animal) => {
        return (
          <div className={styles["animals-block"]}>
            <div>
              <img src={animal.img} alt={animal.name} />
              <p>{animal.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Animals;
