import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { StartForm } from "@/components/start-form";

export const metadata: Metadata = {
  title: "표지 만들기 | 주인공",
  description: "아이 사진과 이름을 입력하면 표지를 먼저 만들어 보여드립니다.",
  // Keep this page out of search until the generator is wired up.
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return (
    <>
      <header className="px-5 pt-8 sm:px-8">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between">
          <Link href="/" className="text-[17px] font-bold tracking-tight">
            주인공
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors duration-300 hover:text-ink dark:text-moss dark:hover:text-paper"
          >
            <ArrowLeft weight="light" className="size-4" />
            돌아가기
          </Link>
        </div>
      </header>

      <main className="pt-14 sm:pt-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <h1 className="max-w-[16ch] text-3xl leading-[1.2] font-bold tracking-tighter sm:text-5xl">
            아이 사진을 올려주세요
          </h1>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
            입력하신 내용으로 표지를 먼저 만들어 보여드립니다. 결제는 표지를
            보신 다음입니다.
          </p>

          <div className="mt-8 mb-12 rounded-card border border-accent/25 bg-accent/6 p-5 sm:p-6">
            <p className="text-[15px] font-semibold tracking-tight">
              표지 생성 기능은 준비 중입니다
            </p>
            <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-ink-soft dark:text-moss">
              지금은 화면 흐름만 확인하실 수 있고, 실제 그림책은 아직 만들어지지
              않습니다. 고르신 사진은 브라우저 안에만 있으며 서버로 전송되지
              않습니다.
            </p>
          </div>
        </div>

        <StartForm />
      </main>
    </>
  );
}
