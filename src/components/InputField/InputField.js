import React from "react";
import PropTypes from "prop-types";
import styles from "./InputField.module.scss";

// FormGroup Component
const FormGroup = ({
  label,
  id,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  error = "",
}) => {
  return (
    <div className={styles.formGroup}>
      {/* Label with optional asterisk for required fields */}
      <label htmlFor={id}>
        {label} {required && <span className={styles.requiredAsterisk}>*</span>}
      </label>
      {/* Input field with error handling */}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className={styles.inputField}
        value={value}
        onChange={onChange}
      />
      {/* Display error message if provided */}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

// Define prop types for FormGroup
FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormGroup;
