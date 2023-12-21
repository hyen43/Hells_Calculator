"use client";

import { usePathname } from "next/navigation";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function TitleBox() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const SUBTITLE =
    pathname === "/"
      ? "오늘 하루 먹은 음식을 작성해주세요!"
      : "총 칼로리가 계산되었습니다!";

  return (
    <TitleWrapper>
      <h1>🐷귀신이 고칼로리</h1>
      <h3>{SUBTITLE}</h3>
    </TitleWrapper>
  );
}
