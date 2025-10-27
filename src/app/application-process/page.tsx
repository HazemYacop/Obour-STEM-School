"use client";

import { SiteNavbar } from "@/components/navigation/SiteNavbar";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { HeroSection } from "@/components/hero/HeroSection";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

export default function ApplicationProcessPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <SiteNavbar
        brand={{
          href: "/",
          imageSrc: "/school-logo.jpg",
          imageAlt: "Obour STEM School Logo",
          title: "Obour STEM",
          subtitle: "High School",
        }}
      />

      <HeroSection
        title="Application Process"
        description="The next admission cycle opens in July. Prepare your documents, fuel your curiosity, and join a community driven by innovation."
        backgroundImage="/home-hero-bg-1.jpg"
        autoAdvanceInterval={0}
        forceCenteredContent
        overlayVariant="vertical"
        contentSpacingClassName="pt-[150px] sm:pt-[200px] lg:pt-[250px] pb-20 sm:pb-[90px] lg:pb-[100px]"
      />

      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pb-16 sm:gap-12 sm:px-8 lg:gap-[60px] lg:px-10">
        <RevealOnScroll className="w-full">
          <section className="flex w-full flex-col items-center justify-center gap-4 rounded-[6px] border border-[#120D31]/10 bg-white/70 p-6 text-center shadow-[0_12px_38px_rgba(18,13,49,0.08)] sm:p-10">
            <h1 className="text-2xl font-semibold text-logo sm:text-3xl">Next Application Window</h1>
            <p className="max-w-[760px] text-base sm:text-lg">
              Obour STEM School will open the next application process in <strong>July</strong>. Detailed timelines, eligibility
              requirements, and submission steps will be published closer to the opening date. In the meantime, gather your
              academic records, craft your personal statement, and stay tuned for announcements on our official channels.
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll className="w-full">
          <section className="flex w-full flex-col gap-6 rounded-[6px] bg-linear-to-b from-[#120D31] to-[#120755]/90 p-8 text-white shadow-[0_16px_45px_rgba(18,13,49,0.12)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 lg:max-w-[65%]">
              <h2 className="text-xl font-semibold sm:text-2xl">Get Ready To Apply</h2>
              <p className="text-sm sm:text-base text-white/90">
                Subscribe to our updates or connect with admissions to receive reminders as July approaches. Our team is
                here to support you through every step of the application journey.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#F0A500] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#120D31] transition hover:bg-[#ffbb1b]"
            >
              Contact Admissions
            </a>
          </section>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
