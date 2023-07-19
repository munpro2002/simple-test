import React, { useState } from "react";
import styles from "./Form.module.scss";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitButtonHandler = (e: any) => {
    e.preventDefault();

    alert(`Hello ${lastName} ${firstName}`);

    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={submitButtonHandler} className={styles.container}>
      <input
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value.trim());
        }}
        type="text"
        placeholder="First Name"
        required
      />
      <input
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value.trim());
        }}
        type="text"
        placeholder="Last Name"
        required
      />
      <button className={styles["submit-btn"]}>Greet Me</button>
    </form>
  );
};

export default RegisterForm;
