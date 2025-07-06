import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "../../src/components/common/Table/Table";

describe("Table", () => {
  const mockColumns = [
    { Header: "Name", accessor: "name" },
    { Header: "Status", accessor: "status" },
    { Header: "Value", accessor: "value" },
  ];

  const mockData = [
    { name: "Item 1", status: "Active", value: "100" },
    { name: "Item 2", status: "Inactive", value: "200" },
    { name: "Item 3", status: "Pending", value: "300" },
  ];

  it("renders SkeletonTable when loading is true", () => {
    render(<Table data={mockData} columns={mockColumns} loading={true} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders correct column headers and data rows", () => {
    const { container } = render(
      <Table data={mockData} columns={mockColumns} loading={false} />
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();

    const bodyRows = container.querySelectorAll("tbody tr");
    expect(bodyRows).toHaveLength(3);
  });

  it("handles row click when onRowClick is provided", () => {
    const mockRowClick = jest.fn();
    render(
      <Table
        data={mockData}
        columns={mockColumns}
        loading={false}
        onRowClick={mockRowClick}
      />
    );

    const firstRow = screen.getByLabelText("View details for Item 1");
    fireEvent.click(firstRow);

    expect(mockRowClick).toHaveBeenCalledTimes(1);
    expect(mockRowClick).toHaveBeenCalledWith(mockData[0]);
  });
});
