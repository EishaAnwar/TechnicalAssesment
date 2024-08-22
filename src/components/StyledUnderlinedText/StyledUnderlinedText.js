import React from "react";

const StyledUnderlinedText = ({ text, textStyle, underlineColor }) => {
  const underlineStyle = {
    position: "relative",
    width: "100%",
    height: "8.29px",
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: `${underlineColor} transparent transparent`,
    borderRadius: "50%",
    transform: "rotate(-1.34deg)",
    transformOrigin: "left bottom",
  };
  return (
    <div >
      <div style={textStyle}>{text}</div>
      <div style={underlineStyle} />
    </div>
  );
};

export default StyledUnderlinedText;
