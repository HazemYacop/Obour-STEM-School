"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SiteFooter() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [isBioClosing, setIsBioClosing] = useState(false);
  const bioDialogId = "hazem-bio-dialog";
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openBio = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsBioClosing(false);
    setIsBioOpen(true);
  };

  const closeBio = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setIsBioClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setIsBioOpen(false);
      setIsBioClosing(false);
      closeTimerRef.current = null;
    }, 260);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const overlayAnimationClass = isBioClosing ? "animate-footer-overlay-out" : "animate-footer-overlay";
  const cardAnimationClass = isBioClosing ? "animate-footer-card-out" : "animate-footer-card";

  return (
    <>
      <footer className="bg-logo flex w-full flex-col items-center gap-6 px-5 py-10 sm:gap-8 sm:py-[30px] lg:px-10 min-[1920px]:mx-auto min-[1920px]:max-w-[1200px] min-[1920px]:rounded-t-[24px] min-[2560px]:rounded-t-[32px] min-[1920px]:overflow-hidden">
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-[60px]">
          <div className="flex max-w-[370px] flex-col items-center gap-[10px] text-center md:items-start md:text-left">
            <Link
              href="/"
              className="flex items-center gap-3 md:gap-[5px]"
              aria-label="Obour STEM"
            >
              <Image
                src="/school-logo.jpg"
                alt="School Logo"
                width={45}
                height={45}
                className="rounded-full"
                priority
              />
              <div className="flex flex-col justify-center text-logo">
                <span className="font-bayon text-[18px] font-medium leading-[22px] text-white sm:text-[20px] sm:leading-[25px]">
                  Obour STEM
                </span>
                <span className="font-advent text-[13px] leading-[15px] tracking-[2px] text-white sm:text-[16px]">
                  High School
                </span>
              </div>
            </Link>
            <span className="text-white font-inter text-[13px]">Empowering young minds to think boldly, learn deeply, and shape the future. Where imagination meets purpose, and students design the world they want to live in. <br/> CEEB code: 648037</span>
          </div>
          <div className="flex flex-col items-center gap-[20px] text-center md:items-start md:text-left">
            <span className="font-ibm font-[700] text-[15px] text-white">Quick Links</span>
            <ul className="flex flex-col items-center gap-[15px] pl-0 md:items-start md:pl-[50px]">
              <li>
                <Link
                  href="/about"
                  className="relative block text-center font-inter text-[13px] text-white transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white md:text-left"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="relative block text-center font-inter text-[13px] text-white transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white md:text-left"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contests"
                  className="relative block text-center font-inter text-[13px] text-white transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white md:text-left"
                >
                  Contests
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-[20px] text-center md:items-start md:text-left">
            <span className="font-ibm font-[700] text-[15px] text-white">Social Media</span>
            <ul className="flex flex-col items-center gap-[15px] pl-0 md:items-start md:pl-[50px]">
              <Link href={"https://www.facebook.com/profile.php?id=61561592574709"}><li className="relative text-center text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white md:text-left">Facebook</li></Link>
              <Link href={"https://www.linkedin.com/school/obour-stem/"}><li className="relative text-center text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white md:text-left">LinkedIn</li></Link>
              <Link href={"mailto:Counselor@stemkalubya.moe.edu.eg"}><li className="relative text-center text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white md:text-left">Email</li></Link>
            </ul>
          </div>
          <div className="group">
            <div className="bg-white/70 rounded-[5px] py-[5px] px-4 flex justify-center">
              <span className="text-logo font-ibm font-[900] text-[15px]">Designed & Coded By</span>
            </div>
            <button
              type="button"
              onClick={openBio}
              className="font-roboto font-[900] text-[26px] uppercase bg-gradient-to-b from-white to-white/0 bg-clip-text text-transparent transition-all duration-300 hover:tracking-[2px] hover:drop-shadow-[0_0_12px_rgba(128,255,234,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer sm:text-[32px]"
              aria-haspopup="dialog"
              aria-expanded={isBioOpen}
              aria-controls={bioDialogId}
            >
              Hazem Karam
            </button>
          </div>
        </div>

      </footer>

      {isBioOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[10px] px-4 opacity-0 ${overlayAnimationClass}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${bioDialogId}-title`}
          id={bioDialogId}
          onClick={closeBio}
        >
          <div
            className={`relative w-full max-w-[420px] overflow-hidden rounded-[18px] border border-white/20 bg-white/95 px-8 py-10 text-[#0c1326] shadow-[0_28px_70px_rgba(12,19,38,0.2)] opacity-0 ${cardAnimationClass}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeBio}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#1d2233]/15 text-[#1d2233]/60 transition-colors duration-200 hover:border-[#1d2233]/35 hover:text-[#1d2233]"
              aria-label="Close bio"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-5 text-center">
              <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-linear-to-br from-logo/10 to-logo/20 text-logo">
                <Image
                  src="/hazem-avatar.png"
                  alt="Hazem Karam"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h2
                  id={`${bioDialogId}-title`}
                  className="font-ibm text-xl font-semibold uppercase tracking-[4px] text-logo"
                >
                  Hazem Karam
                </h2>
                <span className="text-sm text-[#4b526a]">Full-stack Developer</span>
              </div>
              <p className="max-w-[320px] text-[13px] leading-relaxed text-[#343b54]">
                Hi, I’m a student from Obour STEM School, Class of 2026 — a full-stack developer with a love for building things that actually work. This website is my small gift to my school and my amazing classmates. It’s a way to give something back to the place that’s been shaping how I think, learn, and create.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:hazemyacopbusiness@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-logo/25 bg-logo/5 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-logo transition hover:border-logo/45 hover:bg-logo/12"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/hazem-yacop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-logo/25 bg-logo/5 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-logo transition hover:border-logo/45 hover:bg-logo/12"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/HazemYacop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-logo/25 bg-logo/5 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-logo transition hover:border-logo/45 hover:bg-logo/12"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes footerOverlayFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes footerCardIn {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes footerOverlayFadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes footerCardOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }
        }

        .animate-footer-overlay {
          animation: footerOverlayFade 220ms ease-out forwards;
        }

        .animate-footer-card {
          animation: footerCardIn 260ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-footer-overlay-out {
          animation: footerOverlayFadeOut 240ms ease-in forwards;
        }

        .animate-footer-card-out {
          animation: footerCardOut 260ms cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
}

export default SiteFooter;
