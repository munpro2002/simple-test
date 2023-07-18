import React from "react";
import styles from "./FunnyQuiz.module.scss";

const QUIZ_DATA = [
  {
    id: "1",
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit",
  },
  {
    id: "2",
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#",
  },
];

const FunnyQuiz = () => {
  return (
    <div className={styles.container}>
      {QUIZ_DATA.map((quiz) => {
        return (
          <div className={styles.card} key={+quiz.id}>
            <h1>{quiz.setup}</h1>
            <p>{quiz.punchline}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FunnyQuiz;
