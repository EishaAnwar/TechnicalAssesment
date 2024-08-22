import React from "react";
import styles from "./InputField.module.scss";

const FormGroup = ({
  label,
  id,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor={id}>
          {label}{" "}
          {required && <span className={styles.requiredAsterisk}>*</span>}
        </label>
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
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </>
  );
};
export default FormGroup;
