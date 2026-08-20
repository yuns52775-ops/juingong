import Image from "next/image";
import { Reveal } from "./reveal";

const SPREADS = [
  {
    seed: "juingong-spread-rocket-launch",
    caption: "지호가 우주선에 오르는 첫 장면",
  },
  {
    seed: "juingong-spread-star-child-meeting",
    caption: "처음 만난 별의 아이와 인사하는 지호",
  },
  {
    seed: "juingong-spread-repairing-ship",
    caption: "고장 난 우주선을 고치는 지호",
  },
  {
    seed: "juingong-spread-lightpath-home",
    caption: "별빛 길을 따라 집으로 돌아가는 길",
  },
  {
    seed: "juingong-spread-sleeping-window",
    caption: "잠든 지호와 창밖의 우주",
  },
];

export function SampleSpreads() {
  return (
    <section id="samples" className="py-24 sm:py-32">
      <Reveal className="mx-auto max-w-[1220px] px-5 sm:px-8">
        <h2 className="max-w-[20ch] text-3xl leading-[1.25] font-bold tracking-tight sm:text-5xl">
          완성된 책은 이렇게 생겼습니다
        </h2>
        <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
          다섯 살 지호의 우주 여행 편입니다. 열두 장면 내내 같은 얼굴로
          이어집니다.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rail mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
          {SPREADS.map((spread) => (
            <figure
              key={spread.seed}
              className="w-[82vw] shrink-0 snap-center sm:w-[34rem]"
            >
              <div className="rounded-card border border-ink/8 bg-paper-raised/70 p-2 dark:border-paper/10 dark:bg-forest-raised/70">
                <div className="relative aspect-16/10 overflow-hidden rounded-inner">
                  <Image
                    src={`https://picsum.photos/seed/${spread.seed}/1400/875`}
                    alt={spread.caption}
                    fill
                    sizes="(max-width: 640px) 82vw, 34rem"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-4 pl-1 text-[14px] text-ink-soft dark:text-moss">
                {spread.caption}
              </figcaption>
            </figure>
          ))}

          {/* Trailing spacer so the last card can snap clear of the edge. */}
          <div aria-hidden className="w-1 shrink-0 sm:w-4" />
        </div>
      </Reveal>
    </section>
  );
}
