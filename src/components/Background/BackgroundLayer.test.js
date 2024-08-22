import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackgroundLayer from './BackgroundLayer';

describe('BackgroundLayer Component', () => {
  test('renders without crashing', () => {
    render(<BackgroundLayer />);
    
    // Check if the BackgroundLayer component is rendered
    expect(screen.getByTestId('background-layer')).toBeInTheDocument();
  });

  test('contains the correct number of BackgroundSplashPattern components', () => {
    render(<BackgroundLayer />);
    
    // Check if exactly 5 BackgroundSplashPattern components are rendered
    const splashPatterns = screen.getAllByTestId('background-splash-pattern'); // Assuming data-testid is set in BackgroundSplashPattern
    expect(splashPatterns).toHaveLength(5);
  });

  test('applies default top and left positions', () => {
    render(<BackgroundLayer />);
    
    // Check if the default props are applied correctly
    const layer = screen.getByTestId('background-layer');
    expect(layer).toBeInTheDocument();
  });

  test('applies custom opacity correctly', () => {
    const customOpacity = 70;
    render(<BackgroundLayer opacityPercentage={customOpacity} />);
    
    // Check if custom opacity is applied to all splash patterns
    const splashPatterns = screen.getAllByTestId('background-splash-pattern');
    splashPatterns.forEach(pattern => {
      expect(pattern).toHaveStyle(`opacity: ${customOpacity / 100}`);
    });
  });
});
