import React from "react";
import styles from "./Logo.module.scss";
import logoImage  from '../../assets/images/logo.png';

const Logo = ({ image }) => {
  return (
    <div className={styles.logo}>
      <img src={image} alt="Logo" className={styles.logoImg} />
    </div>
  );
};

export default Logo;
