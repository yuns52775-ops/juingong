import { ClosingCta } from "@/components/closing-cta";
import { Consistency } from "@/components/consistency";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { SampleSpreads } from "@/components/sample-spreads";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Themes } from "@/components/themes";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <SampleSpreads />
        <HowItWorks />
        <Consistency />
        <Themes />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
