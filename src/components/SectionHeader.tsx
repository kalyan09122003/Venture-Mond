import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : ""}`}>
      {label && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
