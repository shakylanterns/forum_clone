import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import SortingControls from "../components/Sorting/SortingControls";
import { SortingCriterion } from "../helpers/types";

const Wrapper = () => {
  const [selected, setSelected] = useState<SortingCriterion>("none");

  return <SortingControls selected={selected} setSelected={setSelected} />;
};

describe("sorting controls works", () => {
  test("change sorting criteria when clicked", () => {
    render(<Wrapper />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      fireEvent.click(button);
      // this means the button is turned on
      expect(button.className).toMatch("text-brand");
    });
  });
});
