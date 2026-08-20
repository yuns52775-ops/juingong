import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://juingong.kr"),
  title: "주인공 | 우리 아이가 주인공인 그림책",
  description:
    "사진 한 장이면 됩니다. 아이 얼굴을 그대로 담은 12페이지 그림책을 만들어 드립니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "주인공",
    title: "우리 아이가 주인공인 단 하나의 그림책",
    description:
      "사진 한 장이면 됩니다. 아이 얼굴을 그대로 담은 12페이지 그림책을 만들어 드립니다.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#101a15" },
  ],
};

/*
  Opts the page into the hidden start state only once the observer can
  actually run, then reveals each block on entry. Deliberately independent
  of the React bundle: if hydration never happens the reveals still work,
  and if scripting is off the page stays visible because .js-reveal is
  never added. Uses data-in rather than a class so React hydration has
  nothing to reconcile away.
*/
const REVEAL_BOOTSTRAP = `(function(){
if(!('IntersectionObserver' in window))return;
var d=document;d.documentElement.classList.add('js-reveal');
function start(){
var io=new IntersectionObserver(function(es){
for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-in','');io.unobserve(es[i].target);}}
},{threshold:0,rootMargin:'0px 0px -12% 0px'});
var els=d.querySelectorAll('[data-reveal]');
for(var i=0;i<els.length;i++)io.observe(els[i]);
}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',start);else start();
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOTSTRAP }} />
      </head>
      <body className="bg-paper text-ink antialiased dark:bg-forest-deep dark:text-paper">
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
