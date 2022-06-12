import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import Manage from "../pages/topic/[topicId]/manage";
// mocking the router component
jest.mock("next/router");
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

jest.useFakeTimers();

describe("manage topic works", () => {
  test("redirects after submitting", async () => {
    const mockPush = jest.fn();
    mockUseRouter.mockReturnValue({
      query: { topicId: 1 },
      push: mockPush,
    } as any);
    render(<Manage />);
    const input = screen.getByLabelText(/new name/i);
    fireEvent.change(input, { target: { value: "new text" } });
    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => {
      expect(mockPush.mock.calls[0][0]).toEqual("/topic/1");
    });
  });
});
