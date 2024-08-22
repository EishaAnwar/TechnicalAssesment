import React from "react";
import PropTypes from "prop-types";
import styles from "./Background.module.scss";

const BackgroundSplashPattern = ({
  parentTop = "1903px", //The top position of the parent element.
  topOffset = 0, //The offset from the top position.
  parentLeft = "-78px", //The left position of the parent element.
  leftOffset = 0, //The offset from the left position.
  opacityPercentage = 100, //The opacity of the splash pattern.
  splashColor = "#b9ceea", //The color of the splash pattern.
}) => {
  // Calculate the actual top and left positions based on offsets and parent positions
  const parentTopPosition = parseFloat(parentTop);
  const parentLeftPosition = parseFloat(parentLeft);
  const childTop =
    parentTopPosition > 0
      ? `${parentTopPosition - topOffset}px`
      : `${parentTopPosition + topOffset}px`;
  const childLeft =
    parentLeftPosition > 0
      ? `${parentLeftPosition + leftOffset}px`
      : `${parentLeftPosition + leftOffset}px`;

  // Define the splash pattern style
  const splashPatternStyle = {
    top: childTop,
    left: childLeft,
    opacity: opacityPercentage / 100 || 1,
    background: `radial-gradient(50% 50% at 50% 50%, ${splashColor} 0%, rgba(246, 251, 248, 0) 100%)`,
    position: "absolute",
  };

  return <span style={splashPatternStyle} className={styles.splashPattern} data-testid="background-splash-pattern"/>;
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
