import { fireEvent, render, screen } from "@testing-library/react";
import NavTopics from "../components/Navigation/NavTopics";

describe("nav topics component works", () => {
  test("toggle list", () => {
    render(<NavTopics />);
    const caret = screen.getByRole("button");
    fireEvent.click(caret);
    // the dropdown shows
    expect(screen.getByText(/edit list/i)).toBeInTheDocument();
    expect(screen.getByTestId("fa-caret-up")).toBeInTheDocument();
    // we toggle it by clicking it again
    fireEvent.click(caret);
    expect(screen.queryByText(/edit list/i));
    expect(screen.getByTestId("fa-caret-down")).toBeInTheDocument();
  });
});
