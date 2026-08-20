import {
  BookOpen,
  Sparkle,
  UploadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const STEPS = [
  {
    Icon: UploadSimple,
    title: "아이 사진을 올립니다",
    body: "정면이 잘 나온 사진 한 장이면 충분합니다. 여러 장을 올리면 더 정확해집니다.",
  },
  {
    Icon: Sparkle,
    title: "캐릭터를 확인합니다",
    body: "표지 한 장을 무료로 만들어 먼저 보여드립니다. 마음에 드실 때만 결제하세요.",
  },
  {
    Icon: BookOpen,
    title: "그림책이 도착합니다",
    body: "열두 장면이 완성되면 카카오톡으로 알려드립니다. 보통 5분 안에 끝납니다.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="border-t border-ink/8 py-24 sm:py-32 dark:border-paper/8"
    >
      <div className="mx-auto grid max-w-[1220px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl leading-[1.25] font-bold tracking-tight sm:text-5xl">
              결제는
              <br />
              마지막에 합니다
            </h2>
            <p className="mt-5 max-w-[38ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
              닮았는지 먼저 보고 결정하시면 됩니다. 표지를 만들어 드리는
              단계까지는 비용이 들지 않습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7 lg:gap-16">
          {STEPS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-paper-raised/70 dark:border-paper/12 dark:bg-forest-raised/70">
                  <Icon weight="light" className="size-6 text-accent" />
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
