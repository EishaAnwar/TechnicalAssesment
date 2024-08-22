import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OurPartners from './OurPartners';

describe('OurPartners Component', () => {
  test('renders partner logos correctly', () => {
    render(<OurPartners />);
    
    // Check if the component is rendered
    expect(screen.getByTestId('our-partners')).toBeInTheDocument();
    
    // Check if the "Trusted by" text is present
    expect(screen.getByText('Trusted by')).toBeInTheDocument();
    
    // Check if the description text is present
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
    
    // Check if partner logos are visible initially
    expect(screen.getByAltText('Microsoft')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter')).toBeInTheDocument();
    expect(screen.getByAltText('CocaCola')).toBeInTheDocument();
    expect(screen.queryByAltText('Instagram')).not.toBeInTheDocument();
  });

  test('navigates to next partners on next button click', () => {
    render(<OurPartners />);
    
    const nextButton = screen.getByLabelText('Next');
    
    // Simulate next button click
    fireEvent.click(nextButton);
    
    // Expect the next set of partners to be visible
    expect(screen.queryByAltText('Microsoft')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Twitter')).toBeInTheDocument();
    expect(screen.queryByAltText('CocaCola')).toBeInTheDocument();
    expect(screen.queryByAltText('Instagram')).toBeInTheDocument();
  });

  test('navigates to previous partners on prev button click', () => {
    render(<OurPartners />);
    
    // Simulate next button click twice to move to the next set
    fireEvent.click(screen.getByLabelText('Next'));
    fireEvent.click(screen.getByLabelText('Next'));

    // Simulate prev button click
    fireEvent.click(screen.getByLabelText('Previous'));

    // Expect the first set of partners to be visible again
    expect(screen.getByAltText('Microsoft')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter')).toBeInTheDocument();
    expect(screen.getByAltText('CocaCola')).toBeInTheDocument();
    expect(screen.queryByAltText('Instagram')).not.toBeInTheDocument();
  });
});
