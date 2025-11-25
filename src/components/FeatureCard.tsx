import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string | ReactNode;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <Card className={`hover-lift bg-card border-border ${className}`}>
      <CardContent className="p-6">
        {icon && (
          <div className="mb-4 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <div className="text-muted-foreground">
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
