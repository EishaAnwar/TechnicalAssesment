import React from "react";
import styles from "./Background.module.scss";
import BackgroundLayer from "./BackgroundLayer";

// BackgroundContainer Component
const BackgroundContainer = () => {
  return (
    <span className={styles.backgroundContainer} data-testid="background-container">
      {/* First background layer with specified position and opacity */}
      <BackgroundLayer
        topPosition="1903px"
        leftPosition="-78px"
        opacityPercentage={50}
      />
      
      {/* Second background layer with default opacity */}
      <BackgroundLayer
        topPosition="-81px"
        leftPosition="-256px"
      />
    </span>
  );
};

export default BackgroundContainer;
