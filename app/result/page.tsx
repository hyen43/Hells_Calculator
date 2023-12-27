"use client";

import Wrapper from "components/Wrapper";
import TitleBox from "components/TitleBox";
import TextBox from "components/TextBox";
import { useResultStore } from "../store/useStore";

export default function Page() {
  const { result } = useResultStore();
  return (
    <Wrapper>
      <TitleBox />
      <TextBox />
    </Wrapper>
  );
}
