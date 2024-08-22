import React from "react";
import PropTypes from 'prop-types';
import styles from "./FormHeader.module.scss";

// FormHeader Component
const FormHeader = ({ title, description }) => {
  return (
    <div className={styles.formHeader}>
      <h2 className={styles.formTitle}>{title}</h2>
      <p className={styles.formDescription}>{description}</p>
    </div>
  );
};

// PropTypes for validation
FormHeader.propTypes = {
  title: PropTypes.string.isRequired, // Title is a required string
  description: PropTypes.string,      // Description is an optional string
};

export default FormHeader;
