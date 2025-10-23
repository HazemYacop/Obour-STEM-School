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

  return (
    <div className='flex flex-col gap-[40px]'>
      <SiteNavbar
        brand={{
          href: '/',
          imageSrc: '/school-logo.jpg',
          imageAlt: 'Obour STEM School Logo',
          title: 'Obour STEM',
          subtitle: 'High School',
        }}
        items={navItems}
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
      <main className="px-[110px] flex flex-col gap-[40px]">
        <RevealOnScroll className="w-full">
          <div className="flex flex-wrap gap-[50px] py-[20px] px-[50px] justify-center items-center">
            <div className="relative flex flex-col gap-[10px] py-[40px] rounded-[5px] flex-1 basis-[480px] min-w-[320px]">
              <div className="absolute top-[20px] left-[20px] px-[14px] py-[10px] bg-logo text-white uppercase font-sarabun rounded-[5px] font-[900]">School Overview</div>
              <div className="flex flex-col justify-center items-center gap-[40px] px-[30px] pt-[50px] pb-[30px] rounded-[5px] border-[.3px] border-logo">
                <p>
                  Obour STEM School, a non-profit public boarding school in Al-Qalyubia Governorate, Egypt, is known as  a "Benchmark of Innovation." The school selects the top 0.5% of 9th-grade students who demonstrate academic excellence and inspiring potential to contribute to the school's diversity, teamwork activities, and social responsibility. The school aims to prepare future scientists with adequate science, technology, engineering, and mathematics knowledge.
                </p>
                <p>
                  Obour STEM School consistently seeks to provide state-of-the-art technological facilities, laboratories, and highly trained teachers, supported by the Ministry of Education, USAID, World Learning, and the ECASE project. We are the leading school in the country for providing teacher training programs with the resources necessary to meet educational challenges.
                </p>
                <SecondaryButton href="/">
                  Read More
                </SecondaryButton>
              </div>
            </div>
            <div className="relative flex-1 basis-[480px] min-w-[320px]">
              <ImageGallery
                images={overviewGalleryImages}
                className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full" delay={120}>
          <div className="relative flex gap-[50px] justify-center items-center px-[50px] py-[20px] overflow-hidden rounded-[5px] min-h-[360px]">
          <Image
            src="/school-classroom.jpg"
            alt="School Classroom"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px]" />
          <div className="relative flex flex-col gap-[10px] px-[20px] py-[40px] rounded-[5px] w-full">
            <div className="absolute top-[20px] right-[70px] p-[10px] bg-white text-logo uppercase font-sarabun rounded-[5px] font-[900]">Eligibility Criteria</div>
            <div className="flex flex-col justify-center items-center gap-[40px] px-[30px] pt-[50px] pb-[30px] rounded-[5px] border-[.3px] border-white text-white">
              <p>
                Obour STEM School is a very selective school, and it only accepts approximately 150 students out of 30,000 applicants per year. The school seeks students who have passion and desire to learn science, technology, engineering, and mathematics while intending to be active participants in their community.
              </p>
              <SecondaryButton href="/" className="text-white">
                Learn More
              </SecondaryButton>
            </div>
          </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full" delay={180}>
          <div className="flex justify-center items-center gap-[300px] py-[30px]">
          <div className="flex flex-col gap-[30px] w-full">
            <h1>Contests</h1>
            <p>STEM Obour students don’t just learn science—they live it. From robotics and AI challenges to national math and research fairs, our teams consistently rank among the best. Every competition is more than a trophy hunt; it’s a chance to test ideas, break limits, and turn creativity into real-world impact. Their success stories reflect the spirit of a generation built to solve tomorrow’s problems today.</p>
            <SecondaryButton href="/">
              Read More
            </SecondaryButton>
          </div>
            <div className="grid grid-cols-4 gap-[10px] w-full">
            {showcaseLogos.map((logo) => (
              <div key={`contest-${logo.src}`} className="relative flex items-center justify-center aspect-[4/3] w-full overflow-hidden rounded-[5px]">
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
          <div className="flex justify-center items-center gap-[300px] py-[30px]">
            <div className="grid grid-cols-4 gap-[10px] w-full">
            {showcaseLogos.map((logo) => (
              <div key={`program-${logo.src}`} className="relative flex items-center justify-center aspect-[4/3] w-full overflow-hidden rounded-[5px]">
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
            <div className="flex flex-col gap-[30px] w-full">
            <h1>Programs</h1>
            <p>At Obour STEM School, learning doesn’t stop at the classroom door. Our students engage in a wide range of national and international programs that challenge their curiosity, creativity, and leadership. From scientific research competitions and innovation fairs to entrepreneurship initiatives and global exchange projects, we encourage every student to turn ideas into impact. These programs are more than activities—they’re launchpads for the next generation of thinkers, problem-solvers, and changemakers from Egypt to the world.</p>
            <SecondaryButton href="/">
              Read More
            </SecondaryButton>
            </div>
          </div>
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
