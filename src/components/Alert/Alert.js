import React from 'react';

const Alert = ({ name }) => {
  return (
    <div style={styles.alertContainer}>
      <h2 style={styles.title}>Registration</h2>
      <p style={styles.message}>Hi {name}, thanks for registering. Somebody will contact you soon.</p>
    </div>
  );
}
export default Alert;




