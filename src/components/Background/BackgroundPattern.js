import React from "react";
import PropTypes from "prop-types";
import styles from "./Background.module.scss";

const BackgroundSplashPattern = ({
  parentTop = "1903px",
  topOffset = 0,
  parentLeft = "-78px",
  leftOffset = 0,
  opacityPercentage = 100,
  splashColor = "#b9ceea",
}) => {
  const parentTopPostion = parseFloat(parentTop);
  const parentLeftPostion = parseFloat(parentLeft);
  const childTop =
    parentTopPostion > 0
      ? `${parentTopPostion - topOffset}px`
      : `${parentTopPostion + topOffset}px`;
  const childLeft =
    parentTopPostion > 0
      ? `${parentLeftPostion + leftOffset}px`
      : `${parentLeftPostion + leftOffset}px`;
  const splashPatternStyle = {
    top: childTop,
    left: childLeft,
    opacity: opacityPercentage / 100 || 1,
    background: `radial-gradient(50% 50% at 50% 50%, ${splashColor} 0%, rgba(246, 251, 248, 0) 100%)`,
    position: "absolute",
  };

  return (
    <span style={splashPatternStyle} className={styles.splashPattern}/>
  );
};

BackgroundSplashPattern.propTypes = {
  parentTop: PropTypes.string.isRequired,
  topOffset: PropTypes.number.isRequired,
  parentLeft: PropTypes.string.isRequired,
  leftOffset: PropTypes.number.isRequired,
  opacityPercentage: PropTypes.number,
  splashColor: PropTypes.string.isRequired,
};

export default BackgroundSplashPattern;
