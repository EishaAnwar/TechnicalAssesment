import { render, screen } from '@testing-library/react';
import ImageOverlay from './ImageOverlay';
import '@testing-library/jest-dom';

describe('ImageOverlay Component', () => {
  test('renders children correctly', () => {
    render(<ImageOverlay><div>Child Content</div></ImageOverlay>);
    
    const childContent = screen.getByText('Child Content');
    
    expect(childContent).toBeInTheDocument();
  });

  test('renders overlay image correctly', () => {
    render(<ImageOverlay><div>Child Content</div></ImageOverlay>);
    
    const overlayImage = screen.getByAltText('Overlay Image');
    
    expect(overlayImage).toBeInTheDocument();
    expect(overlayImage).toHaveAttribute('src', expect.stringContaining('ImageOverlay.png'));
  });
});
