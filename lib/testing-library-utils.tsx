/* eslint-disable react/prop-types */
import React from "react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
// import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { theme } from "../styles/theme";

function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const renderWithContext = (ui) => {
  render(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";

export { renderWithContext as render };
