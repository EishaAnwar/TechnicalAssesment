import React, { useState } from "react";
import StyledUnderlinedText from "../../components/StyledUnderlinedText/StyledUnderlinedText";
import styles from "./OurPartners.module.scss";
import CocaCola from "../../assets/images/CocaCola.png";
import Twitter from "../../assets/images/Twitter.png";
import Microsoft from "../../assets/images/Microsoft.png";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import instagramLogo from "../../assets/images/instagramLogo.jpeg";

// List of partner logos with their properties
const PARTNERS_LIST = [
  {
    id: "1",
    name: "Microsoft",
    logoSrc: Microsoft,
    width: "262.49px",
    height: "56.07px",
  },
  {
    id: "2",
    name: "Twitter",
    logoSrc: Twitter,
    width: "88px",
    height: "72px",
  },
  {
    id: "3",
    name: "CocaCola",
    logoSrc: CocaCola,
    width: "300.44px",
    height: "98.38px",
  },
  {
    id: "4",
    name: "Instagram",
    logoSrc: instagramLogo,
    width: "150px", // Default width for the Instagram logo
    height: "150px", // Default height for the Instagram logo
  },
];

const OurPartners = () => {
  // State to track the starting index for visible partners
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3; // Number of partners to show at a time

  // Determine the visible partners based on the startIndex
  const visiblePartners = PARTNERS_LIST.slice(
    startIndex,
    startIndex + itemsToShow
  );

  // Handle the 'next' button click to show the next set of partners
  const next = () => {
    if (startIndex + itemsToShow < PARTNERS_LIST.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Handle the 'prev' button click to show the previous set of partners
  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className={styles.container} data-testid="our-partners">
      <div className={styles.header}>
        <StyledUnderlinedText
          text="Trusted by"
          textStyle={styles.headerText}
          underlineColor="rgba(240, 184, 13, 1)"
        />
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      <div className={styles.partnersList}>
        <KeyboardArrowLeftOutlinedIcon
          onClick={prev}
          className={startIndex === 0 ? styles.disabledArrow : styles.arrow}
          aria-label="Previous"
        />
        <div className={styles.partnersLogo}>
          {visiblePartners.map((partner) => (
            <img
              src={partner?.logoSrc}
              alt={partner?.name}
              width={partner?.width}
              height={partner?.height}
              key={partner?.id}
              loading="lazy"
            />
          ))}
        </div>
        <KeyboardArrowRightOutlinedIcon
          onClick={next}
          className={
            startIndex + itemsToShow >= PARTNERS_LIST.length
              ? styles.disabledArrow
              : styles.arrow
          }
          aria-label="Next"
        />
      </div>
    </div>
  );
};

export default OurPartners;
