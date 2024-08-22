import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OurTeam from './OurTeam';

describe('OurTeam Component', () => {
  test('renders the OurTeam component', () => {
    render(<OurTeam />);
    expect(screen.getByTestId('our-team')).toBeInTheDocument();
  });

  test('renders the header text correctly', () => {
    render(<OurTeam />);

    // Check specific header parts using data-testid attributes
    expect(screen.getByTestId('header-part-1')).toHaveTextContent(/Lorem ipsum/i);
    expect(screen.getByTestId('header-part-2')).toHaveTextContent(/amet yo 👋/i);
  });

  test('renders the team members with images and details', () => {
    render(<OurTeam />);

    // Check if team member names are present
    const names = [
      'Andrew Schultz',
      'Andrew Schultz',
      'Andrew Schultz',
      'Schultz',
      'Andrew'
    ];
    names.forEach(name => {
      expect(screen.getAllByText(name)).toHaveLength(names.filter(n => n === name).length);
    });

    // Check if descriptions are present
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.";
    expect(screen.getAllByText(description)).toHaveLength(5);

    // Check if images are displayed
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5); // Adjust length based on the number of team members
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
    });
  });
});
