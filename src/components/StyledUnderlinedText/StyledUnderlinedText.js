import React from "react";

const StyledUnderlinedText = ({ text, textStyle, underlineColor }) => {
  // Inline styles for the underline
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
    <div>
      {/* Display text with provided styling */}
      <div className={textStyle}>{text}</div>
      {/* Render the underline with dynamic color */}
      <div style={underlineStyle} />
    </div>
  );
};

export default StyledUnderlinedText;
