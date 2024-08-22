import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import BackgroundSplashPattern from "./BackgroundPattern";

describe("BackgroundSplashPattern Component", () => {
  // Test Case 1: Rendering Test
  test("renders without crashing", () => {
    const { container } = render(
      <BackgroundSplashPattern
        parentTop="100px"
        topOffset={10}
        parentLeft="100px"
        leftOffset={10}
      />
    );
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("splashPattern");
  });

  // Test Case 2: Default Props Test
  test("uses default props when not provided", () => {
    const { container } = render(<BackgroundSplashPattern />);
    const splashPattern = container.firstChild;

    // Default styles
    expect(splashPattern).toHaveStyle(`top: ${1903 - 0}px`);
    expect(splashPattern).toHaveStyle(`left: ${-78 + 0}px`);
    expect(splashPattern).toHaveStyle("opacity: 1");
    expect(splashPattern).toHaveStyle(
      "background: radial-gradient(50% 50% at 50% 50%, #b9ceea 0%, rgba(246, 251, 248, 0) 100%)"
    );
  });

  // Test Case 3: Style Calculation Test
  test("calculates styles correctly based on props", () => {
    const { container } = render(
      <BackgroundSplashPattern
        parentTop="500px"
        topOffset={50}
        parentLeft="300px"
        leftOffset={100}
        opacityPercentage={75}
        splashColor="#ff0000"
      />
    );
    const splashPattern = container.firstChild;

    // Calculated styles
    expect(splashPattern).toHaveStyle("top: 450px");
    expect(splashPattern).toHaveStyle("left: 400px");
    expect(splashPattern).toHaveStyle("opacity: 0.75");
    expect(splashPattern).toHaveStyle(
      "background: radial-gradient(50% 50% at 50% 50%, #ff0000 0%, rgba(246, 251, 248, 0) 100%)"
    );
  });

  // Test Case 4: Custom Prop Values Test
  test("renders correctly with custom prop values", () => {
    const { container } = render(
      <BackgroundSplashPattern
        parentTop="1000px"
        topOffset={200}
        parentLeft="500px"
        leftOffset={50}
        opacityPercentage={50}
        splashColor="#00ff00"
      />
    );
    const splashPattern = container.firstChild;

    // Custom prop values
    expect(splashPattern).toHaveStyle("top: 800px");
    expect(splashPattern).toHaveStyle("left: 550px");
    expect(splashPattern).toHaveStyle("opacity: 0.5");
    expect(splashPattern).toHaveStyle(
      "background: radial-gradient(50% 50% at 50% 50%, #00ff00 0%, rgba(246, 251, 248, 0) 100%)"
    );
  });
});
