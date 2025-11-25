import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Cpu, CheckCircle, Lock, Cloud, Workflow, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const SaaSPage = () => {
  const buildProcess = [
    { title: "Discovery & Problem Definition", description: "Understanding user needs and defining the solution" },
    { title: "Product Architecture", description: "Designing scalable, secure system architecture" },
    { title: "Development & Integration", description: "Building and integrating with modern tech stack" },
    { title: "Launch & Iterate", description: "Continuous deployment and user-driven improvements" },
  ];

  const techStack = [
    "Next.js", "Node.js", "Python", "MongoDB", "Firebase", "AWS", "LangChain"
  ];

  const advantages = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy-First",
      description: "Your data stays yours. Built with security at the core.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance-Focused",
      description: "Lightning-fast experiences that scale with your growth.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Design-Led UX",
      description: "Beautiful interfaces that users love to use.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Scalable Architecture",
      description: "Built to handle growth from day one.",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Integration Ready",
      description: "APIs and webhooks for seamless connectivity.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Roadmap",
      description: "We build with customer feedback at the center.",
    },
  ];

  return (
    <>
      <Hero
        title="Building Smarter Software for the Modern World."
        subtitle="SaaS creates intelligent, secure, and scalable products that empower teams and organizations to work better and grow stronger."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="#workspace">Explore Venturemond Workspace</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/workspace-waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </Hero>

      {/* About SaaS */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Software that thinks, scales, and performs.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Our SaaS division builds modern, cloud-first tools that simplify complexity, automate processes, and help organizations focus on growth.
            </p>
            <p>
              With a focus on privacy, intelligence, and experience, we create products that don't just work — they work smarter.
            </p>
            <p className="text-xl font-semibold text-primary italic">
              "We don't just build software. We build systems that work smarter."
            </p>
          </div>
        </div>
      </Section>

      {/* Flagship Product - Workspace */}
      <Section background="muted" id="workspace">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Flagship Product
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Venturemond Workspace: Private. Smart. Seamless.
            </h2>
            <p className="text-lg text-muted-foreground">
              A unified intelligent workspace combining collaboration, storage, and automation in one private, secure platform built for modern teams.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <Lock />, text: "Secure document and file collaboration" },
              { icon: <Cpu />, text: "AI-assisted productivity tools" },
              { icon: <Workflow />, text: "Workflow automation" },
              { icon: <Users />, text: "Role-based user controls" },
              { icon: <Cloud />, text: "Private cloud deployment" },
              { icon: <Zap />, text: "Integration-ready APIs" },
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-4 border border-border flex items-start space-x-3">
                <div className="text-primary flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-foreground">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/workspace-waitlist">Join Waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact?model=saas&service=workspace">Request Early Access</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Product Suite */}
      <Section>
        <SectionHeader
          title="Expanding the future of work."
          description="Building an ecosystem of intelligent, connected products."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Workspace", status: "Live", description: "Private, intelligent workspace platform" },
            { name: "Automate", status: "Prototype", description: "Workflow automation engine" },
            { name: "CRM", status: "Research", description: "Customer relationship management" },
            { name: "Desk AI", status: "Concept", description: "AI-powered support assistant" },
          ].map((product) => (
            <div key={product.name} className="bg-card rounded-xl p-6 border border-border hover-lift">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  product.status === "Live" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {product.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Build */}
      <Section background="muted">
        <SectionHeader
          title="From concept to product — fast, focused, and reliable."
          centered
        />
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {buildProcess.map((step, index) => (
            <div key={step.title} className="flex items-start space-x-4 bg-card rounded-xl p-6 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Built with Modern Technology
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Venturemond SaaS */}
      <Section>
        <SectionHeader
          title="Why Venturemond SaaS"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="muted">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Future of Work Starts Here.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access to Venturemond Workspace, or partner with us to build the next generation of SaaS products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/workspace-waitlist">Join Waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact?model=saas&type=partner&product=workspace">Partner With Venturemond SaaS</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SaaSPage;
