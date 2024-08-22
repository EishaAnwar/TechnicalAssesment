// CustomAlert.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CustomAlert from "./Alert";

describe("CustomAlert Component", () => {
  const onDismiss = jest.fn();

  test("renders the alert with title and message", () => {
    render(<CustomAlert title="Success" message="Form submitted successfully!" onDismiss={onDismiss} />);

    expect(screen.getByTestId("alert-box")).toBeInTheDocument();
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Form submitted successfully!")).toBeInTheDocument();
  });

  test("renders different types of alerts", () => {
    render(<CustomAlert title="Success" message="Success message" type="success" onDismiss={onDismiss} />);
    expect(screen.getByText("Success")).toHaveClass("success");

    render(<CustomAlert title="Error" message="Error message" type="error" onDismiss={onDismiss} />);
    expect(screen.getByText("Error")).toHaveClass("error");

    render(<CustomAlert title="Info" message="Info message" type="info" onDismiss={onDismiss} />);
    expect(screen.getByText("Info")).toHaveClass("info");

    render(<CustomAlert title="Warning" message="Warning message" type="warning" onDismiss={onDismiss} />);
    expect(screen.getByText("Warning")).toHaveClass("warning");
  });

  test("calls onDismiss when close icon is clicked", () => {
    render(<CustomAlert title="Success" message="Form submitted successfully!" onDismiss={onDismiss} />);

    fireEvent.click(screen.getByLabelText("close"));
    expect(onDismiss).toHaveBeenCalled();
  });

  test("calls onDismiss when overlay is clicked", () => {
    render(<CustomAlert title="Success" message="Form submitted successfully!" onDismiss={onDismiss} />);

    fireEvent.click(screen.getByTestId("alert-box").parentElement);
    expect(onDismiss).toHaveBeenCalled();
  });

});
