import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Rocket, BarChart, Shield, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const howWeWork = [
    { step: "01", title: "Discover", description: "Understand goals and challenges" },
    { step: "02", title: "Validate", description: "Confirm opportunity and market fit" },
    { step: "03", title: "Build", description: "Design and develop the product" },
    { step: "04", title: "Launch", description: "Execute go-to-market plan" },
    { step: "05", title: "Scale", description: "Optimize, iterate, and grow" },
  ];

  const whyChooseUs = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "End-to-End Execution",
      description: "Everything under one roof — from strategy to launch",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Tech + Business + Design",
      description: "Holistic approach combining all critical disciplines",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast, Structured Sprints",
      description: "Ship quickly without compromising quality",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Startup Thinking",
      description: "Engineering discipline meets entrepreneurial speed",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Long-Term Partnership",
      description: "We're invested in your success beyond launch",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "Real ventures built and scaled with real results",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="centered"
        title={
          <>
            Innovating the Future,<br />
            One Byte at a Time.
          </>
        }
        subtitle="Venturemond builds and scales the next generation of ventures and software products — combining product strategy, design, and engineering to turn bold ideas into scalable realities."
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button size="lg" asChild>
            <Link to="/studio">
              Explore Studio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/saas">
              Explore SaaS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Hero>

      {/* About Venturemond */}
      <Section>
        <SectionHeader
          label="About Venturemond"
          title="We don't just build. We execute."
          description="Venturemond is a full-stack venture company with two core divisions: Studio — our venture-building arm for going from idea to product and scale. SaaS — our product division creating intelligent, privacy-first tools."
          centered
        />
        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-primary">
            One mission. Two engines. Infinite possibilities.
          </p>
        </div>
      </Section>

      {/* Studio Preview */}
      <Section background="muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              ⚙️ Venturemond Studio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building ventures from zero to scale.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We partner with founders to research, validate, and build technology products that grow. From market research to MVP development, product strategy to go-to-market execution — Studio is your co-build partner.
            </p>
            <Button asChild>
              <Link to="/studio">
                Explore Studio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-primary/5 rounded-2xl p-12 border-2 border-primary/20">
            <div className="space-y-4">
              {["Research & Validation", "MVP Development", "Product Roadmaps", "Growth & GTM"].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SaaS Preview */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-primary/5 rounded-2xl p-12 border-2 border-primary/20">
            <div className="space-y-4">
              {["Secure Collaboration", "AI-Powered Tools", "Workflow Automation", "Enterprise Ready"].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              💡 Venturemond SaaS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building smarter software for modern work.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our SaaS division creates intelligent, privacy-first products that empower teams and organizations. Secure, scalable, and design-led — we build software that works smarter, not harder.
            </p>
            <Button asChild>
              <Link to="/saas">
                Explore SaaS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Featured Product - Workspace */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Featured Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Venturemond Workspace: Private. Smart. Seamless.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A private, intelligent workspace for teams that value privacy, performance, and productivity. Combining collaboration, automation, and secure cloud infrastructure in one unified platform.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              "Secure cloud collaboration",
              "Integrated productivity tools",
              "Workflow automation",
              "Role-based access control",
              "API & integration ready",
              "Privacy-first architecture",
            ].map((feature) => (
              <div key={feature} className="bg-background rounded-lg p-4 text-left">
                <CheckCircle className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">{feature}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/workspace-waitlist">Join Waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact?model=saas&service=workspace">Request Access</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <SectionHeader
          title="A simple, structured approach to building success."
          description="Our proven process takes you from idea to market with clarity and speed."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {howWeWork.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="bg-primary/10 rounded-xl p-6 h-full hover-lift">
                <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              {index < howWeWork.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
   
      </Section>

      {/* Why Choose Venturemond */}
      <Section background="muted">
        <SectionHeader
          title="Why Founders Choose Venturemond"
          description="We bring together everything you need to turn ideas into scalable realities."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us for bold ideas, fast execution, and future-ready products. Let's turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Index;
