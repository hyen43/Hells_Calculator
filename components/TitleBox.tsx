"use client";

import { usePathname } from "next/navigation";

export default function TitleBox() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const SUBTITLE =
    pathname === "/"
      ? "오늘 하루 먹은 음식을 작성해주세요!"
      : "총 칼로리가 계산되었습니다!";

  return (
    <>
      <h1>🐷귀신이 고칼로리</h1>
      <h3>{SUBTITLE}</h3>
    </>
  );
}
