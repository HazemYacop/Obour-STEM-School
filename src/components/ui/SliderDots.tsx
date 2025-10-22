type SliderDotsProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
};

export function SliderDots({
  count,
  activeIndex,
  onSelect,
  className = "",
}: SliderDotsProps) {
  const containerClasses = [
    "flex items-center justify-center gap-[5px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (count <= 1) {
    return null;
  }

  return (
    <div className={containerClasses} role="tablist" aria-label="Hero background">
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        const dotClasses = [
          "h-3 w-3 rounded-full border border-white transition-colors duration-300 cursor-pointer",
          isActive ? "bg-white" : "bg-transparent hover:bg-white/70",
        ].join(" ");

        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Show slide ${index + 1}`}
            className={dotClasses}
            onClick={() => onSelect(index)}
          />
        );
      })}
    </div>
  );
}

export default SliderDots;
