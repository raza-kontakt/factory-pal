import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorState from "../../src/components/ui/ErrorState";

describe("ErrorState", () => {
  it("conditionally renders description when provided", () => {
    render(<ErrorState title="Error" description="Custom description" />);

    expect(screen.getByText("Custom description")).toBeInTheDocument();
  });

  it("renders action button when both text and handler provided", () => {
    const mockHandler = jest.fn();
    render(
      <ErrorState
        title="Error"
        actionText="Try Again"
        onActionClick={mockHandler}
      />
    );

    expect(screen.getByText("Try Again")).toBeInTheDocument();
  });

  it("calls onClick handler when action button clicked", () => {
    const mockHandler = jest.fn();
    render(
      <ErrorState
        title="Error"
        actionText="Try Again"
        onActionClick={mockHandler}
      />
    );

    fireEvent.click(screen.getByText("Try Again"));

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
