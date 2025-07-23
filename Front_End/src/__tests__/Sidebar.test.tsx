import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "../layout/Sidebar";

describe("Sidebar", () => {
  it("renders all menu items and highlights active", () => {
    const handleTabChange = jest.fn();
    render(<Sidebar activeTab="dashboard" onTabChange={handleTabChange} />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/schedule/i)).toBeInTheDocument();
    expect(screen.getByText(/courses/i)).toBeInTheDocument();
    expect(screen.getByText(/gradebook/i)).toBeInTheDocument();
    expect(screen.getByText(/performance/i)).toBeInTheDocument();
    expect(screen.getByText(/announcements/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/courses/i));
    expect(handleTabChange).toHaveBeenCalledWith("courses");
  });
});
