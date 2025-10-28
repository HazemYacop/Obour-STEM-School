'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TouchEvent } from "react";
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
  forceCenteredContent?: boolean;
  overlayVariant?: "default" | "vertical";
  contentSpacingClassName?: string;
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
  forceCenteredContent = false,
  overlayVariant = "default",
  contentSpacingClassName = "",
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
  const [hasMounted, setHasMounted] = useState(false);
  const slideCount = resolvedBackgrounds.length;
  const shouldAutoAdvance = slideCount > 1 && autoAdvanceInterval > 0;
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (slideCount === 0) {
      return;
    }

    setActiveIndex((prev) => (prev >= slideCount ? 0 : prev));
  }, [slideCount]);

  const goToNext = useCallback(() => {
    if (slideCount <= 1) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const goToPrev = useCallback(() => {
    if (slideCount <= 1) {
      return;
    }
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (!shouldAutoAdvance) {
      return;
    }

    const timer = window.setTimeout(() => {
      goToNext();
    }, autoAdvanceInterval);

    return () => window.clearTimeout(timer);
  }, [activeIndex, autoAdvanceInterval, shouldAutoAdvance, goToNext]);

  const handleSelectSlide = (index: number) => {
    if (index < 0 || index >= slideCount) {
      return;
    }

    setActiveIndex(index);
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    if (slideCount <= 1) {
      return;
    }
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) {
      return;
    }
    touchDeltaX.current = (event.touches[0]?.clientX ?? 0) - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) {
      return;
    }

    const delta = touchDeltaX.current;
    const threshold = 50;

    if (Math.abs(delta) >= threshold) {
      if (delta < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const wrapperClassNames = [
    "relative flex w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[640px] flex-col justify-end overflow-hidden",
    "min-[1920px]:mx-auto min-[1920px]:max-w-[1200px] min-[1920px]:rounded-b-[24px] min-[2560px]:rounded-b-[32px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const overlayVariantClasses =
    overlayVariant === "vertical"
      ? [
          "backdrop-blur-[12px] lg:backdrop-blur-[10px]",
          "bg-[rgba(0,0,0,0.35)] lg:bg-[rgba(0,0,0,0.4)]",
          "lg:[mask-image:linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0)_100%)]",
          "lg:[-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0)_100%)]",
        ]
      : [
          "backdrop-blur-[12px] lg:backdrop-blur-[10px]",
          "bg-[rgba(0,0,0,0.35)] lg:bg-[rgba(0,0,0,0.4)]",
          "lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_50%,rgba(115,115,115,0)_100%)]",
          "lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_50%,rgba(115,115,115,0)_100%)]",
        ];

  const overlayClassNames = [
    "absolute inset-0 pointer-events-none",
    ...overlayVariantClasses,
    overlayClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const showCtas = Boolean(primaryCta || secondaryCta);

  return (
    <section
      className={wrapperClassNames}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden min-[1920px]:rounded-b-[24px] min-[2560px]:rounded-b-[32px]">
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
                    transform: `scale(${isActive && hasMounted ? 1.08 : 1})`,
                    transition: "transform 10s ease-out",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={[overlayClassNames, "min-[1920px]:rounded-b-[24px] min-[2560px]:rounded-b-[32px]"].join(" ")} />

      <div
        className={[
          "relative z-10 flex flex-col text-white",
          forceCenteredContent ? "items-center" : "items-center lg:items-start",
        ].join(" ")}
      >
        <div
          className={[
            "flex w-full px-6 pb-16 pt-[180px] text-center sm:px-10 sm:pb-20 sm:pt-[240px] md:px-16 lg:px-[20] lg:pb-[50px] lg:pt-[300px]",
            forceCenteredContent ? "justify-center" : "justify-center lg:justify-start",
            forceCenteredContent ? "text-center" : "text-center lg:text-left",
            contentSpacingClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className={[
              "flex w-full max-w-[1100px] flex-col gap-[20px]",
              forceCenteredContent ? "items-center text-center" : "items-center text-center lg:items-start lg:px-[80px] lg:text-left",
            ].join(" ")}
          >
            <div
              className={[
                "flex max-w-[720px] flex-col gap-[8px]",
                forceCenteredContent ? "items-center text-center" : "items-center text-center lg:items-start lg:text-left",
              ].join(" ")}
            >
              {eyebrow && <p className="text-sm uppercase tracking-[2px] text-white/90 sm:text-base">{eyebrow}</p>}
              <h1 className="leading-tight text-3xl sm:text-4xl md:text-[44px] md:leading-[50px]">{title}</h1>
            </div>
            <p
              className={[
                "w-full text-[16px] sm:text-base md:text-[17px] md:leading-relaxed",
                forceCenteredContent ? "max-w-[720px]" : "sm:max-w-[80%] md:max-w-[70%]",
              ].join(" ")}
            >
              {description}
            </p>

            {showCtas && (
              <div
                className={[
                  "flex w-full max-w-[460px] flex-wrap items-center gap-[14px]",
                  forceCenteredContent ? "justify-center" : "justify-center lg:justify-start",
                ].join(" ")}
              >
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
          className="mx-auto mt-auto hidden pb-6 sm:pb-8 md:flex lg:pb-[30px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
