import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRedirect } from "../helpers/useRedirect";
import Register from "../pages/register";

// mocking the router component
jest.mock("../helpers/useRedirect");
const mockUseRedirect = useRedirect as jest.MockedFunction<typeof useRedirect>;

describe("register page works", () => {
  test("correct data redirects user", async () => {
    const mockRedirect = jest.fn();
    // don't need the other properties in this mock
    mockUseRedirect.mockReturnValue({
      redirect: mockRedirect,
    } as any);
    render(<Register />);
    // the first one is name, the second one is email, the last one is password
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "testinguser" } });
    fireEvent.change(inputs[1], {
      target: { value: "validemail@company.com" },
    });
    fireEvent.change(inputs[2], { target: { value: "vAl1d$pass" } });
    const submit = screen.getByText(/Register/i);
    fireEvent.click(submit);
    // there is a timeout inside the register component
    await waitFor(
      () => {
        expect(mockRedirect.mock.calls).toHaveLength(1);
      },
      { timeout: 400 }
    );
  });

  test("field are empty", async () => {
    const mockRedirect = jest.fn();
    mockUseRedirect.mockReturnValue({
      redirect: mockRedirect,
    } as any);
    render(<Register />);
    const submit = screen.getByText(/Register/i);
    fireEvent.click(submit);
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(mockRedirect.mock.calls).toHaveLength(0);
    });
    // there is a timeout inside the register component
  });

  test("invalid username", async () => {
    render(<Register />);
    const input = screen.getByLabelText(/User/i);
    fireEvent.change(input, { target: { value: "@name3" } });
    // trigger the validation
    fireEvent.blur(input);
    await waitFor(() => {
      // expect to find the error message
      expect(screen.getByText(/only/i)).toBeInTheDocument();
    });
    // there is a timeout inside the register component
  });

  test("passwords which are not strong name", async () => {
    render(<Register />);
    const input = screen.getByLabelText(/password/i);
    fireEvent.change(input, { target: { value: "123456" } });
    // trigger the validation
    fireEvent.blur(input);
    await waitFor(() => {
      // expect to find the error message
      expect(screen.getByText(/at least/i)).toBeInTheDocument();
    });
    // there is a timeout inside the register component
  });
});
