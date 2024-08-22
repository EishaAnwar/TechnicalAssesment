import { render, screen } from '@testing-library/react';
import BackgroundContainer from './BackgroundContainer';
import '@testing-library/jest-dom';

describe('BackgroundContainer Component', () => {
  test('renders without crashing', () => {
    render(<BackgroundContainer />);
    
    // Check if the background container is in the document
    expect(screen.getByTestId('background-container')).toBeInTheDocument();
  });

  test('contains BackgroundLayer components', () => {
    render(<BackgroundContainer />);
    
    // Check if BackgroundLayer components are present
    const layers = screen.getAllByTestId('background-layer');
    expect(layers).toHaveLength(2);
  });

  test('has correct class applied', () => {
    render(<BackgroundContainer />);
    
    // Check if the container has the correct class
    expect(screen.getByTestId('background-container')).toHaveClass('backgroundContainer');
  });
});
