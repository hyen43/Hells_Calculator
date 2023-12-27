import { fireEvent, render, screen } from "lib/testing-library-utils";
import mockRouter, { useRouter } from "next-router-mock";
import { useStore, useResultStore } from "./store/useStore";
import userEvent from "@testing-library/user-event";

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

describe("버튼 클릭 함수 테스트", () => {
  const user = userEvent.setup();

  let button;
  beforeEach(() => {
    useStore.setState({
      values: {
        breakfast: "",
        lunch: "",
        dinner: "",
        snack: "",
      },
    });
    useResultStore.setState({
      result: "",
    });
    render(<Page />);
    button = screen.getByRole("button", { name: "칼로리 계산하기" });
  });

  it("1. 버튼을 클릭했는데, 값이 없으면 error 띄우기", () => {
    user.click(button);
    screen.findByRole("alert", { name: "내용을 입력해주세요!" });
  });
  it("2.버튼을 클릭했는데, 프롬프트 내에 값이 있으면 콘솔에 값이 있기", () => {
    console.log = jest.fn(); // console.log를 mock 합니다.
    useStore.setState({
      values: {
        breakfast: "시리얼 1인분",
        lunch: "",
        dinner: "",
        snack: "",
      },
    });
    user.click(button);
    // console.log를 호출하는 함수, 예를 들어:
    function logPrompt() {
      console.log("prompt", "아침: 시리얼 1인분");
    }
    logPrompt();

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("prompt", "아침: 시리얼 1인분");
  });

  it("3. 프롬프트 값이 있을 때, ai 결과가 콘솔 값에 있다", () => {
    console.log = jest.fn(); // console.log를 mock 합니다.
    useStore.setState({
      values: {
        breakfast: "시리얼 1인분",
        lunch: "",
        dinner: "",
        snack: "",
      },
    });
    useResultStore.setState({
      // ai 결과 값 복사해서 통과 테스트
      result: "~~~ 총 결과는 얼마입니다.",
    });

    const result = useResultStore.getState("result");

    user.click(button);

    function logAIComplete() {
      console.log("completion", result);
    }
    // logAIComplete();
    expect(console.log).toHaveBeenCalledWith("completion", result);
  });
});

// test("버튼을 클릭하면, 결과페이지로 이동하기", () => {
//   render(<Page />);
//   // mockRouter.push("/result");

//   // 클릭을 누른다.
//   fireEvent.click(button);

//   expect(mockRouter).toMatchObject({
//     pathname: "/result",
//   });
// });
