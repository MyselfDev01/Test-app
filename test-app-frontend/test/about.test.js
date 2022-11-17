import { render, screen } from "@testing-library/react";
import AboutUs from "../src/pages/about/index";

describe("About", () => {
  it("about", () => {
    render(<AboutUs />);
    const heading = screen.getByRole("heading", {
      name: /About Us/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
