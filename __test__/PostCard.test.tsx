import { fireEvent, render, screen } from "@testing-library/react";
import PostCard from "../components/Post/PostCard";
import { Post } from "../helpers/types";

const post: Post = {
  id: 1,
  publishedAt: new Date(2022, 6, 5),
  title: "test",
  topic: "test",
  user: { name: "test", id: 1 },
  content: "a".repeat(500),
};

describe("post card works", () => {
  test("shows excerpt instead of full", () => {
    render(<PostCard post={post} />);
    const content = screen.getByText(/aaaaa/);
    expect(content.textContent?.length).toBe(150 + 3);
  });

  // I have removed the ability to un-expand posts
  test("expanding post", () => {
    render(<PostCard post={post} />);
    const expand = screen.getByText(/read full/i);
    // click the read full button
    fireEvent.click(expand);
    // the read full button should disappear when we have expanded the post
    expect(screen.queryByText(/read full/i)).toBeNull();
  });

  test("hiding read comments if the prop is passed", () => {
    render(<PostCard post={post} hideReadComments={true} />);
    expect(screen.queryByText(/read comments/i)).toBeNull();
  });
});
