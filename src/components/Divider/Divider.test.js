import { render, screen } from '@testing-library/react';
import Divider from './Divider';
import '@testing-library/jest-dom';

describe('Divider Component', () => {
  test('renders without crashing', () => {
    render(<Divider />);
    
    // Check if the divider is in the document
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    const customClass = "custom-class";
    
    render(<Divider className={customClass} />);
    
    // Check if the divider has the custom class applied
    expect(screen.getByTestId('divider')).toHaveClass(customClass);
  });

  test('renders with default styling', () => {
    render(<Divider />);
    
    // Check if the divider has the default styling class applied
    expect(screen.getByTestId('divider')).toHaveClass('divider');
  });
});
