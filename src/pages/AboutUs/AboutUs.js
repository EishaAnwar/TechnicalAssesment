import React from "react";
import styles from "./AboutUs.module.scss";
import OurPartners from "../OurPartners/OurPartners";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import Investment from "../../assets/images/Investment.png";
import ImageOverlay from "../../components/ImageOverlay/ImageOverlay";

const AboutUs = () => {
  return (
    <>
      <div className={styles.container} id="aboutUs" data-testid="about-us">
        {/* Display the OurTeam component */}
        <OurTeam />

        {/* Section containing an image with overlay */}
        <section>
          <ImageOverlay>
            <img
              src={Investment}
              alt="investment" 
              className={styles.investment} 
              loading="lazy" // Enable lazy loading for the image
            />
          </ImageOverlay>
        </section>
      </div>

      {/* Display the OurServices component */}
      <OurServices />

      {/* Display the OurPartners component */}
      <OurPartners />
    </>
  );
};

export default AboutUs;
