import React from "react";
import styles from "./MainComponent.module.scss";
import HeaderFooter from "../../components/HeaderFooter/HeaderFooter";
import Registration from "../Registration/Registration";
import AboutUs from "../AboutUs/AboutUs";
import BackgroundContainer from "../../components/Background/BackgroundContainer.js";

const MainComponent = () => {
  return (
    <div className={styles.mainComponentContainer}>
      <HeaderFooter type="header" />
      <AboutUs />
      <Registration />
      <HeaderFooter type="footer" />
    </div>
  );
};

export default MainComponent;
