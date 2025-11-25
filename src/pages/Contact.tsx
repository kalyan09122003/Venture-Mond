import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Linkedin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { toast } from "sonner";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    division: searchParams.get("model") === "studio" ? "studio" : searchParams.get("model") === "saas" ? "saas" : "",
    service: searchParams.get("service") || "",
    message: "",
    budget: "",
    timeline: "",
  });

  const isPartner = searchParams.get("type") === "partner";

  const studioServices = [
    "Research & Validation",
    "MVP / Product Development (Web, App, SaaS)",
    "Product Roadmaps & Tech Strategy",
    "Growth & Go-To-Market",
  ];

  const saasServices = ["Venturemond Workspace"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      division: "",
      service: "",
      message: "",
      budget: "",
      timeline: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      // Reset service when division changes
      ...(field === "division" ? { service: "" } : {}),
    }));
  };

  const heroTitle = isPartner
    ? formData.division === "studio"
      ? "Partner With Venturemond Studio"
      : formData.division === "saas"
      ? "Partner With Venturemond SaaS"
      : "Partner With Venturemond"
    : "Get in Touch";

  return (
    <>
      <Hero
        title={heroTitle}
        subtitle="We're here to help you build what's next. Share your idea, and our team will get back to you within 24 hours."
        variant="centered"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
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
                <Label htmlFor="company">Company / Startup Name</Label>
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
                <Label>What are you interested in? *</Label>
                <RadioGroup
                  value={formData.division}
                  onValueChange={(value) => handleChange("division", value)}
                  className="mt-3 space-y-3"
                >
                  <div className="flex items-start space-x-3 border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <RadioGroupItem value="studio" id="studio" className="mt-1" />
                    <Label htmlFor="studio" className="cursor-pointer flex-1">
                      <span className="font-semibold text-foreground block mb-1">
                        Venturemond Studio
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Build a product or startup with us
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <RadioGroupItem value="saas" id="saas" className="mt-1" />
                    <Label htmlFor="saas" className="cursor-pointer flex-1">
                      <span className="font-semibold text-foreground block mb-1">
                        Venturemond SaaS
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Explore our software solutions
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.division && (
                <div>
                  <Label htmlFor="service">Choose a Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {(formData.division === "studio" ? studioServices : saasServices).map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="message">Brief About Your Project *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your idea, goals, and what you're looking to build..."
                  className="mt-1.5 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select a budget range (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-2">Under ₹2 Lakhs / $2,500</SelectItem>
                    <SelectItem value="2-5">₹2-5 Lakhs / $2,500-$6,000</SelectItem>
                    <SelectItem value="5-10">₹5-10 Lakhs / $6,000-$12,000</SelectItem>
                    <SelectItem value="above-10">Above ₹10 Lakhs / $12,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline">How Soon Do You Want to Start?</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select a timeline (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">In 2-3 months</SelectItem>
                    <SelectItem value="exploring">Exploring for now</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you build what's next. Select your division, share your idea, and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:hello@venturemond.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@venturemond.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground">
                      4th Floor, Bizness Square, Hitec City
                      <br />
                      Hyderabad – 500084
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/venturemond"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-4">Reach out to our Team</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+919618271171" className="text-foreground hover:text-primary transition-colors">
                      +91 9618271171
                    </a>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://wa.me/919618271171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
