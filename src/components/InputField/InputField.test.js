import { render, screen, fireEvent } from '@testing-library/react';
import FormGroup from './InputField';

describe('FormGroup Component', () => {
  test('renders label and input field correctly', () => {
    render(<FormGroup label="Name" id="name" type="text" placeholder="Enter your name" value="" onChange={() => {}} />);
    
    const label = screen.getByText('Name');
    const input = screen.getByPlaceholderText('Enter your name');
    
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('displays a required asterisk when required is true', () => {
    render(<FormGroup label="Name" id="name" type="text" placeholder="Enter your name" required value="" onChange={() => {}} />);
    
    const asterisk = screen.getByText('*');
    
    expect(asterisk).toBeInTheDocument();
  });

  test('does not display an asterisk when required is false', () => {
    render(<FormGroup label="Name" id="name" type="text" placeholder="Enter your name" value="" onChange={() => {}} />);
    
    const asterisk = screen.queryByText('*');
    
    expect(asterisk).toBeNull();
  });

  test('displays error message when error prop is provided', () => {
    render(<FormGroup label="Email" id="email" type="email" placeholder="Enter your email" error="Invalid email" value="" onChange={() => {}} />);
    
    const errorMessage = screen.getByText('Invalid email');
    
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const handleChange = jest.fn();
    render(<FormGroup label="Name" id="name" type="text" placeholder="Enter your name" onChange={handleChange} value="" />);
    
    const input = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(input, { target: { value: 'John' } });
    
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
