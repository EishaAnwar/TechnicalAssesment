import React from 'react';
import { render, screen } from '@testing-library/react';
import MainComponent from './MainComponent';
import '@testing-library/jest-dom';

// Mocking child components
jest.mock('../../components/HeaderFooter/HeaderFooter', () => () => <div data-testid={`header-footer`} />);
jest.mock('../Registration/Registration', () => () => <div data-testid="registration" />);
jest.mock('../AboutUs/AboutUs', () => () => <div data-testid="about-us" />);

describe('MainComponent', () => {
  test('renders HeaderFooter component with header type', () => {
    render(<MainComponent />);
    const headerFooter = screen.getAllByTestId('header-footer');
    expect(headerFooter.length).toBeGreaterThanOrEqual(2); 
    expect(headerFooter[0]).toBeInTheDocument();
  });

  test('renders AboutUs component', () => {
    render(<MainComponent />);
    const aboutUs = screen.getByTestId('about-us');
    expect(aboutUs).toBeInTheDocument();
  });

  test('renders Registration component', () => {
    render(<MainComponent />);
    const registration = screen.getByTestId('registration');
    expect(registration).toBeInTheDocument();
  });

  test('renders HeaderFooter component with footer type', () => {
    render(<MainComponent />);
    const headerFooter = screen.getAllByTestId('header-footer');
    expect(headerFooter.length).toBeGreaterThanOrEqual(2);
    expect(headerFooter[1]).toBeInTheDocument();
  });
});
