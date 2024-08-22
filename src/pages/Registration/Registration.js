import React from "react";
import styles from "./Registration.module.scss";
import assistantBot from "../../assets/images/assistantBot.png";
import RegistrationForm from "./RegistrationForm";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";

const Registration = () => {
  return (
    <div className={styles.container} data-testid="registration">
      {/* Section for displaying the assistant bot image with overlay */}
      <section id="registration">
        <ImageOverlay>
          <img
            src={assistantBot}
            alt="Assistant Bot"
            className={styles.assistantBot}
            loading="lazy" // Lazy loading for performance optimization
          />
        </ImageOverlay>
      </section>
      {/* Rendering the registration form */}
      <RegistrationForm />
    </div>
  );
};

export default Registration;
