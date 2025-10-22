import Link from "next/link";
import type { ReactNode } from "react";

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type SecondaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  prefetch?: boolean;
};

export function SecondaryButton({
  children,
  href,
  className = "",
  type = "button",
  target,
  rel,
  prefetch,
}: SecondaryButtonProps) {
  const classNames = ["sec-btn", "group", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="transition-transform duration-300 group-hover:-translate-x-1 group-focus-visible:-translate-x-1">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none flex h-4 w-0 items-center justify-center translate-x-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:w-5 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
      >
        <ArrowRightIcon className="h-4 w-4" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classNames}
        target={target}
        rel={rel}
        prefetch={prefetch}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames}>
      {content}
    </button>
  );
}

export default SecondaryButton;
