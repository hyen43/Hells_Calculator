"use client";

import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color?.primaryPink || "#FFE0E0"};
`;

export default function LayoutWapper({ children }: LayoutProps) {
  return <Layout>{children}</Layout>;
}
