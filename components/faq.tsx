import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    q: "사진은 몇 장 필요한가요?",
    a: "정면이 잘 나온 사진 한 장이면 됩니다. 두세 장을 올리시면 옆모습까지 반영되어 더 정확해집니다.",
  },
  {
    q: "아이와 닮지 않으면 어떻게 하나요?",
    a: "결제 전에 표지로 먼저 확인하실 수 있습니다. 결제 후에도 캐릭터가 마음에 들지 않으면 1회 무료로 다시 만들어 드립니다.",
  },
  {
    q: "올린 사진은 어떻게 관리되나요?",
    a: "책을 만드는 데에만 사용하고, 완성 후 30일이 지나면 자동으로 삭제합니다. 다른 목적이나 모델 학습에 사용하지 않습니다.",
  },
  {
    q: "만드는 데 얼마나 걸리나요?",
    a: "디지털은 결제 후 보통 5분 안에 완성됩니다. 실물 양장본은 인쇄와 배송까지 영업일 기준 5일에서 7일 걸립니다.",
  },
  {
    q: "아이 이름과 나이는 반영되나요?",
    a: "이름, 나이, 성별을 입력하시면 열두 장면의 문장에 그대로 들어갑니다. 같은 테마여도 아이마다 문장이 달라집니다.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-ink/8 py-24 sm:py-32 dark:border-paper/8">
      <div className="mx-auto max-w-[46rem] px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl leading-[1.25] font-bold tracking-tight sm:text-5xl">
            자주 묻는 질문
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col">
            {ITEMS.map((item) => (
              <details
                key={item.q}
                className="group border-b border-ink/10 dark:border-paper/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <CaretDown
                    weight="light"
                    className="size-5 shrink-0 text-ink-soft transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-180 dark:text-moss"
                  />
                </summary>
                <p className="pb-7 text-[16px] leading-relaxed text-ink-soft dark:text-moss">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
