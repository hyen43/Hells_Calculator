import { render, screen } from "@testing-library/react";
import Page from "./page";

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

test("버튼을 클릭하면, 결과페이지로 이동하기", () => render(<Page />));
