import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function Button({
  children,
  href = "/contact",
  secondary = false,
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="muted">{children}</p>}
    </div>
  );
}
export function ImagePlaceholder({
  label,
  variant = "roof",
  priority = false,
  imageSrc,
}: {
  label: string;
  variant?: "roof" | "building";
  priority?: boolean;
  imageSrc?: string;
}) {
  return (
    <figure
      className={`visual visual-${variant}${imageSrc ? " visual-generated" : ""}`}
    >
      <Image
        src={imageSrc ?? `/images/${variant}-placeholder.svg`}
        alt={label}
        fill
        sizes="(max-width: 760px) 100vw, 55vw"
        priority={priority}
      />
      <figcaption>
        <span className="status-dot" /> {label}
      </figcaption>
    </figure>
  );
}
