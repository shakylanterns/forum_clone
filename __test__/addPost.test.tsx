import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import AddPost from "../pages/topic/[topicId]/addPost";

// mocking the router component
jest.mock("next/router");
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

describe("add post page works", () => {
  test("valid post", async () => {
    const mockPush = jest.fn();
    mockUseRouter.mockReturnValue({
      push: mockPush,
      query: { topicId: 2 },
    } as any);
    render(<AddPost />);
    const input = screen.getByLabelText(/title/i);
    const textarea = screen.getByLabelText(/post body/i);
    const submit = screen.getByText(/submit/i);

    fireEvent.change(input, { target: { value: "Valid title" } });
    fireEvent.change(textarea, { target: { value: "Post title" } });
    fireEvent.click(submit);

    await waitFor(() => {
      expect(mockPush.mock.calls[0][0]).toEqual("/topic/2");
    });
  });

  test("post with empty title shall not pass", async () => {
    const mockPush = jest.fn();
    mockUseRouter.mockReturnValue({
      push: mockPush,
      query: { topicId: 2 },
    } as any);
    render(<AddPost />);
    const input = screen.getByLabelText(/title/i);

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText(/required/i)).toBeInTheDocument();
    });

    fireEvent.change(input, { target: { value: "a".repeat(900) } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText(/255/i)).toBeInTheDocument();
    });
  });
});
