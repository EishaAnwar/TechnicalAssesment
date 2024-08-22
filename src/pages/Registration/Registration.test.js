import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional assertions
import Registration from './Registration'; // Adjust import path if needed

describe('Registration Component', () => {
  test('renders the Registration component', () => {
    render(<Registration />);
    // Check if the registration container is in the document
    expect(screen.getByTestId('registration')).toBeInTheDocument();
  });

  test('renders the assistant bot image with overlay', () => {
    render(<Registration />);
    // Check if the image is rendered correctly
    const image = screen.getByAltText('Assistant Bot');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('assistantBot.png')); // Check if the correct image is used
  });

  test('renders the RegistrationForm component', () => {
    render(<Registration />);
    // Check if the RegistrationForm component is rendered
    expect(screen.getByTestId('registration-form')).toBeInTheDocument();
  });
});
