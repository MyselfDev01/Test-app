import { render, screen } from "@testing-library/react";
import LearPage from "../src/pages/learn/index";

describe("learn", () => {
  it("learn", () => {
    render(<LearPage />);
    const heading = screen.getByRole("heading", {
      name: /Learn here/i,
    });
    const paragraphs = screen.getByTestId(`p-tag-description`);
    expect(paragraphs).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
