import type { ReactNode } from "react";

/*
  Scroll entry reveal. Motivation: storytelling. Sections carry the product
  narrative in sequence, so each one settles in as the reader arrives.

  This renders visible by default. The bootstrap script in app/layout.tsx
  opts the page into the hidden start state and drives the reveal with an
  IntersectionObserver, so a blocked or failed JS bundle leaves the page
  readable instead of blank. Animation is transform and opacity only, and
  reduced-motion callers get the content with no transition at all.
*/
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
