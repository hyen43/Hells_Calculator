import { render, screen, act, waitFor } from "lib/testing-library-utils";
import mockRouter, { useRouter } from "next-router-mock";
import Page from "./page";
import userEvent from "@testing-library/user-event";
import { useResultStore } from "../store/useStore";

jest.mock("next/navigation", () => ({
  useRouter,
  usePathname: jest.fn().mockReturnValue("/result"),
}));

describe("결과 페이지 initial conditions", () => {
  beforeEach(() => {
    useResultStore.setState({ result: "" });
    render(<Page />);
  });

  it("1. 만약 결과가 없으면, 다시 메인으로 돌아간다.", () => {
    const state = useResultStore.getState();
    // 결과가 없을 것을 기대한다.
    if (state?.result.length === 0) {
      // 메인이 기대된다.
      expect(mockRouter).toMatchObject({
        pathname: "/",
      });
    }
  });

  it("2. 만약 결과가 있으면, 칼로리가 계산되었습니다. 해딩이 보인다.", () => {
    act(() => {
      useResultStore.setState({
        result: "결과 있습니당!",
      });
    });
    const state = useResultStore.getState();
    // 결과가 있을 것을 기대한다.
    if (state?.result.length > 0) {
      const heading = screen.getByRole("heading", {
        name: "총 칼로리가 계산되었습니다!",
      });

      expect(heading).toBeInTheDocument();
    }
  });
});

test("다시 계산하기 버튼을 클릭하면, 페이지 이동", async () => {
  const user = userEvent.setup();
  mockRouter.push = jest.fn();
  render(<Page />);

  const button = screen.getByRole("button", { name: "다시 계산하기" });

  // 계산하기 버튼 클릭
  user.click(button);
  await waitFor(() => {
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
