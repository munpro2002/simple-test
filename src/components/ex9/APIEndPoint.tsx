import React, { useState, useEffect } from "react";
import styles from "./APIEndPoint.module.scss";
import axios from "axios";

const APIEndPoint = () => {
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchRandomHandler = () => {
    setFetch((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, [fetch]);

  return (
    <div className={styles.container}>
      <button onClick={fetchRandomHandler} className={styles["fetch-btn"]}>
        Fetch Random
      </button>
      <div className={styles["user-list"]}>
        {!loading &&
          data.map((user, index) => {
            return (
              <div className={styles["user-cart"]} key={index}>
                <img src={user["avatar"]} alt="user info" />
                <h3>
                  {user["first_name"]} {user["last_name"]}
                </h3>
                <p>{user["employment"]["title"]}</p>
              </div>
            );
          })}
        {loading && <h1>Please wait a second...</h1>}
      </div>
    </div>
  );
};

export default APIEndPoint;
