import { render } from '@testing-library/react';
import StyledUnderlinedText from './StyledUnderlinedText';

describe('StyledUnderlinedText Component', () => {
  test('renders with correct text and style', () => {
    const { getByText } = render(
      <StyledUnderlinedText 
        text="Hello World" 
        textStyle="text-class" 
        underlineColor="red" 
      />
    );

    // Check if the text is rendered correctly
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  test('applies the correct underline color', () => {
    const { container } = render(
      <StyledUnderlinedText 
        text="Hello World" 
        textStyle="text-class" 
        underlineColor="blue" 
      />
    );

    // Check the underline color in the inline styles
    const underlineElement = container.querySelector('div:nth-child(2)');
    expect(underlineElement).toHaveStyle('border-color: blue transparent transparent');
  });
});
