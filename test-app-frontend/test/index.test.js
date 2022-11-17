import { render, screen } from "@testing-library/react";
import Shop from "../src/pages";

describe("Shop", () => {
  it("shop", () => {
    render(<Shop />);
    const heading = screen.getByRole("heading", {
      name: /Shop/i,
    });
    const paragraphs = screen.getByTestId(`p-tag-description`);
    expect(paragraphs).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
