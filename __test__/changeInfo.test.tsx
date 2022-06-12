import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ChangeInfoForm from "../components/Dashboard/ChangeInfoForm";

describe("change info form works", () => {
  test("empty name does not pass", async () => {
    render(<ChangeInfoForm user={{ id: 1, name: "s" }} />);
    const input = screen.getByLabelText(/name/i);
    const password = screen.getByLabelText(/confirm/i);
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(password, { target: { value: "random" } });
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(screen.getByText(/required/i)).toBeInTheDocument();
    });
  });

  test("the old password equals to the new password is problematic", async () => {
    render(<ChangeInfoForm user={{ id: 1, name: "s" }} />);
    fireEvent.click(screen.getByText(/change/i));
    const currentPass = screen.getByLabelText(/current/i);
    const newPass = screen.getByLabelText(/new/i);
    fireEvent.change(newPass, { target: { value: "random" } });
    fireEvent.change(currentPass, { target: { value: "random" } });
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(screen.getByText(/same/i)).toBeInTheDocument();
    });
  });
});
