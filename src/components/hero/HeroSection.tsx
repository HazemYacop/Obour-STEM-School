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
    "relative mx-auto flex w-full max-w-[1920px] min-h-[520px] sm:min-h-[560px] lg:min-h-[640px] flex-col justify-end overflow-hidden rounded-b-[20px] sm:rounded-b-[24px] lg:rounded-b-[32px]",
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

      <div className="relative z-10 flex flex-col items-center text-white">
        <div className="w-full px-6 pb-16 pt-[180px] sm:px-10 sm:pb-20 sm:pt-[240px] md:px-16 lg:px-20 lg:pb-[90px] lg:pt-[300px]">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-[20px]">
            <div className="flex max-w-[720px] flex-col gap-[8px]">
              {eyebrow && <p className="text-sm uppercase tracking-[3px] text-white/80 sm:text-base">{eyebrow}</p>}
              <h1 className="leading-tight text-3xl sm:text-4xl md:text-[44px] md:leading-[50px]">{title}</h1>
            </div>
            <p className="w-full max-w-[560px] text-[16px] sm:text-base md:text-[17px] md:leading-relaxed">
              {description}
            </p>

            {showCtas && (
              <div className="flex w-full max-w-[460px] flex-wrap items-center gap-[14px]">
                {primaryCta && (
                  <PrimaryButton
                    href={primaryCta.href}
                    leadingIcon={primaryCta.leadingIcon}
                    trailingIcon={primaryCta.trailingIcon}
                    className="w-[200px]"
                  >
                    {primaryCta.label}
                  </PrimaryButton>
                )}
                {secondaryCta && (
                  <SecondaryButton
                    href={secondaryCta.href}
                    className="w-[200px] text-white"
                  >
                    {secondaryCta.label}
                  </SecondaryButton>
                )}
              </div>
            )}
          </div>
        </div>

        <SliderDots
          count={slideCount}
          activeIndex={activeIndex}
          onSelect={handleSelectSlide}
          className="mx-auto mt-auto pb-6 sm:pb-8 lg:pb-[30px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
