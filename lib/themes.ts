export type Theme = {
  id: string;
  name: string;
  summary: string;
  seed: string;
};

/* Shared by the landing bento and the start form so the two never drift. */
export const THEMES: Theme[] = [
  {
    id: "space",
    name: "우주 여행",
    summary: "고장 난 우주선을 고치고 별빛 길을 따라 집으로 돌아오는 이야기",
    seed: "juingong-theme-space-voyage",
  },
  {
    id: "dinosaur",
    name: "공룡 나라",
    summary: "작은 초식공룡을 지키려고 화산 너머까지 다녀오는 이야기",
    seed: "juingong-theme-dinosaur-land",
  },
  {
    id: "sea",
    name: "바닷속 왕국",
    summary: "숨을 참지 않아도 되는 바다에서 길 잃은 거북을 찾습니다",
    seed: "juingong-theme-undersea-kingdom",
  },
  {
    id: "magic",
    name: "마법 학교",
    summary: "빗자루가 말을 듣지 않아도 끝내 하늘을 나는 이야기",
    seed: "juingong-theme-magic-school",
  },
  {
    id: "forest",
    name: "숲속 친구들",
    summary: "겁 많던 아이가 다친 아기 여우를 데리고 숲을 건너는 이야기",
    seed: "juingong-theme-forest-friends",
  },
];
