import { render, screen } from "@testing-library/react";
import Recipes from "../src/pages/recipes";

describe("Recipes", () => {
  it("recipes", () => {
    render(<Recipes />);
    const heading = screen.getByRole("heading", {
      name: /Whole-Grain Banana Bread./i,
    });
    const paragraphs = screen.getByTestId(`p-tag-description`);
    expect(paragraphs).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
