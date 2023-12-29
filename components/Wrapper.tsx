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
  width: 80%;
  /* min-height: 80%; */
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.color?.white || "white"};
  border: ${({ theme }) => `2px solid ${theme.color?.lightGray ?? "#E9E9E9"}`};
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

// 스타일링을 위한 컴포넌트
export default function Wrapper({ children }: WrapperProps) {
  return <WrapperBox>{children}</WrapperBox>;
}
