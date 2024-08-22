import React from "react";
import styles from "./OurServices.module.scss";
import support from "../../assets/images/support.png";
import reviews from "../../assets/images/reviews.png";
import awards from "../../assets/images/awards.png";

const OurServices = () => {
  const servicesList = [
    {
      id: 1,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: support,
      imageStyle: { width: "64px", height: "64px" },
    },
    {
      id: 2,
      title: "1000+ of reviews",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: reviews,
      imageStyle: { width: "64px", height: "60.08px" },
    },
    {
      id: 3,
      title: "And more!",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: awards,
      imageStyle: { width: "64px", height: "64px" },
    },
  ];
  return (
    <div className={styles.servicesContainer}>
      {servicesList?.map((service) => (
        <div className={styles.service} key={service.id}>
          <img src={service?.image} style={service?.imageStyle}/>
          <div className={styles.serviceDetails}>
            <div className={styles.serviceTitle}>{service?.title}</div>
            <div className={styles.serviceDescription}>
              {service?.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;
