import { fireEvent, render, screen } from "@testing-library/react";
import SaveCommentButton from "../components/Comment/SaveCommentButton";
import PostActions from "../components/Post/PostActions";

describe("save comment works", () => {
  test("text toggles when clicked", () => {
    render(<SaveCommentButton />);
    const button = screen.getByText(/Save Comment/i);
    fireEvent.click(button);
    expect(screen.getByText(/Unsave Comment/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/Save Comment/i)).toBeInTheDocument();
  });
});

describe("save post works", () => {
  test("text toggles when clicked", () => {
    render(
      <PostActions
        post={{
          content: "",
          id: 1,
          publishedAt: new Date(),
          title: "",
          topic: "",
          user: { id: 1, name: "" },
        }}
      />
    );
    const button = screen.getByText(/Save Post/i);
    fireEvent.click(button);
    expect(screen.getByText(/Unsave Post/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/Save Post/i)).toBeInTheDocument();
  });
});
