import { render, screen } from "lib/testing-library-utils";
import { useRouter } from "next-router-mock";
import Page from "./page";

jest.mock("next/navigation", () => ({
  useRouter,
  usePathname: jest.fn().mockReturnValue("/result"),
}));

test("결과 페이지 initial condition", () => {
  render(<Page />);

  const heading = screen.getByRole("heading", {
    name: "총 칼로리가 계산되었습니다!",
  });

  expect(heading).toBeInTheDocument();
});
