import { render, screen } from '@testing-library/react';
import HeaderFooter from './HeaderFooter';
import '@testing-library/jest-dom';

describe('HeaderFooter Component', () => {

  test('renders footer with correct links', () => {
    render(<HeaderFooter type="footer" />);
    
    const faqsLink = screen.getByText('FAQs');
    const privacyPolicyLink = screen.getByText('Privacy Policy');
    const otherLink = screen.getByText('Other');
    
    expect(faqsLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(otherLink).toBeInTheDocument();
  });

  test('displays overlay when header is not visible', () => {
    render(<HeaderFooter type="header" />);
    
    // Mock intersection observer to simulate header visibility
    const observer = jest.fn((callback) => {
      callback([{ isIntersecting: false }]);
    });
    window.IntersectionObserver = jest.fn(observer);

    // Check if overlay is displayed
    const overlay = screen.getByTestId('header-overlay');
    expect(overlay).toBeInTheDocument();
  });

  test('does not display overlay for footer', () => {
    render(<HeaderFooter type="footer" />);
    
    // Check if overlay is not displayed
    const overlay = screen.queryByTestId('header-overlay');
    expect(overlay).toBeNull();
  });
});
