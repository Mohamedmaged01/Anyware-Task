import { render, screen, fireEvent } from "@testing-library/react";
import { HomePage } from "../pages/HomePage";
import { AuthProvider } from "../auth/AuthContext";
import "../i18n";

describe("HomePage", () => {
  it("renders login button and switches language", () => {
    render(
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText("AR"));
    expect(screen.getByText(/تسجيل الدخول/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText("EN"));
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("shows logout after login (no credentials)", async () => {
    render(
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/login/i));
    expect(await screen.findByText(/logout/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/logout/i));
    expect(await screen.findByText(/login/i)).toBeInTheDocument();
  });
});
