import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { HeroSection } from '@/components/hero/HeroSection';
import { SiteNavbar } from '@/components/navigation/SiteNavbar';
import { ImageGallery } from "@/components/media/ImageGallery";

import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className='flex flex-col gap-[70px]'>
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
      <main className="px-[50px] flex flex-col gap-[40]">
        <div className="flex gap-[50px] py-[20px] justify-center items-center">
          <div className="relative flex flex-col gap-[10] px-[80px] py-[40px] rounded-[5px] w-full">
            <div className="absolute top-[15px] left-[40px] px-[14px] py-[10px] bg-logo text-white uppercase font-sarabun rounded-[5px] rotate-[-15deg] font-[900]">School Overview</div>
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
          <div className="flex w-full w-full items-stretch">
            <ImageGallery images={overviewGalleryImages} className="h-[520px] w-full" />
          </div>
        </div>
        <div className="flex gap-[50px] py-[20px] justify-center items-center">
          <div className="flex w-full h-full items-stretch">
            <Image src={"/school-classroom.jpg"} width={615} height={143} alt={"School Classroom"} className="w-full rounded-[5px]" />
          </div>
          <div className="relative flex flex-col gap-[10] px-[40px] py-[40px] rounded-[5px] w-full">
            <div className="absolute top-[15px] right-0 p-[10px] bg-logo text-white uppercase font-sarabun rounded-[5px] rotate-[15deg] font-[900]">Eligibility Criteria</div>
            <div className="flex flex-col justify-center items-center gap-[40px] px-[30px] pt-[50px] pb-[30px] rounded-[5px] border-[.3px] border-logo">
              <p>
                Obour STEM School is a very selective school, and it only accepts approximately 150 students out of 30,000 applicants per year. The school seeks students who have passion and desire to learn science, technology, engineering, and mathematics while intending to be active participants in their community.
              </p>
              <SecondaryButton href="/">
                Read More
              </SecondaryButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
