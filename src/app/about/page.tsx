"use client";

import { useEffect, useRef, useState } from "react";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { HeroSection } from '@/components/hero/HeroSection';
import { SiteNavbar } from '@/components/navigation/SiteNavbar';
import { ImageGallery } from "@/components/media/ImageGallery";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

const aboutNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", isActive: true },
  { label: "Programs", href: "/programs" },
  { label: "Contests", href: "/contests" },
  { label: "Contact", href: "/contact" },
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
        items={aboutNavItems}
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

      <main className="mx-auto w-full max-w-[1400px] flex-col gap-10 px-5 sm:gap-12 sm:px-8 lg:gap-[56px] lg:px-10">
        <RevealOnScroll className="w-full">
          <div className="mx-auto flex w-full flex-col justify-center gap-8 md:flex-row md:items-start md:gap-[40px] lg:gap-[20px] lg:py-[20px]">
            <div className="relative flex w-full max-w-[720px] flex-col gap-[50px] rounded-[5px] flex-1 basis-auto md:basis-[420px] lg:basis-[480px]">
              <div className="flex flex-col gap-6 px-6 sm:px-8">
                <h1 className="leading-tight md:leading-[50px] text-logo">Overview</h1>
                <p>
                  Obour STEM School, a non-profit public boarding school in Al-Qalyubia Governorate, Egypt, is known as  a "Benchmark of Innovation." The school selects the top 0.5% of 9th-grade students who demonstrate academic excellence and inspiring potential to contribute to the school's diversity, teamwork activities, and social responsibility. The school aims to prepare future scientists with adequate science, technology, engineering, and mathematics knowledge.                </p>
                <p>
                  Obour STEM School consistently seeks to provide state-of-the-art technological facilities, laboratories, and highly trained teachers, supported by the Ministry of Education, USAID, World Learning, and the ECASE project. We are the leading school in the country for providing teacher training programs with the resources necessary to meet educational challenges.                </p>
              </div>
              <div className="flex flex-col gap-6 px-6 sm:px-8">
                <h1 className="leading-tight md:leading-[50px] text-logo">Community</h1>
                <p>
                  Obour STEM is a boarding school for self-learning and research with the intention of improving the students’ knowledge beyond the learning curriculum. It helps to develop autonomy, self-reliance, problem-solving skills, flexibility, and the ability to combine research with learning. The school began in 2018 and is admitting students from across the country, although it estimates that it has approximately 430 students for now; about 150 of them will be graduating this year.                </p>
                <p>
                  Students attend Obour STEM school from all around Egypt's governorates who live in either urban cities or rural villages. They assemble at the same table to share their ideas, perspectives, and opinions.                </p>
              </div>
            </div>
            <div className="relative flex w-full max-w-[680px] flex-1 basis-auto md:basis-[420px] lg:basis-[380px] overflow-hidden rounded-[5px] self-stretch">
              <ImageGallery
                images={[
                  '/home-hero-bg-1.jpg',
                  '/home-hero-bg-2.jpg',
                  '/home-hero-bg-3.jpg',
                  '/home-hero-bg-4.jpg',
                ]}
                slideCaptions={[
                  {
                    title: "Experiential Learning",
                    description: "Students dive into hands-on labs and real-world challenges that bring science and math to life.",
                  },
                  {
                    title: "Collaborative Projects",
                    description: "Our cohorts work together on interdisciplinary projects tackling national and global issues.",
                  },
                  {
                    title: "Cutting-Edge Facilities",
                    description: "State-of-the-art laboratories and maker spaces support every research ambition.",
                  },
                  {
                    title: "Inspiring Campus Life",
                    description: "A close-knit boarding community that blends academic excellence with personal growth.",
                  },
                ]}
                overlayClassName="backdrop-blur-[12px] lg:backdrop-blur-[10px] lg:[mask-image:linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0)_100%)] lg:[-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0)_100%)]"
                className="w-full h-[240px] sm:h-[320px] md:h-[580px] lg:h-full"
              />
            </div>
          </div>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
