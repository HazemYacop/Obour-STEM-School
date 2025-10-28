"use client";

import Image from "next/image";

import { SiteNavbar } from "@/components/navigation/SiteNavbar";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { HeroSection } from "@/components/hero/HeroSection";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

type UniversityRecord = {
  name: string;
  fileName: string;
};

type RegionUniversities = {
  region: string;
  universities: UniversityRecord[];
};

const getImageSrc = (fileName: string) => `/Alumni/${encodeURI(fileName)}`;

const alumniUniversities: RegionUniversities[] = [
  {
    region: "United States",
    universities: [
      { name: "Stanford University", fileName: "stanford-university.jpg" },
      { name: "University of Pennsylvania", fileName: "university-of-pennsylvania.png" },
      { name: "University of Michigan", fileName: "university-of-michigan.png" },
      { name: "Grinnell College", fileName: "grinnell-college.jpg" },
      { name: "New York University", fileName: "new-york-university.png" },
      { name: "Minerva University", fileName: "minerva-university.jpg" },
      { name: "University of Arizona", fileName: "university-of-arizona.png" },
      { name: "Arizona State University", fileName: "arizona-state-university.png" },
      { name: "University of South Florida", fileName: "University of South Florida.png" },
      { name: "University at Buffalo", fileName: "University at Buffalo.jpg" },
      { name: "University of Nebraska-Lincoln", fileName: "University of Nebraska-Lincoln.png" },
      { name: "Bucknell University", fileName: "bucknell-university.svg" },
      { name: "Franklin & Marshall College", fileName: "Franklin & Marshall College.jpg" },
      { name: "Rochester Institute Of Technology", fileName: "rit.jpg" },
      { name: "Drexel University", fileName: "drexel-university.webp" },
      { name: "Seton Hall University", fileName: "Seton Hall University.png" },
      { name: "Howard University", fileName: "Howard University.png" },
      { name: "Ohio University", fileName: "ohio-university.png" },
      { name: "Florida Institute of Technology", fileName: "florida-institute-of-technology.jpg" },
      { name: "Colgate University", fileName: "colgate-university.png" },
      { name: "Berea College", fileName: "berea-college.png" },
      { name: "Macalester College", fileName: "macalester-college.png" },
      { name: "Vassar College", fileName: "vassar-college.png" }, 
      { name: "University At Baffalo", fileName: "university-at-baffalo.png" },
      { name: "Miami State University", fileName: "Miami State University.jpg" },
      { name: "La Roche University", fileName: "La Roche University.png" },
      { name: "Long Island University", fileName: "long island university.png" },
    ],
  },
  {
    region: "United Kingdom",
    universities: [
      { name: "University of Manchester", fileName: "university-of-manchester.png" },
      { name: "Southampton University", fileName: "Southampton University.jpg" },
      { name: "Middlesex University", fileName: "Middlesex University.png" },
      { name: "Aberystwyth University", fileName: "Aberystwyth University.svg" },
    ],
  },
  {
    region: "United Arab Emirates",
    universities: [{ name: "Mohamed Bin Zayed Institute Of AI Technology", fileName: "mohamed-bin-zayed.jpg" }],
  },
  {
    region: "Turkey",
    universities: [
      { name: "Ankara University", fileName: "Ankara University.png" },
      { name: "Ege University", fileName: "Ege University.png" },
      { name: "Dokuz Eylul University", fileName: "Dokuz Eylul University.png" },
      { name: "Izmir University of Economics", fileName: "Izmir University of Economics.jpg" },
      { name: "Ataturk University", fileName: "Ataturk University.jpg" },
      { name: "Fenerbahce University", fileName: "Fenerbahce University.png" },
      { name: "Izmir Katip Celebi University", fileName: "Izmir Katip Celebi University.png" },
      { name: "Eskisehir Osmangazi University", fileName: "Eskisehir Osmangazi University.png" },
      { name: "Firat University", fileName: "Firat University.png" },
      { name: "KTO Karatay University", fileName: "KTO Karatay University.jpg" },
      { name: "Sivas Cumhuriyet University", fileName: "Sivas Cumhuriyet University.png" },
    ],
  },
  {
    region: "Hungary",
    universities: [
      { name: "Budapest University", fileName: "Budapest University.jpg" },
      { name: "University of Debrecen", fileName: "University of Debrecen.jpg" },
    ],
  },
  {
    region: "Russia",
    universities: [{ name: "Innopolis University", fileName: "Innopolis University.jpg" }],
  },
  {
    region: "Indonesia",
    universities: [
      { name: "Universitas Islam Negeri Sunan Ampel (UINSA)", fileName: "UINSA (Universitas Islam Negeri Sunan Ampel).jpg" },
    ],
  },
];

export default function AlumniPage() {
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
        title="Alumni Destinations"
        description="Our graduates join leading universities around the world, carrying forward the spirit of innovation and leadership they honed at Obour STEM."
        backgroundImage="/home-hero-bg-1.jpg"
        autoAdvanceInterval={0}
        forceCenteredContent
        overlayVariant="vertical"
        contentSpacingClassName="pt-[150px] sm:pt-[200px] lg:pt-[250px] pb-20 sm:pb-[90px] lg:pb-[100px]"
      />

      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 pb-16 sm:gap-12 sm:px-8 lg:gap-[60px] lg:px-10">
        <RevealOnScroll className="w-full">
          <section className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <h1>Global University Acceptances</h1>
            <p className="w-full max-w-[820px] px-3 text-center text-base sm:px-0 sm:text-lg">
              This curated gallery celebrates where our alumni pursue their next chapters. Hover over each crest to see
              the institutions that welcome our graduates.
            </p>
          </section>
        </RevealOnScroll>

        {alumniUniversities.map((group) => (
          <RevealOnScroll key={group.region} className="w-full">
            <section className="flex w-full flex-col gap-6 rounded-[6px] border border-[#120D31]/10 bg-white/70 p-6 shadow-[0_12px_38px_rgba(18,13,49,0.08)]">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-logo">{group.region}</h2>
                <div className="h-[2px] w-[60px] bg-[#F0A500] sm:w-[90px]" aria-hidden />
              </header>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {group.universities.map((university) => (
                  <article
                    key={`${group.region}-${university.name}`}
                    className="group relative flex h-[120px] items-center justify-center overflow-hidden rounded-[6px] border border-[#120D31]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0A500]/80 hover:shadow-[0_16px_45px_rgba(18,13,49,0.12)]"
                  >
                    <span
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-transparent via-[#F0A500]/8 to-[#120D31]/12 opacity-0 transition duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <Image
                      src={getImageSrc(university.fileName)}
                      alt={`${university.name} Logo`}
                      width={100}
                      height={100}
                      className="relative z-[2] h-auto w-[80px] max-w-[90%] object-contain transition duration-300 group-hover:scale-105 group-hover:opacity-20"
                    />
                    <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center bg-[#120D31]/90 opacity-0 transition duration-300 group-hover:opacity-100">
                      <span className="px-4 text-center text-sm font-semibold text-white">{university.name}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
