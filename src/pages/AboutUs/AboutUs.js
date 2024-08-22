import React from "react";
import styles from "./AboutUs.module.scss";
import OurPartners from "../OurPartners/OurPartners";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import Investment from "../../assets/images/Investment.png";
import ImageOverlay from "../../components/ImaageOverlay/ImageOverlay";

const AboutUs = () => {
  return (
    <>
      <div className={styles.container} id="aboutUs">
        <OurTeam />
        <section>
          <ImageOverlay>
            <img
              src={Investment}
              alt="investment"
              className={styles.investment}
            />
          </ImageOverlay>
        </section>
      </div>
      <OurServices />
      <OurPartners />
    </>
  );
};

export default AboutUs;
