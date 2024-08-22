import { render, screen } from '@testing-library/react';
import MicrosoftLogo from './MicrosoftLogo';
import '@testing-library/jest-dom';

test('renders all squares with correct class names', () => {
  render(<MicrosoftLogo />);
  
  // Get all logo squares using role
  const squares = screen.getAllByRole('presentation');
  
  // Check that there are exactly 4 squares
  expect(squares).toHaveLength(4);

  // Optionally, you can also verify the class names
  expect(squares[0]).toHaveClass('topLeft');
  expect(squares[1]).toHaveClass('topRight');
  expect(squares[2]).toHaveClass('bottomLeft');
  expect(squares[3]).toHaveClass('bottomRight');
});
