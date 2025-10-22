'use client';

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { PrimaryButton, type ButtonIcon } from "../ui/PrimaryButton";
import { SecondaryButton } from "../ui/SecondaryButton";
import { SliderDots } from "../ui/SliderDots";

const DEFAULT_BACKGROUNDS = [
  "/home-hero-bg-1.jpg",
  "/home-hero-bg-2.jpg",
  "/home-hero-bg-3.jpg",
  "/home-hero-bg-4.jpg",
];

type HeroCta = {
  label: ReactNode;
  href: string;
  leadingIcon?: ButtonIcon;
  trailingIcon?: ButtonIcon;
};

type HeroSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  backgroundImage?: string;
  backgroundImages?: string[];
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  className?: string;
  overlayClassName?: string;
  autoAdvanceInterval?: number;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  backgroundImage,
  backgroundImages,
  primaryCta,
  secondaryCta,
  className = "",
  overlayClassName = "",
  autoAdvanceInterval = 10000,
}: HeroSectionProps) {
  const resolvedBackgrounds = useMemo(() => {
    if (backgroundImages?.length) {
      return backgroundImages;
    }

    if (backgroundImage) {
      return [backgroundImage];
    }

    return DEFAULT_BACKGROUNDS;
  }, [backgroundImage, backgroundImages]);

  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = resolvedBackgrounds.length;
  const shouldAutoAdvance = slideCount > 1 && autoAdvanceInterval > 0;

  useEffect(() => {
    if (slideCount === 0) {
      return;
    }

    setActiveIndex((prev) => (prev >= slideCount ? 0 : prev));
  }, [slideCount]);

  useEffect(() => {
    if (!shouldAutoAdvance) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, autoAdvanceInterval);

    return () => window.clearTimeout(timer);
  }, [activeIndex, autoAdvanceInterval, shouldAutoAdvance, slideCount]);

  const handleSelectSlide = (index: number) => {
    if (index < 0 || index >= slideCount) {
      return;
    }

    setActiveIndex(index);
  };

  const wrapperClassNames = [
    "relative flex flex-col justify-end overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const overlayClassNames = [
    "absolute inset-0 backdrop-blur-[10px]",
    "bg-[rgba(0,0,0,.4)]",
    "[mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_49%,rgba(115,115,115,0)_100%)]",
    "[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_49%,rgba(115,115,115,0)_100%)]",
    "pointer-events-none",
    overlayClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const showCtas = Boolean(primaryCta || secondaryCta);

  return (
    <section className={wrapperClassNames}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {resolvedBackgrounds.map((src, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={`${src}-${index}`} className="relative h-full w-full flex-shrink-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${src})`,
                    transform: `scale(${isActive ? 1.08 : 1})`,
                    transition: "transform 10s ease-out",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={overlayClassNames} />

      <div className="relative z-10 flex flex-col text-white">
        <div className="flex flex-col gap-[27px] px-[var(--padding-root)] pb-[90px] pt-[300px]">
          <div className="flex flex-col gap-[20px]">
            {eyebrow && <p>{eyebrow}</p>}
            <h1 className="leading-[30px]">{title}</h1>
          </div>
          <p className="w-full sm:w-[70%] md:w-[45%]">{description}</p>

          {showCtas && (
            <div className="flex flex-wrap items-center gap-[14px]">
              {primaryCta && (
                <PrimaryButton
                  href={primaryCta.href}
                  leadingIcon={primaryCta.leadingIcon}
                  trailingIcon={primaryCta.trailingIcon}
                >
                  {primaryCta.label}
                </PrimaryButton>
              )}
              {secondaryCta && (
                <SecondaryButton href={secondaryCta.href} className="text-white">
                  {secondaryCta.label}
                </SecondaryButton>
              )}
            </div>
          )}
        </div>

        <SliderDots
          count={slideCount}
          activeIndex={activeIndex}
          onSelect={handleSelectSlide}
          className="mt-auto pb-[30px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
