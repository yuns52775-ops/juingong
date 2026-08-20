import Image from "next/image";
import { Reveal } from "./reveal";

export function Themes() {
  return (
    <section
      id="themes"
      className="border-t border-ink/8 py-24 sm:py-32 dark:border-paper/8"
    >
      <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl leading-[1.25] font-bold tracking-tight sm:text-5xl">
            다섯 가지 이야기 중에서 고르세요
          </h2>
          <p className="mt-5 max-w-[50ch] text-[16px] leading-relaxed text-ink-soft dark:text-moss">
            아이 이름과 나이에 맞춰 문장이 새로 쓰입니다. 같은 테마여도 책은
            매번 달라집니다.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {/* 1. Lead tile, tall. */}
            <article className="group relative col-span-1 overflow-hidden rounded-card md:col-span-4 md:row-span-2">
              <div className="relative aspect-4/3 md:h-full md:min-h-[26rem]">
                <Image
                  src="https://picsum.photos/seed/juingong-theme-space-voyage/1200/900"
                  alt="우주 여행 테마 삽화"
                  fill
                  sizes="(max-width: 768px) 100vw, 620px"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-paper">
                  우주 여행
                </h3>
                <p className="mt-2 max-w-[34ch] text-[15px] leading-relaxed text-paper/75">
                  고장 난 우주선을 고치고 별빛 길을 따라 집으로 돌아오는 이야기
                </p>
              </div>
            </article>

            {/* 2. Image tile. */}
            <article className="group relative col-span-1 overflow-hidden rounded-card md:col-span-2">
              <div className="relative aspect-4/3 md:aspect-square">
                <Image
                  src="https://picsum.photos/seed/juingong-theme-dinosaur-land/800/800"
                  alt="공룡 나라 테마 삽화"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/85 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-paper">
                  공룡 나라
                </h3>
              </div>
            </article>

            {/* 3. Tinted tile, no photo. Breaks the grid rhythm. */}
            <article className="col-span-1 flex flex-col justify-end rounded-card bg-forest p-6 md:col-span-2 md:aspect-square dark:bg-forest-raised">
              <h3 className="text-xl font-semibold tracking-tight text-paper">
                바닷속 왕국
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-paper/65">
                숨을 참지 않아도 되는 바다에서 길 잃은 거북을 찾습니다
              </p>
            </article>

            {/* 4. Image tile, wide. */}
            <article className="group relative col-span-1 overflow-hidden rounded-card md:col-span-3">
              <div className="relative aspect-4/3 md:aspect-16/10">
                <Image
                  src="https://picsum.photos/seed/juingong-theme-magic-school/900/560"
                  alt="마법 학교 테마 삽화"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/85 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-paper">
                  마법 학교
                </h3>
              </div>
            </article>

            {/* 5. Accent-tinted tile. */}
            <article className="col-span-1 flex flex-col justify-end rounded-card bg-accent/10 p-6 md:col-span-3 md:aspect-16/10 dark:bg-accent/15">
              <h3 className="text-xl font-semibold tracking-tight">
                숲속 친구들
              </h3>
              <p className="mt-2 max-w-[32ch] text-[14px] leading-relaxed text-ink-soft dark:text-moss">
                겁 많던 아이가 다친 아기 여우를 데리고 숲을 건너는 이야기
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
