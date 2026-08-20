import Image from "next/image";
import { CtaButton, GhostButton } from "./cta-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8 lg:pt-24">
      {/* Soft ambient wash. Keeps the page from reading as a flat white sheet. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[46rem] rounded-full bg-accent/8 blur-[120px] dark:bg-accent/12"
      />

      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <h1 className="text-[2.6rem] leading-[1.16] font-bold tracking-tighter sm:text-6xl lg:text-[4.1rem]">
            우리 아이가 주인공인
            <br />
            단 하나의 그림책
          </h1>

          <p className="mt-7 max-w-[30rem] text-[17px] leading-relaxed text-ink-soft dark:text-moss">
            사진 한 장이면 됩니다. 아이 얼굴을 그대로 담은 12페이지 그림책을
            5분 만에 만들어 드립니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CtaButton />
            <GhostButton href="#samples" label="샘플 보기" />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="relative mx-auto max-w-[26rem] lg:max-w-none">
            {/* Back plate. Suggests a second spread sitting behind the cover. */}
            <div
              aria-hidden
              className="absolute -top-6 -right-4 hidden aspect-4/5 w-[78%] rounded-card bg-forest/10 lg:block dark:bg-paper/8"
              style={{ transform: "rotate(6deg)" }}
            />

            {/* Double bezel: outer tray, inner plate. */}
            <div className="relative rounded-card border border-ink/8 bg-paper-raised/70 p-2 shadow-[0_40px_90px_-50px_rgba(20,35,28,0.55)] backdrop-blur-xl lg:rotate-[-2deg] dark:border-paper/10 dark:bg-forest-raised/70">
              <div className="relative aspect-4/5 overflow-hidden rounded-inner shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]">
                <Image
                  src="https://picsum.photos/seed/juingong-cover-child-storybook/900/1125"
                  alt="아이가 주인공으로 등장하는 그림책 표지"
                  fill
                  priority
                  sizes="(max-width: 1024px) 26rem, 30rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
