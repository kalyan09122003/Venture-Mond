import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  variant?: "default" | "centered";
}

const Hero = ({ title, subtitle, children, variant = "default" }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a085' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className={`max-w-4xl ${variant === "centered" ? "mx-auto text-center" : ""}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <div className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              {subtitle}
            </div>
          )}
          {children && (
            <div
              className="animate-fade-in flex justify-center items-center gap-4"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
