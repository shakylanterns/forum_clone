import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import Login from "../pages/login";
import Register from "../pages/register";

// mocking the router component
jest.mock("next/router");
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

describe("login page works", () => {
  test("correct data redirects user", async () => {
    const mockPush = jest.fn();
    // don't need the other properties in this mock
    mockUseRouter.mockImplementation(function (): any {
      return {
        push: mockPush,
        query: {},
      };
    });
    render(<Login />);
    // the first one is name, the second one is email, the last one is password
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], {
      target: { value: "test@bob.com" },
    });
    fireEvent.change(inputs[1], { target: { value: "strong password" } });
    const submit = screen.getByText(/Login/i);
    fireEvent.click(submit);
    // there is a timeout inside the register component
    await waitFor(
      () => {
        expect(mockPush.mock.calls).toHaveLength(1);
        expect(mockPush.mock.calls[0][0]).toEqual("/");
      },
      { timeout: 400 }
    );
  });

  test("field are empty", async () => {
    // don't need the other properties in this mock
    const mockPush = jest.fn();
    mockUseRouter.mockImplementation(function (): any {
      return {
        push: mockPush,
        query: {},
      };
    });
    render(<Register />);
    const submit = screen.getByText(/Register/i);
    fireEvent.click(submit);
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
      expect(mockPush.mock.calls).toHaveLength(0);
    });
    // there is a timeout inside the register component
  });
});
