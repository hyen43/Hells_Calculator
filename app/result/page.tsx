"use client";

import Wrapper from "components/Wrapper";
import TitleBox from "components/TitleBox";
import TextBox from "components/TextBox";
import Button from "components/Button";
import { useRouter } from "next/navigation";
import { useResultStore } from "../store/useStore";

export default function Page() {
  const { result, removeResultValue } = useResultStore();
  const router = useRouter();

  // 결과가 없으면 메인으로 보내기 (진입불가 예외처리);
  if (!result) router.push("/");

  const handleClick = () => {
    router.push("/");
    removeResultValue();
  };

  return (
    <Wrapper>
      <TitleBox />
      <TextBox />
      <Button handleClick={handleClick} title="다시 계산하기" />
    </Wrapper>
  );
}
