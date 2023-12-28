"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import LayoutWrapper from "components/LayoutWrapper";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Toaster />
            <LayoutWrapper>{children}</LayoutWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
