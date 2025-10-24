"use client";

import { useEffect, useRef, useState } from "react";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { HeroSection } from '@/components/hero/HeroSection';
import { SiteNavbar } from '@/components/navigation/SiteNavbar';
import { ImageGallery } from "@/components/media/ImageGallery";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

import Image from "next/image";
export default function Home() {
  const heroBackgrounds = [
    '/home-hero-bg-1.jpg',
    '/home-hero-bg-2.jpg',
    '/home-hero-bg-3.jpg',
    '/home-hero-bg-4.jpg',
  ];

  const primaryCta = {
    label: 'Apply Now',
    href: '/',
    leadingIcon: {
      src: '/Button SVG 1.svg',
    },
    trailingIcon: {
      src: '/Button SVG 1.svg',
      className: 'rotate-180',
    },
  };

  const secondaryCta = {
    label: 'Learn More',
    href: '/',
  };

  const navItems = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contests', href: '/contests' },
    { label: 'Contact', href: '/contact' },
  ];

  const overviewGalleryImages = [
    "/home-hero-bg-1.jpg",
    "/home-hero-bg-2.jpg",
    "/home-hero-bg-3.jpg",
    "/home-hero-bg-4.jpg",
  ];

  const showcaseLogos = [
    { src: "/contests/isef.png", alt: "ISEF Logo" },
    { src: "/contests/eistf.webp", alt: "EISTF Logo" },
    { src: "/contests/egypt-iot-and-ai-challenge.png", alt: "EIAC Logo" },
    { src: "/contests/ugrf.jpg", alt: "UGRF Logo" },
    { src: "/contests/cairo-water-week.png", alt: "CWW Logo" },
    { src: "/contests/blast-off.jpg", alt: "BlastOff Logo" },
    { src: "/contests/eucys.png", alt: "EUCYS Logo" },
    { src: "/contests/zayed-sustainability-prize.jpg", alt: "ZSP Logo" },
    { src: "/contests/iupac.webp", alt: "IUPAC Logo" },
    { src: "/contests/ibo.jpg", alt: "IBO Logo" },
    { src: "/contests/ipsyo.jpg", alt: "IPSYO Logo" },
    { src: "/contests/ebo.jpg", alt: "EBO Logo" },
  ];

  const alumniUniversities = [
    { src: "/Alumni/arizona-state-university.png", alt: "Arizona State University Logo" },
    { src: "/Alumni/berea-college.png", alt: "Berea College Logo" },
    { src: "/Alumni/drexel-university.webp", alt: "Drexel University Logo" },
    { src: "/Alumni/florida-institute-of-technology.jpg", alt: "Florida Institute of Technology Logo" },
    { src: "/Alumni/minerva-university.jpg", alt: "Minerva University Logo" },
    { src: "/Alumni/new-york-university.png", alt: "New York University Logo" },
    { src: "/Alumni/ohio-university.png", alt: "Ohio University Logo" },
    { src: "/Alumni/stanford-university.jpg", alt: "Stanford University Logo" },
    { src: "/Alumni/university-of-arizona.png", alt: "University of Arizona Logo" },
    { src: "/Alumni/university-of-manchester.png", alt: "University of Manchester Logo" },
    { src: "/Alumni/university-of-michigan.png", alt: "University of Michigan Logo" },
    { src: "/Alumni/university-of-pennsylvania.png", alt: "University of Pennsylvania Logo" },
  ];

  const [isBottomSectionVisible, setIsBottomSectionVisible] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const visibilityTargets = useRef<Map<Element, boolean>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityTargets.current.set(entry.target, entry.isIntersecting);
        });

        const shouldHideHeader = Array.from(
          visibilityTargets.current.values()
        ).some(Boolean);

        setIsBottomSectionVisible(shouldHideHeader);
      },
      { threshold: 0.2 }
    );

    const targets: Element[] = [];

    if (contactSectionRef.current) {
      const contactElement = contactSectionRef.current;
      visibilityTargets.current.set(contactElement, false);
      observer.observe(contactElement);
      targets.push(contactElement);
    }

    if (footerRef.current) {
      const footerElement = footerRef.current;
      visibilityTargets.current.set(footerElement, false);
      observer.observe(footerElement);
      targets.push(footerElement);
    }

    if (!targets.length) {
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  const navbarVisibilityClass = isBottomSectionVisible
    ? "opacity-0 -translate-y-[20px] pointer-events-none"
    : "opacity-100 translate-y-0";

  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <SiteNavbar
        brand={{
          href: '/',
          imageSrc: '/school-logo.jpg',
          imageAlt: 'Obour STEM School Logo',
          title: 'Obour STEM',
          subtitle: 'High School',
        }}
        items={navItems}
        className={`transition-all duration-500 ease-in-out ${navbarVisibilityClass}`}
      />

      <HeroSection
        eyebrow="Welcome To"
        title="Obour STEM School"
        description={
          'Empowering young minds to think boldly, learn deeply, and shape the future. Where imagination meets purpose, and students design the world they want to live in.'
        }
        backgroundImages={heroBackgrounds}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 sm:gap-12 sm:px-8 lg:gap-[56px] lg:px-10">
        <RevealOnScroll className="w-full">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center gap-8 py-10 md:flex-row md:items-center md:gap-[40px] lg:gap-[50px] lg:py-[40px]">
            <div className="relative flex w-full max-w-[720px] flex-col gap-6 rounded-[5px] flex-1 basis-auto md:basis-[420px] lg:basis-[480px] lg:self-center">
              <div className="relative mx-auto mb-4 w-fit rounded-[5px] bg-logo px-[14px] py-[10px] text-center text-sm font-sarabun font-[900] uppercase text-white sm:absolute sm:left-[20px] sm:top-[-20px] sm:mx-0 sm:mb-0">
                School Overview
              </div>
              <div className="flex flex-col items-center gap-8 rounded-[5px] border border-logo px-6 py-10 sm:px-8 sm:py-12 sm:pt-16 lg:items-start">
                <p>
                  Obour STEM School, a non-profit public boarding school in Al-Qalyubia Governorate, Egypt, is known as  a "Benchmark of Innovation." The school selects the top 0.5% of 9th-grade students who demonstrate academic excellence and inspiring potential to contribute to the school's diversity, teamwork activities, and social responsibility. The school aims to prepare future scientists with adequate science, technology, engineering, and mathematics knowledge.
                </p>
                <p>
                  Obour STEM School consistently seeks to provide state-of-the-art technological facilities, laboratories, and highly trained teachers, supported by the Ministry of Education, USAID, World Learning, and the ECASE project. We are the leading school in the country for providing teacher training programs with the resources necessary to meet educational challenges.
                </p>
                <SecondaryButton href="/" className="w-full sm:w-[200px]">
                  Read More
                </SecondaryButton>
              </div>
            </div>
            <div className="relative flex w-full max-w-[680px] flex-1 basis-auto md:basis-[420px] lg:basis-[480px] overflow-hidden rounded-[5px] self-stretch md:self-center">
              <ImageGallery
                images={overviewGalleryImages}
                className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[520px]"
              />
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full" delay={120}>
          <div className="relative mx-auto flex w-full max-w-[1100px] min-h-[360px] flex-col overflow-hidden rounded-[5px] px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[50px] lg:px-[40px] lg:py-[20px]">
            <Image
              src="/school-classroom.jpg"
              alt="School Classroom"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px]" />
            <div className="relative flex w-full flex-col gap-6 rounded-[5px] md:px-4 md:py-10 sm:px-6 sm:py-12">
              <div className="relative mx-auto mb-6 w-fit rounded-[5px] bg-white px-4 py-2 text-center text-sm font-sarabun font-[900] uppercase text-logo sm:absolute sm:top-7 sm:right-[70px] sm:mx-0 sm:mb-0">Eligibility Criteria</div>
              <div className="flex flex-col items-center gap-8 rounded-[5px] border border-white px-5 py-8 text-white sm:px-8 sm:py-12 sm:pt-16">
                <p>
                  Obour STEM School is a very selective school, and it only accepts approximately 150 students out of 30,000 applicants per year. The school seeks students who have passion and desire to learn science, technology, engineering, and mathematics while intending to be active participants in their community.
                </p>
                <SecondaryButton href="/" className="w-full text-white sm:w-[200px]">
                  Learn More
                </SecondaryButton>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full" delay={180}>
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-center lg:gap-[160px] lg:py-[30px]">
            <div className="flex w-full max-w-[620px] flex-col items-center gap-6 text-center lg:items-start lg:text-left">
              <h1>Contests</h1>
              <p>STEM Obour students don’t just learn science—they live it. From robotics and AI challenges to national math and research fairs, our teams consistently rank among the best. Every competition is more than a trophy hunt; it’s a chance to test ideas, break limits, and turn creativity into real-world impact. Their success stories reflect the spirit of a generation built to solve tomorrow’s problems today.</p>
              <SecondaryButton href="/" className="w-full sm:w-[200px]">
                Read More
              </SecondaryButton>
            </div>
            <div className="grid w-full max-w-[720px] grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {showcaseLogos.map((logo) => (
                <div key={`contest-${logo.src}`} className="relative mx-auto flex aspect-[4/3] w-full max-w-[120px] items-center justify-center overflow-hidden rounded-[5px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[170px] xl:max-w-[190px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 12vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full" delay={220}>
          <div className="mx-auto flex w-full max-w-[1100px] flex-col-reverse items-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-center lg:gap-[160px] lg:py-[30px]">
            <div className="grid w-full max-w-[720px] grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {showcaseLogos.map((logo) => (
                <div key={`program-${logo.src}`} className="relative mx-auto flex aspect-[4/3] w-full max-w-[120px] items-center justify-center overflow-hidden rounded-[5px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[170px] xl:max-w-[190px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 12vw, 40vw"
                  />
                </div>
              ))}
            </div>
            <div className="flex w-full max-w-[620px] flex-col items-center gap-6 text-center lg:items-start lg:text-left">
              <h1>Programs</h1>
              <p>At Obour STEM School, learning doesn’t stop at the classroom door. Our students engage in a wide range of national and international programs that challenge their curiosity, creativity, and leadership. From scientific research competitions and innovation fairs to entrepreneurship initiatives and global exchange projects, we encourage every student to turn ideas into impact. These programs are more than activities—they’re launchpads for the next generation of thinkers, problem-solvers, and changemakers from Egypt to the world.</p>
              <SecondaryButton href="/" className="w-full sm:w-[200px]">
                Read More
              </SecondaryButton>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full" delay={220}>
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 py-12 text-center sm:gap-12 lg:py-[40px]">
            <h1>Alumni <span className="bg-gradient-to-b from-[#8E4D00] to-sec bg-clip-text text-transparent">International</span> Admission</h1>
            <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4 xl:grid-cols-6">
              {alumniUniversities.map((logo) => (
                <div key={`alumni-${logo.src}`} className="relative mx-auto flex aspect-[4/3] w-full max-w-[120px] items-center justify-center overflow-hidden rounded-[5px] sm:max-w-[130px] md:max-w-[150px] lg:max-w-[170px] xl:max-w-[190px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 12vw, 40vw"
                  />
                </div>
              ))}
            </div>
            <SecondaryButton href="/" className="w-full sm:w-[220px]">
              See The Full List
            </SecondaryButton>
          </div>
        </RevealOnScroll>
        <div ref={contactSectionRef} className="w-full">
          <RevealOnScroll className="w-full" delay={220}>
            <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 py-12 xl:flex-row xl:justify-center xl:gap-[50px] xl:py-[30px]">
              <form className="flex w-full flex-col justify-center gap-6 rounded-[5px] bg-logo p-6 text-center sm:gap-8 sm:p-8 xl:max-w-[520px] xl:p-[50px] xl:text-left">
                <h1 className="text-white">Contact Us</h1>
                <p className="text-white">Have a question, an idea, or an opportunity to collaborate? We'd love to hear from you. Reach out to us through our official channels, visit our campus, or drop us a message—we'll get back to you as soon as possible.</p>
                <div className="flex w-full flex-col gap-5">
                  <input type="email" placeholder="Email Address ..." className="w-full rounded-[5px] border-none bg-white p-[12px] font-sarabun font-[400] text-[16px] focus:outline-none" required />
                  <textarea placeholder="Write Your Message ..." className="h-[180px] w-full rounded-[5px] border-none bg-white p-[12px] font-sarabun font-[400] text-[16px] focus:outline-none" required />
                </div>
                <SecondaryButton className="w-full text-white sm:w-[200px] sm:self-start">
                  Submit Message
                </SecondaryButton>
              </form>
              <div className="flex w-full overflow-hidden rounded-[5px] border border-logo p-2 sm:p-[10px] xl:max-w-[520px]">
                <iframe
                  title="Obour STEM School Location"
                  src="https://maps.google.com/maps?q=Obour%20STEM%20School&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full min-h-[280px] rounded-[5px] sm:min-h-[340px] lg:min-h-[420px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </main>
      <div ref={footerRef}>
        <SiteFooter />
      </div>
    </div>
  );
}
