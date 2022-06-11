import { useRouter } from "next/router";
import { useRedirect } from "../helpers/useRedirect";

// mocking the router component
jest.mock("next/router");
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

jest.useFakeTimers();

describe("use redirect hook works", () => {
  test("with no query param", async () => {
    const mockPush = jest.fn();
    mockUseRouter.mockReturnValue({
      query: {},
      push: mockPush,
    } as any);
    const { redirect } = useRedirect();
    redirect();
    jest.runAllTimers();
    expect(mockPush.mock.calls[0][0]).toBe("/");
  });

  test("with query param", async () => {
    const mockPush = jest.fn();
    mockUseRouter.mockReturnValue({
      query: {
        redirect: "/topic/2/4",
      },
      push: mockPush,
    } as any);
    const { redirect } = useRedirect();
    redirect();
    jest.runAllTimers();
    expect(mockPush.mock.calls[0][0]).toBe("/topic/2/4");
  });

  test("with invalid query param", async () => {
    const mockPush = jest.fn();
    mockUseRouter.mockReturnValue({
      query: {
        redirect: ["/topic/2/4", "second"],
      },
      push: mockPush,
    } as any);
    const { redirect } = useRedirect();
    redirect();
    jest.runAllTimers();
    expect(mockPush.mock.calls[0][0]).toBe("/");
  });
});
