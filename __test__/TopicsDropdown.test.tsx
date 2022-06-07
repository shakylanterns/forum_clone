import { render, screen } from "@testing-library/react";
import React from "react";
import TopicsDropdown from "../components/Navigation/TopicsDropdown";

describe("topics dropdown", () => {
  test("show message if there is no item", () => {
    render(<TopicsDropdown topics={[]} />);
    const paragraph = screen.getByText(/You/);
    expect(paragraph).toBeInTheDocument();
  });

  test("the buttons has the correct link to the topic", () => {
    render(<TopicsDropdown topics={["wonders"]} />);
    const el = screen.getByText(/wonders/) as HTMLAnchorElement;
    expect(el.href).toMatch("/topic/wonders");
  });
});
