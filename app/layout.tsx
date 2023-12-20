"use client";

import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme, ThemePanel } from "@radix-ui/themes"; // theme은 쓰는 게 좋을 지 생각해봐야함
import "@radix-ui/themes/styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <StyledComponentsRegistry>
            {/* <ThemeProvider theme={Theme}> */}

            <GlobalStyles />
            {children}
            {/* <ThemePanel /> */}

            {/* </ThemeProvider> */}
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  );
}
