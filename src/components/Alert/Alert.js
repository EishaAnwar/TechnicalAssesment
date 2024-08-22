import React from "react";
import PropTypes from "prop-types";
import styles from "./Alert.module.scss";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const CustomAlert = ({ title, message, type = "success", onDismiss }) => {
  return (
    <div className={styles.overlay} onClick={onDismiss}>
      <div
        className={styles.alertBox}
        data-testid="alert-box"
      >
        <div className={styles.close}>
          <ClearOutlinedIcon
            onClick={onDismiss}
            aria-label="close"
            data-testid="close"
            className={styles.closeIcon}
            color="lightslategray"
          />
        </div>
        <div className={`${styles.title} ${styles[type]}`}>{title}</div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};
CustomAlert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["success", "error", "info", "warning"]),
};

export default CustomAlert;
