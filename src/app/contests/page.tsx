"use client";

import { SiteNavbar } from "@/components/navigation/SiteNavbar";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { HeroSection } from "@/components/hero/HeroSection";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

type ContestEntry = {
  year?: string;
  summary: string;
};

type ContestRecord = {
  name: string;
  entries: ContestEntry[];
};

const contestShowcase: ContestRecord[] = [
  {
    name: "Regeneron International Science and Engineering Fair (ISEF)",
    entries: [
      { year: "2021", summary: "1 International Finalist" },
      { year: "2022", summary: "2 International Finalists" },
      { year: "2023", summary: "6 International Finalists; 2nd place Grand Award in Embedded Systems" },
      {
        year: "2024",
        summary:
          "5 International Finalists; 2nd & 3rd place Grand Awards in Behavioral Science & Systems Software; 2 Special Awards",
      },
      {
        year: "2025",
        summary:
          "6 International Finalists; 4th place Grand Award in Systems Software; 1 Special Award",
      },
    ],
  },
  {
    name: "Nile University Undergraduate Research Forum (UGRF)",
    entries: [
      { year: "2020", summary: "1 Finalist; 2nd place winner" },
      { year: "2021", summary: "3 Finalists; 1st and 3rd place winners" },
      { year: "2023", summary: "4 Finalists; 1st place in Engineering Track, 2nd place in School Track, 3rd Best Electronic Device" },
      { year: "2024", summary: "12 Finalists; 2nd place in Sustainable Technology Track" },
      { year: "2025", summary: "3 Finalists" },
    ],
  },
  {
    name: "EU Contest for Young Scientists (EUCYS)",
    entries: [
      { year: "2022", summary: "1 Finalist; Bright Young Minds Award" },
      { year: "2024", summary: "4 Finalists" },
      { year: "2025", summary: "3 Finalists" },

    ],
  },
  {
    name: "Young Water Inventors Competition",
    entries: [
      { year: "2021", summary: "2nd, 3rd, and 4th place winners" },
      { year: "2022", summary: "2nd place winner" },
      { year: "2024", summary: "5th place winner" },
    ],
  },
  {
    name: "Blastoff Science & Engineering Fair",
    entries: [
      { year: "2022", summary: "1st place winner" },
      { year: "2024", summary: "12 Finalists; 1st and 3rd place winners; Best of Category" },
      { year: "2025", summary: "20 Finalists; 1st and 3rd place winners; 2 Best of Categories" },
    ],
  },
  {
    name: "Egyptian Science and Engineering Fair (ESEF)",
    entries: [
      { year: "2021", summary: "17 Finalists" },
      { year: "2022", summary: "13 Finalists; 2 projects won 1st place, 2 projects won 2nd place" },
      { year: "2023", summary: "19 Finalists; 2 projects won 1st place, 2 projects won 2nd place" },
      { year: "2024", summary: "20 Finalists; 3 projects won 1st place, 2 projects won 2nd place" },
    ],
  },
  {
    name: "Zayed Sustainability Prize",
    entries: [
      {
        year: "2022",
        summary:
          "First Egyptian school to reach the finals in the competition's history; ranked among the top 3 schools (Global High Schools, MENA)",
      },
      { year: "2023", summary: "Reached the finals for the second consecutive year" },
    ],
  },
  {
    name: "Egypt International Science and Technology Fair (EISTF)",
    entries: [
      { year: "2023", summary: "2 Finalists; project won 3rd place" },
      { year: "2024", summary: "30 Finalists; 3 projects won 1st place, 3 won 2nd place, and 1 won 3rd place" },
    ],
  },
  {
    name: "International Science and Engineering Innovations Competition (ISEIC)",
    entries: [
      { year: "2021", summary: "1 Finalist; 5th place winner" },
      { year: "2023", summary: "1 Finalist" },
      { year: "2024", summary: "4 Finalists" },
    ],
  },
  {
    name: "Egypt IoT and AI Challenge",
    entries: [{ year: "2021", summary: "1st place" }],
  },
  {
    name: "IUPAC Periodic Table Challenge",
    entries: [{ year: "2020", summary: "Ranked among the top 7 out of 4,000 schools" }],
  },
  {
    name: "International Biology Olympiad (IBO)",
    entries: [{ year: "2022", summary: "3 Finalists" }],
  },
  {
    name: "International Psychology Olympiad (IPO)",
    entries: [{ year: "2024", summary: "Bronze Medal" }],
  },
  {
    name: "Genius Olympiad",
    entries: [{ year: "2024", summary: "4 Finalists; 4 scholarships" }],
  },
  {
    name: "Egyptian Biology Olympiad (EBO)",
    entries: [{ year: "2022", summary: "4 Finalists" }],
  },
  {
    name: "Egyptian Olympiad in Informatics (EOI)",
    entries: [{ year: "2022", summary: "1 Gold Medal, 1 Silver Medal, 3 Finalists" }],
  },
  {
    name: "International Astronomy and Astrophysics Competition (IAAC)",
    entries: [
      { year: "2022", summary: "1 Gold Honor, 5 Silver Honors, 21 Bronze Honors" },
      { year: "2023", summary: "1 Gold Honor, 7 Silver Honors, 15 Bronze Honors" },
      { year: "2024", summary: "9 Silver Honors, 3 Bronze Honors" },
    ],
  },
  {
    name: "American Mathematics Olympiad (AMO)",
    entries: [
      { year: "2022", summary: "3 Gold Medals, 4 Silver Medals, 4 Bronze Medals" },
      { year: "2023", summary: "3 Gold Medals, 7 Silver Medals, 17 Bronze Medals, 18 Honorable Mentions" },
      { year: "2024", summary: "14 Gold Medals, 7 Silver Medals, 5 Bronze Medals, 10 Honorable Mentions" },
    ],
  },
  {
    name: "International Youth Math Competition (IYMC)",
    entries: [
      { year: "2022", summary: "10 Silver Medals, 31 Bronze Medals" },
      { year: "2023", summary: "10 Silver Medals, 31 Bronze Medals" },
      { year: "2024", summary: "3 Silver Medals, 12 Bronze Medals" },
    ],
  },
  {
    name: "International Physics Realm (IPhR)",
    entries: [
      { year: "2023", summary: "1 Silver Medal (Advanced Category)" },
      { year: "2023", summary: "1 Silver Medal (Regular Category)" },
      { year: "2024", summary: "1 Gold Medal (Regular Category)" },
    ],
  },
  {
    name: "Mediterranean Youth Mathematical Championship (MYMC)",
    entries: [{ year: "2024", summary: "1 Gold Medal" }],
  },
  {
    name: "Singapore International Math Challenge (SIMOC)",
    entries: [{ year: "2024", summary: "3 Gold Medals, 2 Bronze Medals" }],
  },
  {
    name: "International Mathematical Modeling Challenge (IMMC)",
    entries: [{ year: "2024", summary: "4 Finalists; ranked in the top 10% among 32 countries" }],
  },
  {
    name: "Biogenesis Competition",
    entries: [
      { year: "2023", summary: "5 Silver Medals" },
      { year: "2024", summary: "2 Gold Medals, 9 Silver Medals, 3 Bronze Medals" },
    ],
  },
  {
    name: "Kangaroo Science Competition",
    entries: [{ year: "2024", summary: "15 Gold Medals, 17 Silver Medals, 6 Bronze Medals" }],
  },
  {
    name: "Linguistic English Competition",
    entries: [{ year: "2024", summary: "2 Gold Medals, 2 Silver Medals, 10 Bronze Medals" }],
  },
  {
    name: "Kangaroo Math Competition",
    entries: [{ year: "2024", summary: "10 Gold Medals, 15 Silver Medals, 25 Bronze Medals" }],
  },
  {
    name: "Pan African Mathematics Olympiad (PAMO)",
    entries: [
      { year: "2023", summary: "Finalist" },
      { year: "2024", summary: "Silver Medal" },
    ],
  },
  {
    name: "Trach to Cash",
    entries: [{ summary: "Ranked among the top 5 teams globally; 2nd place among STEM Schools" }],
  },
  {
    name: "Moscow Institute of Physics and Technology Competition (MIPT)",
    entries: [{ year: "2023", summary: "Finalists" }],
  },
  {
    name: "Arabic National Reading Challenge",
    entries: [{ summary: "Egypt's representation; achieved 2nd International Place" }],
  },
  {
    name: "Egyptian Brain Bee Competition",
    entries: [{ summary: "8 Pre-finalists; Top 10" }],
  },
  {
    name: "Korean Olympiad",
    entries: [{ summary: "1 Bronze Medal" }],
  },
  {
    name: "SINGA Math",
    entries: [{ summary: "1 Silver Medal, 1 Honorable Mention" }],
  },
  {
    name: "Vanda International Science Competition",
    entries: [{ year: "2023", summary: "1 Bronze Medal, 1 Honorable Mention" }],
  },
  {
    name: "International English Language Hippo Olympiad",
    entries: [{ year: "2020", summary: "2 Semi-Finalists" }],
  },
  {
    name: "Climate Change Competition",
    entries: [{ year: "2023", summary: "1st place (3 projects); 3rd place (2 projects)" }],
  },
  {
    name: "International Research Project Olympiad (IRPrO)",
    entries: [{ year: "2023", summary: "Silver Award" }],
  },
  {
    name: "State Award for Young Innovators",
    entries: [{ year: "2022", summary: "2nd place" }],
  },
  {
    name: "Cairo International Science Fair",
    entries: [{ summary: "6th place" }],
  },
  {
    name: "Water Hackathon",
    entries: [{ year: "2022", summary: "1st place in projects without electronics" }],
  },
  {
    name: "World Robotics Olympiad (WRO)",
    entries: [{ summary: "2 International Finalists; Top 30 in the world" }],
  },
  {
    name: "AFCM-SynFair",
    entries: [{ year: "2020", summary: "Best Software Project" }],
  },
];

export default function ContestsPage() {
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
        title="Contests"
        description={
          "Celebrating the competitions where Obour STEM students compete, innovate, and lead on national and international stages."
        }
        backgroundImage="/home-hero-bg-2.jpg"
        autoAdvanceInterval={0}
        forceCenteredContent
        overlayVariant="vertical"
        contentSpacingClassName="pt-[150px] sm:pt-[200px] lg:pt-[250px] pb-20 sm:pb-[90px] lg:pb-[100px]"
      />

      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 pb-16 sm:gap-12 sm:px-8 lg:gap-[60px] lg:px-10">
        <RevealOnScroll className="w-full">
          <section className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <h1>Global Excellence In Competition</h1>
            <p className="w-full max-w-[820px] px-3 text-center text-base sm:px-0 sm:text-lg">
              From world-class science fairs to elite Olympiads, our students consistently earn top honors and represent
              Egypt with distinction. Explore their journey across STEM, leadership, and innovation arenas.
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll className="w-full">
          <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {contestShowcase.map((contest) => (
              <article
                key={contest.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[5px] border border-[#120D31]/10 bg-white/70 p-6 shadow-[0_12px_38px_rgba(18,13,49,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F0A500]/80 hover:bg-white hover:shadow-[0_16px_48px_rgba(18,13,49,0.12)]"
              >
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-[#F0A500]/8 to-[#120D31]/12 opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <header className="relative flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-logo">{contest.name}</h2>
                  <div className="h-[2px] w-[50px] bg-[#F0A500]" aria-hidden />
                </header>
                <ul className="relative flex flex-col gap-2 text-sm sm:text-[15px]">
                  {contest.entries.map((entry, index) => (
                    <li key={`${contest.name}-${entry.year ?? "achievement"}-${index}`} className="flex gap-3">
                      {entry.year ? (
                        <span className="mt-[2px] flex h-6 min-w-[48px] shrink-0 items-center justify-center rounded-full bg-[#120D31]/10 px-3 text-xs font-semibold uppercase tracking-wide text-[#120D31]">
                          {entry.year}
                        </span>
                      ) : (
                        <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#F0A500]" aria-hidden />
                      )}
                      <span className="leading-relaxed">{entry.summary}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
