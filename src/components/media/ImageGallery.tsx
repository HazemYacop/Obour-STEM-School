"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SliderDots } from "../ui/SliderDots";
import type { TouchEvent } from "react";

type SlideCaption = {
  title?: string;
  description?: string;
};

type ImageGalleryProps = {
  images: string[];
  autoAdvanceInterval?: number;
  className?: string;
  overlayClassName?: string;
  slideCaptions?: SlideCaption[];
};

export function ImageGallery({
  images,
  autoAdvanceInterval = 7000,
  className = "",
  overlayClassName = "",
  slideCaptions,
}: ImageGalleryProps) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const captions = useMemo(() => {
    if (!slideCaptions || slideCaptions.length !== slides.length) {
      return slides.map(() => ({ title: "", description: "" }));
    }
    return slideCaptions;
  }, [slideCaptions, slides]);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    if (!slides.length) {
      return;
    }

    setActiveIndex((prev) => (prev >= slides.length ? 0 : prev));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    if (slides.length <= 1) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    if (slides.length <= 1) {
      return;
    }
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1 || autoAdvanceInterval <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      goToNext();
    }, autoAdvanceInterval);

    return () => window.clearTimeout(timer);
  }, [activeIndex, autoAdvanceInterval, goToNext, slides.length]);

  if (!slides.length) {
    return null;
  }

  const wrapperClasses = ["relative overflow-hidden rounded-[5px]", className]
    .filter(Boolean)
    .join(" ");

  const overlayClasses = overlayClassName
    ? ["pointer-events-none absolute inset-0", overlayClassName]
        .filter(Boolean)
        .join(" ")
    : null;

  const captionOverlayClass = [
    "pointer-events-none absolute inset-0",
    "backdrop-blur-[14px] lg:backdrop-blur-[12px]",
    "bg-gradient-to-t from-black/95 via-black/60 to-transparent",
  ]
    .filter(Boolean)
    .join(" ");
  const captionOverlayStyle = {
    maskImage:
      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage:
      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0) 100%)",
  };

  const showControls = slides.length > 1;

  const handleSelect = (index: number) => {
    if (index < 0 || index >= slides.length) {
      return;
    }
    setActiveIndex(index);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (slides.length <= 1) {
      return;
    }
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
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

  return (
    <div
      className={wrapperClasses}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((src, index) => {
          const isActive = index === activeIndex;
          const caption = captions[index] ?? { title: "", description: "" };
          const showCaption = Boolean(caption.title || caption.description);

          return (
            <div key={`${src}-${index}`} className="relative h-full w-full flex-shrink-0 overflow-hidden">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-[7000ms] ease-out"
                style={{ transform: `scale(${isActive ? 1.05 : 1})` }}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={index === 0}
              />

              {showCaption && (
                <>
                  <div className={captionOverlayClass} style={captionOverlayStyle} />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 px-4 pb-12 text-center text-white sm:px-6 sm:pb-[70px] sm:text-left">
                    {caption.title && (
                      <h1 className="text-xl font-semibold leading-tight text-white sm:text-3xl">
                        {caption.title}
                      </h1>
                    )}
                    {caption.description && (
                      <p className="text-sm text-white/90 sm:text-base sm:text-white">
                        {caption.description}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {overlayClasses && <div className={overlayClasses} />}
      {showControls && (
        <SliderDots
          count={slides.length}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 md:flex"
        />
      )}
    </div>
  );
}

export default ImageGallery;
