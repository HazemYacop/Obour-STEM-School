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
  const wrapperClasses = [
    "fixed top-[40px] left-1/2 z-11 flex w-[750px] -translate-x-1/2 items-center justify-between rounded-[5px] bg-[rgba(255,255,255,0.25)] px-[30px] py-[9px] shadow-[0_0_20px_1px_rgba(0,0,0,0.15)] backdrop-blur-[20px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={wrapperClasses}>
      <Link
        href={brand.href}
        className="flex items-center justify-center gap-[5px]"
        aria-label={brand.title}
      >
        <Image
          src={brand.imageSrc}
          alt={brand.imageAlt}
          width={45}
          height={45}
          className="rounded-full"
          priority
        />
        <div className="flex flex-col justify-center text-logo">
          <span className="font-bayon text-[20px] font-medium leading-[25px]">
            {brand.title}
          </span>
          <span className="font-advent text-[16px] leading-[15px] tracking-[2px]">
            {brand.subtitle}
          </span>
        </div>
      </Link>

      <nav className="flex gap-[5px]" aria-label="Primary">
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
    </header>
  );
}
export default SiteNavbar;
