"use client";

import { useResultStore } from "../store/useStore";
import Wrapper from "components/Wrapper";
import TitleBox from "components/TitleBox";
import TextBox from "components/TextBox";

export default function Page() {
  const { result } = useResultStore();
  console.log("result", result);
  return (
    <Wrapper>
      <TitleBox />
      <TextBox />
    </Wrapper>
  );
}
