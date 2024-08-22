import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import styles from "./Divider.module.scss"; // Import the CSS file

// Divider Component
const Divider = ({ className }) => {
  return (
    <div className={`${styles.divider} ${className}`} data-testid="divider" />
  );
};

// PropTypes for validation
Divider.propTypes = {
  className: PropTypes.string, // Optional className to allow custom styling
};

export default Divider;
