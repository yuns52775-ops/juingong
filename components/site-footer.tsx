import Link from "next/link";

const LEGAL = [
  { href: "/terms", label: "이용약관" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/contact", label: "문의하기" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 px-5 py-14 sm:px-8 dark:border-paper/8">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[17px] font-bold tracking-tight">주인공</p>
          <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-ink-soft dark:text-moss">
            아이 사진 한 장으로 만드는 개인화 그림책
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <nav className="flex flex-wrap gap-6">
            {LEGAL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] text-ink-soft transition-colors duration-300 hover:text-ink dark:text-moss dark:hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* TODO: replace with the real business registration details before launch. */}
          <address className="text-[13px] leading-relaxed text-ink-soft not-italic dark:text-moss">
            상호 000 | 대표 000
            <br />
            사업자등록번호 000-00-00000
            <br />
            통신판매업신고 0000-지역-0000
            <br />
            주소 000
          </address>
        </div>
      </div>
    </footer>
  );
}
