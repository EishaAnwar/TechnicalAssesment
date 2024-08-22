import React from "react";
import PropTypes from "prop-types";
import BackgroundSplashPattern from "./BackgroundPattern";
import styles from "./Background.module.scss";

const BackgroundLayer = ({
  topPosition = "1903px",
  leftPosition = "-78px",
  opacityPercentage = 100,
}) => {
  return (
    <span >
      <BackgroundSplashPattern
        splashColor="#B9CEEA"
        topOffset={409}
        leftOffset={925}
        parentTop={topPosition}
        parentLeft={leftPosition}
        opacityPercentage={opacityPercentage}
      />
      <BackgroundSplashPattern
        splashColor="#FFDF7C"
        topOffset={526}
        leftOffset={0}
        parentTop={topPosition}
        parentLeft={leftPosition}
        opacityPercentage={opacityPercentage}
      />
      <BackgroundSplashPattern
        splashColor="#FFDF7C"
        topOffset={148}
        leftOffset={784}
        parentTop={topPosition}
        parentLeft={leftPosition}
        opacityPercentage={opacityPercentage}
      />
      <BackgroundSplashPattern
        splashColor="#FAB7B8"
        topOffset={276}
        leftOffset={677}
        parentTop={topPosition}
        parentLeft={leftPosition}
        opacityPercentage={opacityPercentage}
      />
      <BackgroundSplashPattern
        splashColor="#B9CEEA"
        opacityPercentage={70}
        topOffset={0}
        leftOffset={420}
        parentTop={topPosition}
        parentLeft={leftPosition}
      />
    </span>
  );
};

BackgroundLayer.propTypes = {
  topPosition: PropTypes.string.isRequired,
  leftPosition: PropTypes.string.isRequired,
  opacityPercentage: PropTypes.number,
};

export default BackgroundLayer;
