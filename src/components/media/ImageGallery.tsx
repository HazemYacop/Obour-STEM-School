"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { SliderDots } from "../ui/SliderDots";

type ImageGalleryProps = {
  images: string[];
  autoAdvanceInterval?: number;
  className?: string;
  overlayClassName?: string;
};

export function ImageGallery({
  images,
  autoAdvanceInterval = 7000,
  className = "",
  overlayClassName = "",
}: ImageGalleryProps) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) {
      return;
    }

    setActiveIndex((prev) => (prev >= slides.length ? 0 : prev));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1 || autoAdvanceInterval <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoAdvanceInterval);

    return () => window.clearTimeout(timer);
  }, [activeIndex, autoAdvanceInterval, slides.length]);

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

  const showControls = slides.length > 1;

  const handleSelect = (index: number) => {
    if (index < 0 || index >= slides.length) {
      return;
    }
    setActiveIndex(index);
  };

  return (
    <div className={wrapperClasses}>
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((src, index) => {
          const isActive = index === activeIndex;

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
          className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2"
        />
      )}
    </div>
  );
}

export default ImageGallery;
