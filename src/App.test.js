import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BackgroundContainer and MainComponent', () => {
  render(<App />);
  // Check if BackgroundContainer and MainComponent are rendered
  expect(screen.getByTestId('background-container')).toBeInTheDocument();
  expect(screen.getByTestId('main-component')).toBeInTheDocument();
});