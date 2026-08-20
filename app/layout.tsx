import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://juingong.kr"),
  title: "주인공 | 우리 아이가 주인공인 그림책",
  description:
    "사진 한 장이면 됩니다. 아이 얼굴을 그대로 담은 12페이지 그림책을 만들어 드립니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "주인공",
    title: "우리 아이가 주인공인 단 하나의 그림책",
    description:
      "사진 한 장이면 됩니다. 아이 얼굴을 그대로 담은 12페이지 그림책을 만들어 드립니다.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#101a15" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="bg-paper text-ink antialiased dark:bg-forest-deep dark:text-paper">
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
