import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted";
  id?: string;
}

const Section = ({ children, className = "", background = "default", id }: SectionProps) => {
  return (
    <section id={id} className={`section-padding ${background === "muted" ? "bg-muted" : ""} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
};

export default Section;
