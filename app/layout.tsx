"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
            {/* <ThemePanel /> */}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
