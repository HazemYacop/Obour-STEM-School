"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

type SiteNavbarProps = {
  brand: {
    href: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
  };
  items: NavItem[];
  className?: string;
};

export function SiteNavbar({ brand, items, className = "" }: SiteNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperClasses = [
    "fixed left-1/2 z-20 flex w-[90vw] sm:w-[80vw] lg:w-[750px] max-w-[750px] -translate-x-1/2 items-center justify-between rounded-[5px] bg-[rgba(255,255,255,0.25)] px-4 sm:px-6 lg:px-[30px] py-2 sm:py-[9px] top-4 sm:top-6 lg:top-[40px] shadow-[0_0_20px_1px_rgba(0,0,0,0.15)] backdrop-blur-[20px] transition-all duration-300 ease-in-out",
    isMenuOpen ? "opacity-0 pointer-events-none scale-95" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const overflowRef = useRef<string | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      overflowRef.current = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
    } else if (overflowRef.current !== null) {
      document.documentElement.style.overflow = overflowRef.current;
      overflowRef.current = null;
    }

    return () => {
      if (overflowRef.current !== null) {
        document.documentElement.style.overflow = overflowRef.current;
        overflowRef.current = null;
      }
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const mobileMenuId = "site-nav-mobile-menu";

  return (
    <>
      <header className={wrapperClasses}>
        <Link
          href={brand.href}
          className="flex items-center justify-center gap-2 sm:gap-[5px]"
          aria-label={brand.title}
        >
          <Image
            src={brand.imageSrc}
            alt={brand.imageAlt}
            width={45}
            height={45}
            className="h-10 w-10 rounded-full sm:h-11 sm:w-11"
            priority
          />
          <div className="flex flex-col justify-center text-logo">
            <span className="font-bayon text-[18px] font-medium leading-[22px] sm:text-[20px] sm:leading-[25px]">
              {brand.title}
            </span>
            <span className="font-advent text-[13px] leading-[15px] tracking-[2px] sm:text-[16px]">
              {brand.subtitle}
            </span>
          </div>
        </Link>

        <nav className="hidden flex-wrap items-center justify-end gap-2 text-xs md:flex md:gap-[6px] md:text-sm" aria-label="Primary">
          {items.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="nav-link focus-visible:outline-none"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative flex h-9 w-10 items-center justify-center sm:hidden"
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className={[
              "absolute h-[2px] w-6 rounded bg-logo transition-transform duration-300 ease-out",
              isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-[2px] w-6 rounded bg-logo transition-opacity duration-300 ease-out",
              isMenuOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-[2px] w-6 rounded bg-logo transition-transform duration-300 ease-out",
              isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2",
            ].join(" ")}
          />
        </button>
      </header>

      <div
        id={mobileMenuId}
        className={[
          "fixed inset-0 z-30 flex md:hidden transition-opacity duration-300 ease-in-out",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <button
          type="button"
          className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          aria-label="Close navigation overlay"
          onClick={handleCloseMenu}
        />
        <aside
          className={[
            "relative z-10 ml-auto flex h-full w-[78%] max-w-[320px] flex-col gap-8 bg-white px-6 pb-10 pt-8 shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <Link
              href={brand.href}
              className="flex items-center gap-3"
              aria-label={`${brand.title} home`}
              onClick={handleCloseMenu}
            >
              <Image
                src={brand.imageSrc}
                alt={brand.imageAlt}
                width={42}
                height={42}
                className="h-[42px] w-[42px] rounded-full"
                priority
              />
              <div className="flex flex-col text-logo">
                <span className="font-bayon text-[18px] leading-[22px]">
                  {brand.title}
                </span>
                <span className="font-advent text-[13px] tracking-[2px] uppercase">
                  {brand.subtitle}
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={handleCloseMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-logo/10 text-logo transition-colors duration-200 hover:bg-logo/10"
            >
              <span className="sr-only">Close navigation</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5} fill="none">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-logo" aria-label="Mobile primary">
            {items.map(({ label, href }) => (
              <Link
                key={`mobile-${href}`}
                href={href}
                className="flex items-center justify-between rounded-[5px] bg-logo/5 px-4 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-logo/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logo"
                onClick={handleCloseMenu}
              >
                {label}
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-logo/70" stroke="currentColor" strokeWidth={1.5} fill="none">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
export default SiteNavbar;
