import { fireEvent, render, screen } from "lib/testing-library-utils";
import mockRouter, { useRouter } from "next-router-mock";
import Page from "./page";

jest.mock("next/navigation", () => ({
  useRouter,
  usePathname: jest.fn().mockReturnValue("/"),
}));

test("initial condition", () => {
  render(<Page />);

  // 1.가장 작은 단위인 인풋 박스 먼저 테스트
  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox).toHaveLength(4);

  const inputIds = inputBox.map((el) => el.id);

  expect(inputIds).toEqual(["breakfast", "lunch", "dinner", "snack"]);

  // 2. title 테스트
  const titleBox = screen.getAllByRole("heading");

  expect(titleBox).toHaveLength(2);

  // 3. 버튼 테스트
  const button = screen.getByRole("button", { name: "칼로리 계산하기" });

  expect(button).toBeInTheDocument();
});

// jest.mock("next/router", () => jest.requireActual("next-router-mock"));

test("버튼을 클릭하면, 결과페이지로 이동하기", () => {
  render(<Page />);
  // mockRouter.push("/result");

  const button = screen.getByRole("button", { name: "칼로리 계산하기" });

  // 클릭을 누른다.
  fireEvent.click(button);

  expect(mockRouter).toMatchObject({
    pathname: "/result",
  });
});
