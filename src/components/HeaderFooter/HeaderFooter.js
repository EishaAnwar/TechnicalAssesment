import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from "./HeaderFooter.module.scss";
import logoImage from "../../assets/images/logo.png";
import Logo from "../Logo/Logo";
import Divider from "../Divider/Divider";

// HeaderFooter Component
const HeaderFooter = ({ type = "header" }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to monitor header visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle overlay visibility based on intersection status
          setIsOverlayVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // Define menu options for header and footer
  const MenuOptionList = {
    header: [
      { id: 1, label: "About us", link: "#top" },
      { id: 2, label: "Registration", link: "#registration" },
      { id: 3, label: "Careers", link: "#careers" },
    ],
    footer: [
      { id: 1, label: "FAQs", link: "#faqs" },
      { id: 2, label: "Privacy Policy", link: "#privacyPolicy" },
      { id: 3, label: "Other", link: "#other" },
    ],
  };

  // Render the menu and logo
  const headerFooterSection = (type) => (
    <div className={styles.headerFooter} data-testid="header-footer">
      <Logo image={logoImage} />
      <nav>
        <ul>
          {MenuOptionList[type]?.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button className={styles.button} >Contact us</button>
      </nav>
    </div>
  );

  return (
    <>
      {/* Overlay to display when header is not visible */}
      {isOverlayVisible && type === "header" && (
        <div className={styles.overlay} data-testid="header-overlay">
          {headerFooterSection("header")}
        </div>
      )}

      {/* Normal Header/Footer Rendering */}
      {type === "header" ? (
        <div id="header" ref={headerRef} className={styles.header}>
          {headerFooterSection(type)}
        </div>
      ) : (
        <div id="footer" className={styles.footer}>
          <Divider />
          {headerFooterSection(type)}
          <p className={styles.subFooter}>
            Copyright © 2023 i2c inc. All rights reserved.
          </p>
        </div>
      )}
    </>
  );
};

// PropTypes validation
HeaderFooter.propTypes = {
  type: PropTypes.oneOf(["header", "footer"]),
};

export default HeaderFooter;
