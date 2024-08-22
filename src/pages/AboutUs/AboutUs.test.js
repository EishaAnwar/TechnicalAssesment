import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';
import '@testing-library/jest-dom';

// Mocking child components
jest.mock('../OurPartners/OurPartners', () => () => <div data-testid="our-partners" />);
jest.mock('../OurServices/OurServices', () => () => <div data-testid="our-services" />);
jest.mock('../OurTeam/OurTeam', () => () => <div data-testid="our-team" />);
jest.mock('../../components/ImageOverlay/ImageOverlay', () => ({ children }) => <div data-testid="image-overlay">{children}</div>);

describe('AboutUs', () => {
  test('renders OurTeam component', () => {
    render(<AboutUs />);
    const ourTeam = screen.getByTestId('our-team');
    expect(ourTeam).toBeInTheDocument();
  });

  test('renders OurServices component', () => {
    render(<AboutUs />);
    const ourServices = screen.getByTestId('our-services');
    expect(ourServices).toBeInTheDocument();
  });

  test('renders OurPartners component', () => {
    render(<AboutUs />);
    const ourPartners = screen.getByTestId('our-partners');
    expect(ourPartners).toBeInTheDocument();
  });

  test('renders ImageOverlay component with an image', () => {
    render(<AboutUs />);
    const imageOverlay = screen.getByTestId('image-overlay');
    expect(imageOverlay).toBeInTheDocument();
    const img = screen.getByAltText('investment');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('Investment.png'));
  });

  test('renders image with correct class name', () => {
    render(<AboutUs />);
    const img = screen.getByAltText('investment');
    expect(img).toHaveClass('investment');
  });
});
