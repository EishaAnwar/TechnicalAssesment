import { render } from '@testing-library/react';
import Logo from './Logo';
import logoImage from '../../assets/images/logo.png'; // Import default image for comparison

describe('Logo Component', () => {
  test('renders with default image', () => {
    const { getByAltText } = render(<Logo />);
    const logo = getByAltText('Logo');

    // Verify the logo image is rendered
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain(logoImage);
  });

  test('renders with a provided image', () => {
    const testImage = 'https://example.com/test-image.png';
    const { getByAltText } = render(<Logo image={testImage} />);
    const logo = getByAltText('Logo');

    // Verify the logo image is rendered with the provided image
    expect(logo).toBeInTheDocument();
    expect(logo.src).toBe(testImage);
  });
});
