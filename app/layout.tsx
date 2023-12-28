import type { Metadata } from "next";
import StyledComponentsRegistry from "lib/registry";
import LayoutWrapper from "components/LayoutWrapper";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "🐷귀신이 고칼로리",
  description: "하루동안 먹은 음식, 총 칼로리 계산기",
  keywords: ["칼로리 계산기", "음식 계산기", "칼로리 구하기"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "Next.js",
  applicationName: "귀신이 고칼로리",
  referrer: "origin-when-cross-origin",
  creator: "Lina",
  publisher: "Lina",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Toaster />
          <LayoutWrapper>{children}</LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
