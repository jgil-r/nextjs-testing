import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders heading1 without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});

describe("App", () => {
  it("renders heading2 without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Testing React!" })
    ).toBeInTheDocument();
  });
});
