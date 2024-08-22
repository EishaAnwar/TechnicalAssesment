// import React from "react";
// import styles from "./HeaderFooter.module.scss";
// import logoImage from "../../assets/images/logo.png";
// import Logo from "../Logo/Logo";
// import Divider from "../Divider/Divider";

// const HeaderFooter = ({ type = "header" }) => {
//   const MenuOptionList = {
//     header: [
//       { id: 1, label: "About us", link: "#aboutUs" },
//       { id: 2, label: "Registration", link: "#registration" },
//       { id: 3, label: "Careers", link: "#careers" },
//     ],
//     footer: [
//       { id: 1, label: "FAQs", link: "#faqs" },
//       { id: 2, label: "Privacy Policy", link: "#privacy-policy" },
//       { id: 3, label: "Other", link: "#other" },
//     ],
//   };

//   const headerFooterSection = (type) => {
//     return (
//       <div className={styles.headerFooter}>
//         <Logo image={logoImage} />
//         <nav>
//           <ul>
//             {MenuOptionList?.[type]?.map((item) => (
//               <li key={item.id}>
//                 <a href={item.link}> {item.label}</a>
//               </li>
//             ))}
//           </ul>
//           <button className={styles.button}>Contact us</button>
//         </nav>
//       </div>
//     );
//   };

//   return type === "header" ? (
//     headerFooterSection(type)
//   ) : (
//     <div id="header" className={styles.footer}>
//       <Divider />
//       {headerFooterSection(type)}
//       <p className={styles.subFooter}>
//         Copyright © 2023 i2c inc. All rights reserved.
//       </p>
//     </div>
//   );
// };

// export default HeaderFooter;



import React, { useState, useEffect, useRef } from 'react';
import styles from "./HeaderFooter.module.scss";
import logoImage from "../../assets/images/logo.png";
import Logo from "../Logo/Logo";
import Divider from "../Divider/Divider";

const HeaderFooter = ({ type = "header" }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the header is not intersecting (i.e., not visible)
          if (!entry.isIntersecting) {
            setIsOverlayVisible(true);
          } else {
            setIsOverlayVisible(false);
          }
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

  const MenuOptionList = {
    header: [
      { id: 1, label: "About us", link: "#aboutUs" },
      { id: 2, label: "Registration", link: "#registration" },
      { id: 3, label: "Careers", link: "#careers" },
    ],
    footer: [
      { id: 1, label: "FAQs", link: "#faqs" },
      { id: 2, label: "Privacy Policy", link: "#privacy-policy" },
      { id: 3, label: "Other", link: "#other" },
    ],
  };

  const headerFooterSection = (type) => {
    return (
      <div className={styles.headerFooter} >
        <Logo image={logoImage} />
        <nav>
          <ul>
            {MenuOptionList?.[type]?.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button className={styles.button}>Contact us</button>
        </nav>
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOverlayVisible  && (
        <div className={styles.overlay}>
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

export default HeaderFooter;

