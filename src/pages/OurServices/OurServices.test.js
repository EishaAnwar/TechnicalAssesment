import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OurServices from '../OurServices/OurServices';

describe('OurServices Component', () => {
  test('renders the component and displays services', () => {
    render(<OurServices />);

    // Check if the component is rendered
    const servicesContainer = screen.getByTestId('our-services');
    expect(servicesContainer).toBeInTheDocument();

    // Check if each service is rendered
    const serviceTitles = ['24/7 Support', '1000+ of reviews', 'And more!'];
    serviceTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Check if images are displayed
    serviceTitles.forEach(title => {
      const img = screen.getByAltText(title);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src');
    });
  });
});
