import React from "react";
import styles from "./Logo.module.scss";
import logoImage from '../../assets/images/logo.png'; // Default image if none provided

const Logo = ({ image = logoImage }) => {
  return (
    <div className={styles.logo}>
      <img src={image} alt="Logo" className={styles.logoImg} />
    </div>
  );
};

export default Logo;
