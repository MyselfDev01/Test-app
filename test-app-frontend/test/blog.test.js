import { render, screen } from "@testing-library/react";
import BlogPage from "../src/pages/blog/index";

describe("blog", () => {
  it("blog", () => {
    render(<BlogPage />);
    const heading = screen.getByRole("heading", {
      name: /You can create an blog/i,
    });
    const img = screen.getByTestId("product-image");
    const paragraphs = screen.getByTestId(`p-tag-description`);
    expect(img).toBeInTheDocument();
    expect(paragraphs).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
