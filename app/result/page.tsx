"use client";

import { useResultStore } from "../store/useStore";
import Wrapper from "components/Wrapper";
import TitleBox from "components/TitleBox";
import TextBox from "components/TextBox";

export default function Page() {
  return (
    <Wrapper>
      <TitleBox />
      <TextBox />
    </Wrapper>
  );
}
