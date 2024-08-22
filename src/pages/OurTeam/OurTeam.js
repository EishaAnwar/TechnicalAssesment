// Updated OurTeam Component
import React from "react";
import styles from "./OurTeam.module.scss";
import StyledUnderlinedText from "../../components/StyledUnderlinedText/StyledUnderlinedText";
import member1 from "../../assets/images/member1.png";
import member2 from "../../assets/images/member2.png";
import member3 from "../../assets/images/member3.png";

const teamMembersList = [
  {
    id: 1,
    name: "Andrew Schultz",
    roleDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    image: member1,
  },
  {
    id: 2,
    name: "Andrew Schultz",
    roleDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    image: member2,
  },
  {
    id: 3,
    name: "Andrew Schultz",
    roleDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    image: member3,
  },
  {
    id: 4,
    name: "Schultz",
    roleDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    image: member1,
  },
  {
    id: 5,
    name: "Andrew",
    roleDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
    image: member2,
  },
];

const OurTeam = () => {
  return (
    <section className={styles.container} data-testid="our-team">
      <div className={styles.header}>
        <div data-testid="header-part-1" style={{ display: "flex" }}>
          <span>Lorem ipsum&nbsp;</span>
          <StyledUnderlinedText
            text="dolor"
            underlineColor="rgba(248, 157, 33, 1)"
            textStyle={styles.headerTextDolor}
          />
          <span>&nbsp;sit</span>
        </div>
        <div data-testid="header-part-2"> amet yo 👋</div>
      </div>
      <div className={styles.teamMembersList}>
        {teamMembersList.map((teamMember) => (
          <div className={styles.teamMember} key={teamMember.id}>
            <img
              src={teamMember?.image}
              alt={`${teamMember?.name}`}
              width="64px"
              height="64px"
              style={{ borderRadius: "50%" }}
            />
            <div className={styles.teamMemberDetails}>
              <div className={styles.teamMemberName}>{teamMember?.name}</div>
              <div className={styles.teamMemberRoleDescription}>
                {teamMember?.roleDesc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
