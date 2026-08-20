import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

export function ClosingCta() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-[1220px] overflow-hidden rounded-card bg-forest px-8 py-20 sm:px-16 sm:py-28 dark:bg-forest-raised">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 size-[32rem] rounded-full bg-accent/20 blur-[110px]"
          />

          <div className="relative max-w-[24ch]">
            <h2 className="text-3xl leading-[1.22] font-bold tracking-tight text-paper sm:text-5xl">
              오늘 밤 읽어줄 책을 지금 만들어 보세요
            </h2>
            <p className="mt-6 max-w-[44ch] text-[16px] leading-relaxed text-paper/70">
              사진을 올리면 표지가 먼저 나옵니다. 여기까지는 무료입니다.
            </p>
            <div className="mt-10">
              <CtaButton />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
