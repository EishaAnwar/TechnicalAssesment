import { render, screen } from '@testing-library/react';
import FormHeader from './FormHeader';
import '@testing-library/jest-dom';

describe('FormHeader Component', () => {
  test('renders title and description correctly', () => {
    const title = "Form Title";
    const description = "This is a description of the form.";

    render(<FormHeader title={title} description={description} />);
    
    // Check if the title is rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();
    
    // Check if the description is rendered correctly
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('does not render description when not provided', () => {
    const title = "Form Title";

    render(<FormHeader title={title} />);

    // Check if the title is rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();
    
    // Check if the description is not rendered
    expect(screen.queryByText(/This is a description of the form./)).toBeNull();
  });

  test('renders with default props', () => {
    const title = "Default Title";

    render(<FormHeader title={title} />);
    
    // Check if the title is rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();
    
    // Check if the description is not rendered when not provided
    expect(screen.queryByText(/Description/)).toBeNull();
  });
});
