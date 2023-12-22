import React from "react";
import styled from "styled-components";

type WrapperProps = {
  children: React.ReactNode;
};

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 50%; // 모바일일 때 수정
  min-height: 80%;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `2px solid ${theme.color.lightGray}`};
  border-radius: 10px;
`;

// 스타일링을 위한 컴포넌트
export default function Wrapper({ children }: WrapperProps) {
  return <WrapperBox>{children}</WrapperBox>;
}
