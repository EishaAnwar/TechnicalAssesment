import React from "react";
import styles from "./ImageOverlay.module.scss";
import OverlayImage from "../../assets/images/ImageOverlay.png";

const ImageOverlay = ({ children }) => {
  return (
    <div className={styles.imageContainer}>
      {children}
      <img
        src={OverlayImage}
        alt="overlayImage"
        className={styles.overlayImage}
      />
    </div>
  );
};

export default ImageOverlay;
