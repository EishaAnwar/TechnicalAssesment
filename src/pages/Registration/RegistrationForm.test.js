import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import RegistrationForm from "./RegistrationForm";

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value),
    clear: () => (store = {}),
  };
})();
global.localStorage = localStorageMock;

describe("RegistrationForm", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test("renders the form correctly", () => {
    render(<RegistrationForm />);
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your company name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
  });

  test("shows validation errors", async () => {
    render(<RegistrationForm />);
    fireEvent.click(screen.getByText(/Register/i));
    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });
  

  test("submits the form and shows alert", async () => {
    render(<RegistrationForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: "ACME Corp" } });
    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: "john@example.com" } });
    fireEvent.click(screen.getByText(/Register/i));

    // Wait for the alert to be visible
    expect(await screen.findByText(/Hi John Doe, thanks for registering. Somebody will contact you soon./i)).toBeInTheDocument();
  });

  
});
