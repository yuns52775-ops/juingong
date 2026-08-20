# 주인공

아이 사진 한 장으로 그 아이가 주인공인 12페이지 그림책을 만들어 주는 서비스.

- 배포: https://juingong.vercel.app
- `main` 브랜치에 푸시하면 Vercel이 자동 배포한다.

## 실행

```bash
npm install
npm run dev
```

## 빌드 확인

작업 폴더가 exFAT 외장 드라이브라면 `npm run build` 가 실패한다. exFAT은 심볼릭 링크를 지원하지 않아 webpack과 turbopack 모두 `readlink` 에서 멈춘다. 대신 아래를 쓴다.

```bash
npm run build:check
```

소스를 NTFS 임시 폴더로 복사해 거기서 빌드한다. 푸시 전에 돌리면 배포가 깨지는 일이 없다. 프로젝트를 NTFS 드라이브로 옮기면 `npm run build` 를 그대로 쓸 수 있고 이 스크립트는 필요 없어진다.

## 구조

| 경로 | 역할 |
| --- | --- |
| `app/page.tsx` | 랜딩 8개 섹션 |
| `app/start/page.tsx` | 무료 표지 신청 화면 |
| `components/` | 섹션별 컴포넌트 |
| `lib/themes.ts` | 이야기 테마 5종. 랜딩과 신청 화면이 공유한다 |
| `scripts/build-check.mjs` | exFAT 우회 빌드 |

디자인은 `design-taste-frontend` 와 `high-end-visual-design` 스킬 규칙을 따른다. 본문 폰트는 Pretendard를 self-host 한다. 한국어 사이트에서 Noto Sans KR은 영문판 Inter와 같은 위치의 기본값이라 쓰지 않는다.

스크롤 등장 효과는 CSS로 처리하고 기본값이 "보임"이다. `app/layout.tsx` 의 부트스트랩 스크립트가 IntersectionObserver를 실제로 돌릴 수 있을 때만 숨김 상태를 켠다. JS가 막히거나 번들이 실패해도 본문이 사라지지 않는다.

## 남은 작업

1. **삽화 생성 파이프라인.** 랜딩 이미지 10장이 전부 Lorem Picsum 자리표시자다. `/start` 의 표지 생성도 목업이라 준비 중임을 화면에 명시하고 noindex 처리해 두었다. 파이프라인이 붙으면 두 곳이 같이 해결된다.
2. **푸터 사업자 정보**가 `000` 자리표시자다. 결제를 붙이기 전에 채워야 한다.
3. **FAQ의 사진 보관 문구.** "완성 후 30일 자동 삭제, 모델 학습 미사용"이라고 적혀 있다. 실제 정책과 다르면 반드시 고쳐야 한다.
4. **결제 연동**이 아직 없다.
