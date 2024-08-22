import React from "react";
import styles from "./MainComponent.module.scss";
import HeaderFooter from "../../components/HeaderFooter/HeaderFooter";
import Registration from "../Registration/Registration";
import AboutUs from "../AboutUs/AboutUs";

const MainComponent = () => {
  return (
    <div className={styles.mainComponentContainer} data-testid="main-component">
      {/* Header section */}
      <HeaderFooter type="header" />

      {/* About Us section */}
      <AboutUs />

      {/* Registration form */}
      <Registration />

      {/* Footer section */}
      <HeaderFooter type="footer" />
    </div>
  );
};

export default MainComponent;
