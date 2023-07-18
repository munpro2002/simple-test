import React, { useRef } from "react";
import styles from "./Form.module.scss";

const RegisterForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const submitButtonHandler = (e: any) => {
    e.preventDefault();

    let firstName = firstNameRef.current?.value;
    let lastName = lastNameRef.current?.value;

    alert(`Hello ${lastName} ${firstName}`);

    e.target.reset();
  };

  return (
    <form onSubmit={submitButtonHandler} className={styles.container}>
      <input ref={firstNameRef} type="text" placeholder="First Name" required />
      <input ref={lastNameRef} type="text" placeholder="Last Name" required />
      <button className={styles["submit-btn"]}>Greet Me</button>
    </form>
  );
};

export default RegisterForm;
