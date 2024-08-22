import React from "react";
import styles from "./Registration.module.scss";
import assistantBot from "../../assets/images/assistantBot.png";
import RegistrationForm from "./RegistrationForm";
import ImageOverly from "../../assets/images/ImageOverlay.png";
import ImageOverlay from "../../components/ImaageOverlay/ImageOverlay";

const Registration = () => {
  return (
    <div className={styles.container}>
      <section id="registration">
        <ImageOverlay>
          <img
            src={assistantBot}
            alt="assistantBot"
            className={styles.assistantBot}
          />
        </ImageOverlay>
      </section>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
