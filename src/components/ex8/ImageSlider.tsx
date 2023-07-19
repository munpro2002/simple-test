import React, { useState, useEffect, useCallback } from "react";
import styles from "./ImageSlider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const IMG_ARRAY = [
  "https://kenwheeler.github.io/slick/img/fonz3.png",
  "https://kenwheeler.github.io/slick/img/fonz2.png",
  "https://kenwheeler.github.io/slick/img/fonz1.png",
];

const ImageSlider = () => {
  const [currImg, setCurImg] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);

  const length = IMG_ARRAY.length;

  const nextSlideHandler = useCallback(() => {
    setCurImg(currImg === length - 1 ? 0 : currImg + 1);
  }, [currImg, length]);

  const prevSlideHandler = () => {
    setCurImg(currImg === 0 ? length - 1 : currImg - 1);
  };

  const pauseSlideHandler = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => nextSlideHandler(), 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, nextSlideHandler]);

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
      <div
        onClick={pauseSlideHandler}
        className={`${styles.slideCtrlBtn} ${styles.btn}`}
      >
        {!isPlaying && <FontAwesomeIcon icon={faPause} />}
        {isPlaying && <FontAwesomeIcon icon={faPlay} />}
      </div>
      {IMG_ARRAY.map((img, index) => {
        return (
          <img
            className={styles[`${currImg === index ? "active" : "disabled"}`]}
            key={index}
            src={img}
            alt={`slider ${index}`}
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
