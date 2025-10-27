"use client";

import { SiteNavbar } from "@/components/navigation/SiteNavbar";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { HeroSection } from "@/components/hero/HeroSection";
import { RevealOnScroll } from "@/components/utility/RevealOnScroll";

import Image from "next/image";

const programsNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs", isActive: true },
  { label: "Contests", href: "/contests" },
  { label: "Contact", href: "/contact" },
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
        items={programsNavItems}
      />

      <HeroSection
        title="Programs"
        description={
          "A dynamic STEM ecosystem where students design, test, and launch solutions that advance Egypt's future. Explore the learning pathways that turn curiosity into lifelong impact."
        }
        backgroundImage="/programs-hero-bg.jpg"
        autoAdvanceInterval={0}
        forceCenteredContent
        overlayVariant="vertical"
        contentSpacingClassName="pt-[150px] sm:pt-[200px] lg:pt-[250px] pb-20 sm:pb-[90px] lg:pb-[100px]"
      />

      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-14 sm:gap-12 sm:px-8 lg:gap-[60px] lg:px-10">
        <RevealOnScroll className="w-full">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1>Global Programs, Global Minds</h1>
            <p className="w-[60%] text-center">Obour STEM alumni don’t just study — they explore the world’s leading academic and innovation programs, earning places in top global initiatives that shape future scientists, leaders, and changemakers.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="w-full">
          <div className="grid grid-cols-4 gap-[10px] justify-center items-center">
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/yygs.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Yale Young Global Scholars (YYGS)</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/yyas.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Yale Young Africa Scholars (YYAS)</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/pioneer.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">The Pioneer Research Program</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/afs.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">The 2022 AFS Global STEM Academy</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/lot.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Leaders of Tomorrow Exchange Program</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/ccc.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Competitive College Club (CCC)</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/ala.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">ALA 3 Weeks Summer Program</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/iyrc.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">IYRC Summer Program (Medicine & Research)</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/qubit.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">QubitxQubit</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/nyja.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">New York Junior Academy</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/moonshot.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Moonshot Pirates</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/gwc.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Girls Who Code</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/1000-girls.webp"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">1000 Girls 1000 Futures</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/horizon.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Horizon Academic</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/nation.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Nation Builders</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/ysj.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Youth Science Journal (YSJ)</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/iyna.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">IYNA Summer Course 2023</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/ycm.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">YCM Dilact Group</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/kwk.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Kode With Klossy</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/explore.webp"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Explore Fellowship</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/x-culture.png"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">X-Culture</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/amel.webp"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">The African Middle Eastern Leadership Project</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/sga.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">Star Girls Africa</p>
            </div>
            <div className="flex items-center px-[20px] py-[10px] gap-[10px] border-[0.4px] border-logo rounded-[5px] h-full">
              <Image src={"/programs/msp.jpg"} alt="YYGS Program Logo" width={70} height={70} className="rounded-full"/>
              <p className="text-[18px]">MedSTEMpowered</p>
            </div>
          </div>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}


