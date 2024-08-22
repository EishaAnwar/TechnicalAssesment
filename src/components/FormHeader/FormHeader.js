import React from "react";
import styles from "./FormHeader.module.scss";

const FormHeader = ({ title, description }) => {
  return (
    <div className={styles.formHeader}>
      <h2 className={styles.formTitle}>{title}</h2>
      <p className={styles.formDescription}>{description}</p>
    </div>
  );
};

export default FormHeader;
