import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageOverlay.module.scss";
import OverlayImage from "../../assets/images/ImageOverlay.png";

// ImageOverlay Component
const ImageOverlay = ({ children }) => {
  return (
    <div className={styles.imageContainer} data-testid="image-overlay">
      {/* Render children elements */}
      {children}
      {/* Overlay image */}
      <img
        src={OverlayImage}
        alt="Overlay Image"
        className={styles.overlayImage}
      />
    </div>
  );
};

// Define prop types for ImageOverlay
ImageOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageOverlay;
