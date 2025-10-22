import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonIcon = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  ariaHidden?: boolean;
};

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  leadingIcon?: ButtonIcon;
  trailingIcon?: ButtonIcon;
  type?: "button" | "submit" | "reset";
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  prefetch?: boolean;
};

const renderIcon = (icon?: ButtonIcon) => {
  if (!icon) {
    return null;
  }

  const {
    src,
    alt = "",
    width = 35,
    height = 40,
    className,
    priority,
    ariaHidden = alt.length === 0,
  } = icon;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      aria-hidden={ariaHidden}
    />
  );
};

export function PrimaryButton({
  children,
  href,
  className = "",
  leadingIcon,
  trailingIcon,
  type = "button",
  target,
  rel,
  prefetch,
}: PrimaryButtonProps) {
  const classNames = ["pri-btn", "group", className].filter(Boolean).join(" ");
  const showPlaceholders = Boolean(leadingIcon || trailingIcon);
  const leadingPlaceholderWidth =
    leadingIcon?.width ?? trailingIcon?.width ?? 35;
  const trailingPlaceholderWidth =
    trailingIcon?.width ?? leadingIcon?.width ?? 35;

  const leadingNode = leadingIcon ? (
    <span className="relative z-10 flex-shrink-0">{renderIcon(leadingIcon)}</span>
  ) : showPlaceholders ? (
    <span
      aria-hidden="true"
      className="relative z-10 inline-block flex-shrink-0"
      style={{ width: leadingPlaceholderWidth }}
    />
  ) : null;

  const trailingNode = trailingIcon ? (
    <span className="relative z-10 flex-shrink-0">{renderIcon(trailingIcon)}</span>
  ) : showPlaceholders ? (
    <span
      aria-hidden="true"
      className="relative z-10 inline-block flex-shrink-0"
      style={{ width: trailingPlaceholderWidth }}
    />
  ) : null;

  const labelClasses = [
    "font-semibold",
    showPlaceholders ? "flex-1 text-center" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const overlays = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C18A49] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-full -ml-3 opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 487 487"
        >
          <path
            fill="#C18A49"
            fillOpacity={0.4}
            fillRule="nonzero"
            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
          />
        </svg>
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-12 -mr-3 opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover"
          viewBox="0 0 487 487"
        >
          <path
            fill="#C18A49"
            fillOpacity={0.4}
            fillRule="nonzero"
            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
          />
        </svg>
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-white/30 opacity-30"
      />
    </>
  );

  const content = (
    <>
      {overlays}
      <span
        className={[
          "relative z-10 flex w-full items-center gap-2",
          showPlaceholders ? "justify-between" : "justify-center",
        ].join(" ")}
      >
        {leadingNode}
        <span className={labelClasses}>{children}</span>
        {trailingNode}
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

export default PrimaryButton;
