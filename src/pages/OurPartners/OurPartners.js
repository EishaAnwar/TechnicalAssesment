import React, { useState } from "react";
import StyledUnderlinedText from "../../components/StyledUnderlinedText/StyledUnderlinedText";
import styles from "./OurPartners.module.scss";
import CocaCola from "../../assets/images/CocaCola.png";
import Twitter from "../../assets/images/Twitter.png";
import Microsoft from "../../assets/images/Microsoft.png";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const OurPartners = () => {
  const PartenersList = [
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
    { id: "4", name: "Instagram", logoSrc: "Instagram" },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  // Determine the elements to display based on the startIndex
  const visiblePartners = PartenersList?.slice(
    startIndex,
    startIndex + itemsToShow
  );

  const next = () => {
    if (startIndex + itemsToShow <= PartenersList.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <StyledUnderlinedText
            text="Trusted by"
            textStyle={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "36px",
              fontWeight: "800",
              lineHeight: "43.57px",
              textAlign: "left",
              color: "rgba(0, 0, 0, 1)",
            }}
            underlineColor="rgba(240, 184, 13, 1)"
          />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>
        </div>
        <div className={styles.partnersList}>
          <KeyboardArrowLeftOutlinedIcon
            onClick={() => prev()}
            style={{
              color: startIndex === 0 ? "lightgrey" : "rgba(70, 176, 230, 1)",
              cursor: startIndex === 0 ? "initial" : "pointer",
            }}
          />

          <div className={styles.partnersLogo}>
            {visiblePartners?.map((partner) => (
              <img
                src={partner?.logoSrc}
                alt={partner?.name}
                width={partner?.width}
                height={partner?.height}
                key={partner?.id}
              />
            ))}
          </div>

          <KeyboardArrowRightOutlinedIcon
            onClick={() => next()}
            style={{
              color:
                startIndex + itemsToShow >= PartenersList.length
                  ? "lightgrey"
                  : "rgba(70, 176, 230, 1)",
              cursor:
                startIndex + itemsToShow >= PartenersList.length
                  ? "none"
                  : "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OurPartners;
