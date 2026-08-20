import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/*
  Single primary CTA label for the whole page: "무료로 표지 만들기".
  Nav, hero and closing block all use it, so there is one signup intent.
  The trailing arrow sits inside its own circular well rather than floating
  next to the label.
*/
export const PRIMARY_CTA_LABEL = "무료로 표지 만들기";
export const PRIMARY_CTA_HREF = "/start";

export function CtaButton({
  href = PRIMARY_CTA_HREF,
  label = PRIMARY_CTA_LABEL,
  size = "lg",
}: {
  href?: string;
  label?: string;
  size?: "sm" | "lg";
}) {
  const scale =
    size === "lg"
      ? "gap-3 py-2.5 pl-7 pr-2.5 text-[15px]"
      : "gap-2 py-1.5 pl-5 pr-1.5 text-[13px]";
  const well = size === "lg" ? "size-10" : "size-8";

  return (
    <Link
      href={href}
      className={`group inline-flex shrink-0 items-center rounded-full bg-accent font-semibold whitespace-nowrap text-white shadow-[0_10px_30px_-12px_rgba(178,58,87,0.7)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_40px_-14px_rgba(178,58,87,0.8)] active:scale-[0.98] ${scale}`}
    >
      {label}
      <span
        className={`flex ${well} items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105`}
      >
        <ArrowUpRight
          weight="light"
          className={size === "lg" ? "size-5" : "size-4"}
        />
      </span>
    </Link>
  );
}

export function GhostButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center rounded-full border border-ink/15 bg-paper-raised/60 px-6 py-3 text-[15px] font-medium whitespace-nowrap text-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-ink/30 hover:bg-paper-raised active:scale-[0.98] dark:border-paper/15 dark:bg-forest-raised/60 dark:text-paper dark:hover:border-paper/30 dark:hover:bg-forest-raised"
    >
      {label}
    </Link>
  );
}
