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
      <footer className="bg-logo flex flex-col items-center gap-[10px] py-[30px]">
        <div className="flex justify-center gap-[60px]">
          <div className="flex flex-col gap-[10px] max-w-[370px]">
            <Link
              href="/"
              className="flex items-center gap-[5px]"
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
                <span className="font-bayon text-[20px] font-medium leading-[25px] text-white">
                  Obour STEM
                </span>
                <span className="font-advent text-[16px] leading-[15px] tracking-[2px] text-white">
                  High School
                </span>
              </div>
            </Link>
            <span className="text-white font-inter text-[13px]">Empowering young minds to think boldly, learn deeply, and shape the future. Where imagination meets purpose, and students design the world they want to live in.</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="font-ibm font-[700] text-[15px] text-white">Quick Links</span>
            <ul className="flex flex-col gap-[15px] pl-[50px]">
              <Link href={"/"}><li className="relative text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white">About</li></Link>
              <Link href={"/"}><li className="relative text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white">Programs</li></Link>
              <Link href={"/"}><li className="relative text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white">Contests</li></Link>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <span className="font-ibm font-[700] text-[15px] text-white">Social Media</span>
            <ul className="flex flex-col gap-[15px] pl-[50px]">
              <Link href={"/"}><li className="relative text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white">Facebook</li></Link>
              <Link href={"/"}><li className="relative text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white">LinkedIn</li></Link>
              <Link href={"/"}><li className="relative text-white font-inter text-[13px] transition-all duration-200 hover:translate-x-[4px] hover:drop-shadow-[0_0_8px_rgba(128,255,234,0.75)] before:absolute before:left-0 before:-bottom-[4px] before:h-[1px] before:w-0 before:bg-white/60 before:transition-all before:duration-200 hover:before:w-full hover:before:bg-white">Instagram</li></Link>
            </ul>
          </div>
          <div className="group">
            <div className="bg-white/70 rounded-[5px] py-[5px] flex justify-center">
              <span className="text-logo font-ibm font-[900] text-[15px]">Designed & Coded By</span>
            </div>
            <button
              type="button"
              onClick={openBio}
              className="font-roboto font-[900] text-[32px] uppercase bg-gradient-to-b from-white to-white/0 bg-clip-text text-transparent transition-all duration-300 hover:tracking-[2px] hover:drop-shadow-[0_0_12px_rgba(128,255,234,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
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
            className={`relative w-full max-w-[500px] overflow-hidden rounded-[14px] border border-logo/25 bg-white/95 p-[32px] text-[#0b1020] shadow-[0_25px_80px_rgba(27,32,57,0.22)] opacity-0 ${cardAnimationClass}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-ibm text-[14px] uppercase tracking-[6px] text-logo/70 font-[600]">
                  Creative Technologist
                </span>
                <h2
                  id={`${bioDialogId}-title`}
                  className="mt-[6px] font-roboto text-[28px] font-bold uppercase tracking-[4px] text-logo"
                >
                  Hazem Karam
                </h2>
              </div>
              <button
                type="button"
                onClick={closeBio}
                className="rounded-full border border-logo/30 px-[14px] py-[6px] text-[12px] uppercase tracking-[2px] text-logo/70 transition-all duration-200 hover:border-logo hover:bg-logo/10 hover:text-logo cursor-pointer"
                aria-label="Close bio"
              >
                Close
              </button>
            </div>

            <p className="mt-[22px] font-inter text-[14px] leading-[1.8] text-[#1d2233]">
              I am a full-stack developer focused on building immersive digital experiences for STEM learners. With a background in interactive media and UX strategy, I transform complex concepts into engaging, future-ready web products.
            </p>

            <div className="mt-[24px] space-y-[12px] text-[13px] text-[#1d2233]/80">
              <div className="flex gap-[12px]">
                <span className="inline-flex min-w-[110px] font-ibm uppercase tracking-[3px] text-logo/60 font-[600]">
                  Strengths
                </span>
                <span>Design systems, narrative UX, responsive engineering</span>
              </div>
              <div className="flex gap-[12px]">
                <span className="inline-flex min-w-[110px] font-ibm uppercase tracking-[3px] text-logo/60 font-[600]">
                  Stack
                </span>
                <span>Next.js, TypeScript, Tailwind CSS, Three.js, Figma</span>
              </div>
              <div className="flex gap-[12px]">
                <span className="inline-flex min-w-[110px] font-ibm uppercase tracking-[3px] text-logo/60 font-[600]">
                  Mission
                </span>
                <span>Elevate Egyptian STEM education with cinematic web storytelling</span>
              </div>
            </div>

            <div className="mt-[28px] flex flex-wrap items-center gap-[12px]">
              <a
                href="mailto:hazemyacopbusiness@gmail.com"
                className="rounded-full border border-logo/30 px-[18px] py-[10px] text-[12px] uppercase tracking-[3px] text-logo transition-all duration-200 hover:border-logo hover:bg-logo/10"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/hazem-yacop/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-logo/30 px-[18px] py-[10px] text-[12px] uppercase tracking-[3px] text-logo transition-all duration-200 hover:border-logo hover:bg-logo/10"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/HazemYacop"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-logo/30 px-[18px] py-[10px] text-[12px] uppercase tracking-[3px] text-logo transition-all duration-200 hover:border-logo hover:bg-logo/10"
              >
                GitHub
              </a>
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
