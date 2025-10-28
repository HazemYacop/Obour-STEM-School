"use client";

import { SiteNavbar } from "@/components/navigation/SiteNavbar";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { HeroSection } from "@/components/hero/HeroSection";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

import Image from "next/image";

const globalPrograms = [
  { title: "Yale Young Global Scholars (YYGS)", imageSrc: "/programs/yygs.jpg" },
  { title: "Yale Young Africa Scholars (YYAS)", imageSrc: "/programs/yyas.jpg" },
  { title: "The Pioneer Research Program", imageSrc: "/programs/pioneer.jpg" },
  { title: "The 2022 AFS Global STEM Academy", imageSrc: "/programs/afs.png" },
  { title: "Leaders of Tomorrow Exchange Program", imageSrc: "/programs/lot.png" },
  { title: "Competitive College Club (CCC)", imageSrc: "/programs/ccc.jpg" },
  { title: "ALA 3 Weeks Summer Program", imageSrc: "/programs/ala.png" },
  { title: "IYRC Summer Program (Medicine & Research)", imageSrc: "/programs/iyrc.jpg" },
  { title: "QubitxQubit", imageSrc: "/programs/qubit.png" },
  { title: "New York Junior Academy", imageSrc: "/programs/nyja.png" },
  { title: "Moonshot Pirates", imageSrc: "/programs/moonshot.png" },
  { title: "Girls Who Code", imageSrc: "/programs/gwc.png" },
  { title: "1000 Girls 1000 Futures", imageSrc: "/programs/1000-girls.webp" },
  { title: "Horizon Academic", imageSrc: "/programs/horizon.png" },
  { title: "Nation Builders", imageSrc: "/programs/nation.png" },
  { title: "Youth Science Journal (YSJ)", imageSrc: "/programs/ysj.jpg" },
  { title: "IYNA Summer Course 2023", imageSrc: "/programs/iyna.png" },
  { title: "YCM Dilact Group", imageSrc: "/programs/ycm.jpg" },
  { title: "Kode With Klossy", imageSrc: "/programs/kwk.jpg" },
  { title: "Explore Fellowship", imageSrc: "/programs/explore.webp" },
  { title: "X-Culture", imageSrc: "/programs/x-culture.png" },
  { title: "The African Middle Eastern Leadership Project", imageSrc: "/programs/amel.webp" },
  { title: "Star Girls Africa", imageSrc: "/programs/sga.jpg" },
  { title: "MedSTEMpowered", imageSrc: "/programs/msp.jpg" },
];

export default function ProgramsPage() {
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
        title="Programs"
        description={
          "Our students have been selected to participate in highly competitive global programs, representing Egypt in prestigious international research, innovation, and leadership initiatives."
        }
        backgroundImage="/programs-hero-bg.jpg"
        autoAdvanceInterval={0}
        forceCenteredContent
        overlayVariant="vertical"
        contentSpacingClassName="pt-[150px] sm:pt-[200px] lg:pt-[250px] pb-20 sm:pb-[90px] lg:pb-[100px]"
      />

      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-14 sm:gap-12 sm:px-8 lg:gap-[60px] lg:px-10">
        <RevealOnScroll className="w-full">
          <section className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <h1>Global Programs, Global Minds</h1>
            <p className="w-full max-w-[850px] px-3 text-center text-base sm:px-0 sm:text-lg">
              Obour STEM alumni don't just study - they explore the world's leading academic and innovation programs, earning places in top global initiatives that shape future scientists, leaders, and changemakers.
            </p>
          </section>
        </RevealOnScroll>
        <RevealOnScroll className="w-full">
          <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {globalPrograms.map((program) => (
              <article
                key={program.title}
                className="group relative flex h-full items-center gap-[12px] overflow-hidden rounded-[5px] border border-logo/20 bg-white px-[20px] py-[12px] transition-all duration-300 hover:-translate-y-1 hover:border-[#F0A500] hover:shadow-[0_16px_45px_rgba(18,13,49,0.12)]"
              >
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#F0A500]/10 to-[#120D31]/10 opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative z-[1] flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-[12px] transition duration-300 group-hover:scale-105">
                  <Image
                    src={program.imageSrc}
                    alt={`${program.title} Logo`}
                    width={70}
                    height={70}
                    className="h-[70px] w-[70px] object-contain"
                  />
                </div>
                <p className="relative z-[1] text-[18px] leading-snug">{program.title}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
