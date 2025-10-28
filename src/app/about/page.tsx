"use client";

import { useEffect, useRef, useState } from "react";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { HeroSection } from '@/components/hero/HeroSection';
import { SiteNavbar } from '@/components/navigation/SiteNavbar';
import { ImageGallery } from "@/components/media/ImageGallery";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

const capstoneGalleryCaptions = [
  {
    title: "Prototype Showcase",
    description: "Capstone teams present working models that solve real-world challenges.",
  },
  {
    title: "Faculty Mentorship",
    description: "Industry experts and professors guide students through each project milestone.",
  },
  {
    title: "Interdisciplinary Design",
    description: "Projects weave together engineering, coding, and scientific research.",
  },
  {
    title: "Community Impact",
    description: "Solutions aim to improve sustainability, infrastructure, and quality of life.",
  },
];

const gradingScale = [
  { grade: "A+", range: "95% to 100%" },
  { grade: "A", range: "90% to 95%" },
  { grade: "B+", range: "85% to 90%" },
  { grade: "B", range: "80% to 85%" },
  { grade: "C+", range: "75% to 80%" },
  { grade: "C", range: "70% to 75%" },
  { grade: "D+", range: "65% to 70%" },
  { grade: "D", range: "61% to 65%" },
  { grade: "F", range: "0% to 61%" },
];

const subjectCredits = [
  { course: "Arabic", type: "Regular", credits: 3 },
  { course: "French", type: "Regular", credits: 3 },
  { course: "German", type: "Regular", credits: 3 },
  { course: "English", type: "Honors", credits: 2 },
  { course: "Mathematics", type: "Honors", credits: 3 },
  { course: "Geology", type: "Honors", credits: 4 },
  { course: "Biology", type: "Honors", credits: 4 },
  { course: "Chemistry", type: "Honors", credits: 4 },
  { course: "Physics", type: "Honors", credits: 4 },
  { course: "Mechanics", type: "Honors", credits: 3 },
  { course: "Religion", type: "Regular", credits: 2 },
  { course: "Social Studies", type: "Regular", credits: 3 },
  { course: "Civics", type: "Regular", credits: 3 },
  { course: "Computer Science", type: "Regular", credits: 2 },
];

export default function AboutPage() {
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
        title="About The School"
        description={
          "Empowering young minds to think boldly, learn deeply, and shape the future. Where imagination meets purpose, and students design the world they want to live in."
        }
        backgroundImage="/home-hero-bg-3.jpg"
        autoAdvanceInterval={0}
        forceCenteredContent
        overlayVariant="vertical"
        contentSpacingClassName="pt-[150px] sm:pt-[200px] lg:pt-[250px] pb-20 sm:pb-[90px] lg:pb-[100px]"
      />

      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 sm:gap-12 sm:px-8 lg:gap-[60px] lg:px-10">
        <RevealOnScroll className="w-full">
          <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:items-start md:gap-[40px] lg:gap-[20px] lg:py-[20px]">
            <div className="relative flex w-full flex-col gap-[50px] rounded-[5px] flex-1 basis-auto md:basis-[420px] lg:basis-[480px] min-w-0">
              <div className="flex flex-col gap-6">
                <h1 className="leading-tight md:leading-[50px] text-logo">Overview</h1>
                <p>
                  Obour STEM School, a non-profit public boarding school in Al-Qalyubia Governorate, Egypt, is known as  a "Benchmark of Innovation." The school selects the top 0.5% of 9th-grade students who demonstrate academic excellence and inspiring potential to contribute to the school's diversity, teamwork activities, and social responsibility. The school aims to prepare future scientists with adequate science, technology, engineering, and mathematics knowledge.                </p>
                <p>
                  Obour STEM School consistently seeks to provide state-of-the-art technological facilities, laboratories, and highly trained teachers, supported by the Ministry of Education, USAID, World Learning, and the ECASE project. We are the leading school in the country for providing teacher training programs with the resources necessary to meet educational challenges.                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="leading-tight md:leading-[50px] text-logo">Community</h1>
                <p>
                  Obour STEM is a boarding school for self-learning and research with the intention of improving the students’ knowledge beyond the learning curriculum. It helps to develop autonomy, self-reliance, problem-solving skills, flexibility, and the ability to combine research with learning. The school began in 2018 and is admitting students from across the country, although it estimates that it has approximately 430 students for now; about 150 of them will be graduating this year.                </p>
                <p>
                  Students attend Obour STEM school from all around Egypt's governorates who live in either urban cities or rural villages. They assemble at the same table to share their ideas, perspectives, and opinions.                </p>
              </div>
            </div>
            <div className="relative flex w-full flex-1 basis-auto md:basis-[420px] lg:basis-[380px] overflow-hidden rounded-[5px] self-stretch min-w-0">
              <ImageGallery
                images={[
                  '/home-hero-bg-1.jpg',
                  '/home-hero-bg-2.jpg',
                  '/home-hero-bg-3.jpg',
                  '/home-hero-bg-4.jpg',
                ]}
                overlayClassName=""
                slideCaptions={[
                  {
                    title: "Physics Lab",
                    description:
                      "Students dive into hands-on labs and real-world challenges that bring science and math to life.",
                  },
                  {
                    title: "Collaborative Projects",
                    description:
                      "Our cohorts work together on interdisciplinary projects tackling national and global issues.",
                  },
                  {
                    title: "Cutting-Edge Facilities",
                    description:
                      "State-of-the-art laboratories and maker spaces support every research ambition.",
                  },
                  {
                    title: "Inspiring Campus Life",
                    description:
                      "A close-knit boarding community that blends academic excellence with personal growth.",
                  },
                ]}
                className="w-full h-[240px] sm:h-[320px] md:h-[580px] lg:h-full"
              />
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full">
            <div className="flex w-full flex-col gap-6 rounded-[5px] bg-linear-to-b from-[#120D31] to-[#120755]/90 px-5 py-8 text-white sm:px-[40px] sm:py-[40px]">
              <h1 className="text-center text-white">Curriculum</h1>
              <div className="flex w-full flex-col gap-8 lg:flex-row">
                <div className="flex w-full flex-col gap-[10px] lg:flex-1">
                  <p>The curriculum emphasizes four key areas: sciences, humanities, arts, and sports. STEM fields of study include chemistry, physics, biology, geology, mechanics (applied mathematics), mathematics, and technology. Students mainly lead the class discussions in lectures regarding critical thinking and teamwork activities, applying their knowledge in labs under the supervision of leading experts.</p>
                  <p>On the humanities side, students take classes in Arabic, English, and Second Language (French or German). Social Studies, Civics, and Religion courses focus on promoting background diversity and open-mindedness. Students also need to attend art, library, or music to foster their artistic talents besides working on physical fitness in sports activities as a part of their preparation for athletic accomplishments and shaping up.</p>
                </div>
                <div className="grid w-full grid-cols-2 gap-[12px] sm:grid-cols-3 lg:grid-cols-4 lg:flex-1">
                  {["Physics","Chemistry","Mathematics","Mechanics","Biology","Geology","Arabic","English","French","Citizenship","Religion","P.E"].map((subject) => (
                    <div
                      key={subject}
                      className="group relative flex select-none items-center justify-center overflow-hidden rounded-[5px] border border-white bg-white/5 px-4 py-4 text-white transition-all duration-300 hover:-translate-y-[6px] hover:border-[#F0A500] hover:bg-white/15 hover:shadow-[0_16px_45px_rgba(240,165,0,0.25)]"
                    >
                      <span className="relative z-[1] text-sm font-semibold uppercase tracking-wide">{subject}</span>
                      <span
                        className="pointer-events-none absolute inset-0 z-0 scale-95 rounded-[5px] bg-gradient-to-br from-transparent via-white/10 to-[#F0A500]/30 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full">
          <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:items-start md:gap-[40px] lg:gap-[50px] lg:py-[20px]">
            <div className="relative flex w-full max-w-[680px] flex-1 basis-auto md:basis-[420px] lg:basis-[380px] overflow-hidden rounded-[5px] self-stretch">
              <ImageGallery
                images={[
                  '/home-hero-bg-1.jpg',
                  '/home-hero-bg-2.jpg',
                  '/home-hero-bg-3.jpg',
                  '/home-hero-bg-4.jpg',
                ]}
                overlayClassName=""
                slideCaptions={capstoneGalleryCaptions}
                className="w-full h-[240px] sm:h-[320px] md:h-[580px] lg:h-full"
              />
            </div>
            <div className="relative flex w-full max-w-[720px] flex-col gap-[50px] rounded-[5px] flex-1 basis-auto md:basis-[420px] lg:basis-[480px]">
              <div className="flex flex-col gap-6 items-start text-left md:items-end md:text-right">
                <h1 className="leading-tight md:leading-[50px] text-logo">Capstone Project</h1>
                <p>
                  The school's project-based system combines curriculum with scientific projects, where students are expected to design and develop five engineering or experimental-based projects in five different semesters.
                </p>
                <p>
                  Students work in groups of five, four, or three members in a cooperative learning manner to solve one of the eleven grand challenges that Egypt and the world face, following the EDP (Engineering Design Process). These projects are assessed by top-notch university professors at the end of the semester during the ‘Capstone Exhibition.‘.
                </p>
                <p>
                  Capstone projects cultivate students’ research and engineering abilities, tackling real-life challenges in housing, energy systems and renewable resources, water availability and treatment, establishment of industrial basis, communication, agriculture, and food support.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full">
          <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:items-start md:gap-[40px] lg:gap-[50px] lg:py-[20px]">
            <div className="relative flex w-full flex-1 flex-col gap-[50px] rounded-[5px] basis-auto md:basis-1/2 min-w-0">
              <div className="w-full flex flex-col gap-6">
                <h1 className="leading-tight md:leading-[50px] text-logo">Qualification</h1>
                <p>
                  To qualify, applicants must either: achieve more than 98% in 9th Grade, or achieve more than 95% in 9th Grade, with 100% in one of Math, Science, or English.
                </p>
                <p>
                  After meeting these criteria, applicants take four nationwide tests—English, Math, Science, and IQ. The top 150 students based on these test scores are admitted.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col px-5 py-[30px] sm:px-[40px] sm:py-[40px] justify-center items-center bg-linear-to-b from-[#120D31] to-[#120755]/90 rounded-[5px] basis-auto md:basis-1/2 min-w-0 text-center sm:text-left">
              <p className="text-white">Obour STEM School is a very selective school, and it only accepts approximately 150 students out of 30,000 applicants per year. The school seeks students who have passion and desire to learn science, technology, engineering, and mathematics while intending to be active participants in their community.</p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full">
          <section className="flex w-full flex-col gap-8 overflow-hidden rounded-[5px] bg-linear-to-b from-[#120D31] to-[#120755]/90 p-6 text-white sm:p-10 lg:flex-row lg:gap-10">
            <div className="relative flex w-full flex-col gap-5 lg:max-w-[45%]">
              <h1 className="text-2xl font-semibold sm:text-3xl">Grading System</h1>
              <p className="text-sm sm:text-base text-white/85">
                Our honor courses push every learner to master STEM disciplines in depth and at speed. Instead of class ranking, students earn an unweighted GPA that reflects their course credit rigor. Grades 10 and 11 follow a letter-based scale, while grade 12 adopts a 100-point breakdown to prepare students for university admissions.
              </p>
              <div className="flex flex-col gap-4 rounded-[5px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <span className="text-sm font-semibold uppercase tracking-[3px] text-white/80">Grade Benchmarks</span>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {gradingScale.map((item, index) => (
                    <div
                      key={`${item.grade}-${item.range}`}
                      className={`group relative overflow-hidden rounded-[5px] border border-white/15 bg-white/10 p-4 text-center transition-all duration-300 hover:-translate-y-[4px] hover:border-[#F0A500] hover:bg-white/15 hover:shadow-[0_16px_45px_rgba(240,165,0,0.25)] ${index === 0 ? "sm:col-span-3" : ""}`}
                    >
                      <span className="text-lg font-semibold uppercase tracking-wide text-white">{item.grade}</span>
                      <span className="mt-1 block text-sm text-white/80">{item.range}</span>
                      <span
                        className="pointer-events-none absolute inset-0 scale-95 rounded-[5px] bg-gradient-to-br from-transparent via-white/10 to-[#F0A500]/30 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-1 flex-col gap-4 rounded-[5px] border border-white/10 bg-white/5 p-5 text-sm text-white/90 sm:p-6 lg:p-8">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-[#F0A500]">Course Credits</span>
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
                {subjectCredits.map((subject, idx) => (
                  <div
                    key={`${subject.course}-${subject.type}-${subject.credits}`}
                    className={`group flex items-center justify-between gap-3 rounded-[5px] border border-white/10 bg-white/5 px-4 py-5 text-sm transition duration-300 hover:-translate-y-[3px] hover:border-[#F0A500] hover:bg-white/10 ${idx % 2 === 0 ? "bg-white/8" : ""}`}
                  >
                    <span className="text-base font-semibold text-white leading-tight">{subject.course}</span>
                    <span className="inline-flex w-fit rounded-full border border-[#F0A500]/40 bg-[#F0A500]/20 px-3 py-[2px] text-xs font-semibold text-[#F0A500]">
                      {subject.credits} credits
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
