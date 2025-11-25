import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Lock, Cpu, Cloud, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { toast } from "sonner";

const WorkspaceWaitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    interest: "",
    wantsPartnership: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist form submitted:", formData);
    setSubmitted(true);
    toast.success("🎉 You're in! We'll notify you when early access opens.");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <>
        <Section>
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              🎉 You're in!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We'll notify you when early access to Venturemond Workspace opens.
            </p>
            {formData.wantsPartnership && (
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 mb-8">
                <p className="text-foreground mb-4">
                  Thanks for your interest in partnership opportunities! Our team will reach out to you separately to discuss collaboration.
                </p>
                <Button asChild>
                  <Link to="/contact?model=saas&type=partner&product=workspace">
                    Learn More About Partnerships
                  </Link>
                </Button>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/saas">Explore Venturemond SaaS</Link>
              </Button>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Hero
        title="Join the Venturemond Workspace Waitlist"
        subtitle="Be the first to experience our private, intelligent workspace for modern teams."
        variant="centered"
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          {/* Features Preview */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: <Lock className="h-6 w-6" />, text: "Private & Secure" },
              { icon: <Cpu className="h-6 w-6" />, text: "AI-Powered Tools" },
              { icon: <Cloud className="h-6 w-6" />, text: "Cloud Collaboration" },
              { icon: <Workflow className="h-6 w-6" />, text: "Workflow Automation" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card rounded-lg p-4 border border-border">
                <div className="text-primary">{feature.icon}</div>
                <span className="font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Waitlist Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <h2 className="text-2xl font-bold text-foreground mb-6">Join Early Access</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="company">Company / Organization</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Optional"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="teamSize">Team Size</Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 people</SelectItem>
                    <SelectItem value="6-20">6-20 people</SelectItem>
                    <SelectItem value="20+">20+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="interest">Why you're interested (optional)</Label>
                <Textarea
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                  placeholder="Tell us what you're looking for in a workspace solution..."
                  className="mt-1.5 min-h-[100px]"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="partnership"
                  checked={formData.wantsPartnership}
                  onCheckedChange={(checked) => handleChange("wantsPartnership", checked as boolean)}
                />
                <Label htmlFor="partnership" className="cursor-pointer text-sm leading-relaxed">
                  I'd like to explore partnership opportunities with Venturemond SaaS
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Join Waitlist
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to learn more about Venturemond Workspace or request a demo?
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact?model=saas&service=workspace">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WorkspaceWaitlist;
