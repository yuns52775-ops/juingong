import { Check } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";

const DIGITAL = [
  "12페이지 그림책 PDF",
  "표지 미리보기 무료",
  "시안이 마음에 들지 않으면 1회 재제작",
  "결제 후 5분 내 전달",
];

const PRINTED = [
  "디지털 구성 전체 포함",
  "하드커버 양장 인쇄본",
  "무료 배송",
  "영업일 기준 5일에서 7일 소요",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-ink/8 py-24 sm:py-32 dark:border-paper/8"
    >
      <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-[16ch] text-3xl leading-[1.25] font-bold tracking-tight sm:text-5xl">
            책 한 권 값으로 만듭니다
          </h2>
          <p className="mt-5 max-w-[50ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
            표지를 확인하기 전까지는 결제하지 않습니다. 구독이나 추가 결제는
            없습니다.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            <div className="rounded-card border border-ink/10 bg-paper-raised/60 p-8 sm:p-10 lg:col-span-3 dark:border-paper/12 dark:bg-forest-raised/60">
              <h3 className="text-[15px] font-semibold text-ink-soft dark:text-moss">
                디지털
              </h3>
              <p className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
                49,000
                <span className="ml-1 text-2xl font-semibold tracking-tight">
                  원
                </span>
              </p>
              <ul className="mt-8 flex flex-col gap-3.5">
                {DIGITAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      weight="light"
                      className="mt-0.5 size-5 shrink-0 text-accent"
                    />
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card bg-forest p-8 sm:p-10 lg:col-span-2 dark:bg-forest-raised">
              <h3 className="text-[15px] font-semibold text-paper/60">
                실물 양장본
              </h3>
              <p className="mt-4 text-4xl font-bold tracking-tighter text-paper sm:text-5xl">
                89,000
                <span className="ml-1 text-2xl font-semibold tracking-tight">
                  원
                </span>
              </p>
              <ul className="mt-8 flex flex-col gap-3.5">
                {PRINTED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      weight="light"
                      className="mt-0.5 size-5 shrink-0 text-accent-lifted"
                    />
                    <span className="text-[15px] leading-relaxed text-paper/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <CtaButton />
            <p className="text-[14px] text-ink-soft dark:text-moss">
              표지를 먼저 보고 결정하세요
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
