import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "../../src/components/ui/Heading";

describe("Heading", () => {
  it("renders with default variant h4", () => {
    render(<Heading>Test Heading</Heading>);
    
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H4");
  });

  it("renders children correctly", () => {
    render(<Heading>My Custom Heading Text</Heading>);
    
    expect(screen.getByText("My Custom Heading Text")).toBeInTheDocument();
  });

  it("applies custom props", () => {
    render(<Heading className="custom-class">Test</Heading>);
    
    const heading = screen.getByTestId("heading");
    expect(heading).toHaveClass("custom-class");
  });
}); 