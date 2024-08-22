import React from "react";
import styles from "./MicrosoftLogo.module.scss";

const MicrosoftLogo = () => {
  return (
    <div className={styles.microsoftLogo}>
      <div className={`${styles.logoSquare} ${styles.topLeft}`} role="presentation" />
      <div className={`${styles.logoSquare} ${styles.topRight}`} role="presentation" />
      <div className={`${styles.logoSquare} ${styles.bottomLeft}`} role="presentation" />
      <div className={`${styles.logoSquare} ${styles.bottomRight}`} role="presentation" />
    </div>
  );
};

export default MicrosoftLogo;
