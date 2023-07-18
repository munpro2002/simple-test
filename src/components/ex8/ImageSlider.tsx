import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const IMG_ARRAY = [
  "https://kenwheeler.github.io/slick/img/fonz3.png",
  "https://kenwheeler.github.io/slick/img/fonz2.png",
  "https://kenwheeler.github.io/slick/img/fonz1.png",
];

const ImageSlider = () => {
  const [currImg, setCurImg] = useState(2);
  const length = IMG_ARRAY.length;

  const nextSlideHandler = () => {
    setCurImg(currImg === length - 1 ? 0 : currImg + 1);
  };

  const prevSlideHandler = () => {
    setCurImg(currImg === 0 ? length - 1 : currImg - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImg(currImg === length - 1 ? 0 : currImg + 1);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className={styles.container}>
      <div
        onClick={prevSlideHandler}
        className={`${styles.leftBtn} ${styles.btn}`}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div
        onClick={nextSlideHandler}
        className={`${styles.rightBtn} ${styles.btn}`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      {IMG_ARRAY.map((img, index) => {
        return (
          <img
            className={styles[`${currImg === index ? "active" : "disabled"}`]}
            key={index}
            src={img}
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
