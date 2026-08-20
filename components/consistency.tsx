import Image from "next/image";
import { Reveal } from "./reveal";

export function Consistency() {
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <Reveal className="mx-auto max-w-[1220px] px-5 text-center sm:px-8">
        <h2 className="mx-auto max-w-[16ch] text-3xl leading-[1.25] font-bold tracking-tight sm:text-5xl">
          열두 장면 내내, 같은 아이
        </h2>
        <p className="mx-auto mt-6 max-w-[54ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
          장면마다 얼굴이 달라지면 우리 아이 책이 아닙니다. 사진에서 캐릭터를
          먼저 확정한 다음, 열두 장면 전부를 그 얼굴로 그립니다.
        </p>
      </Reveal>

      <Reveal delay={0.12} className="mt-14">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="rounded-card border border-ink/8 bg-paper-raised/70 p-2 dark:border-paper/10 dark:bg-forest-raised/70">
            <div className="relative aspect-3/2 overflow-hidden rounded-inner sm:aspect-21/9">
              <Image
                src="https://picsum.photos/seed/juingong-character-sheet-strip/1800/772"
                alt="한 아이의 캐릭터가 여러 장면에서 동일하게 유지되는 모습"
                fill
                sizes="(max-width: 640px) 100vw, 1400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
