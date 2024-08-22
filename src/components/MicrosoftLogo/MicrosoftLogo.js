import React from "react";
import styles from "./MicrosoftLogo.module.scss";

const MicrosoftLogo = () => {
  const Square = ({ className }) => {
    return <div className={`${styles.logoSquare} ${className}`}></div>;
  };
  return (
    <div className={styles.microsoftLogo}>
      <Square className={styles.topLeft} />
      <Square className={styles.topRight} />
      <Square className={styles.bottomLeft} />
      <Square className={styles.bottomRight} />
    </div>
  );
};

export default MicrosoftLogo;
