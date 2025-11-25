import { Link } from "react-router-dom";
import { ArrowRight, Search, Code, Map, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const Studio = () => {
  const pillars = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Research & Validation",
      description: (
        <ul className="space-y-2 text-sm">
          <li>• Market research & opportunity mapping</li>
          <li>• Problem-solution fit analysis</li>
          <li>• Competitive positioning</li>
          <li>• User persona & early feedback testing</li>
        </ul>
      ),
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "MVP & Product Development",
      description: (
        <ul className="space-y-2 text-sm">
          <li>• Web & SaaS platforms</li>
          <li>• Mobile apps (React Native / Flutter)</li>
          <li>• Product UI/UX design</li>
          <li>• Full-stack engineering</li>
        </ul>
      ),
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Product Roadmaps & Tech Strategy",
      description: (
        <ul className="space-y-2 text-sm">
          <li>• 12-18 month product roadmap</li>
          <li>• Architecture & scalability planning</li>
          <li>• Feature prioritization & release strategy</li>
          <li>• Progress tracking (OKRs & KPIs)</li>
        </ul>
      ),
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth & Go-To-Market",
      description: (
        <ul className="space-y-2 text-sm">
          <li>• GTM planning & launch roadmap</li>
          <li>• Funnel design (acquisition → retention)</li>
          <li>• Community & partnership building</li>
          <li>• Performance tracking & optimization</li>
        </ul>
      ),
    },
  ];

  const process = [
    { title: "Discovery Call", description: "Understanding your vision, goals, and challenges" },
    { title: "Validation Sprint", description: "Market research, competitive analysis, and feasibility" },
    { title: "Build Sprint", description: "Design, development, and iterative testing" },
    { title: "Launch", description: "Go-to-market execution and initial user acquisition" },
    { title: "Scale", description: "Optimization, growth strategies, and continuous improvement" },
  ];

  const advantages = [
    { title: "Speed", description: "Structured sprints get you to market faster" },
    { title: "Full-Stack Team", description: "Design, development, and strategy under one roof" },
    { title: "Startup Thinking", description: "Move fast with engineering discipline" },
    { title: "Long-Term Support", description: "Partnership doesn't end at launch" },
    { title: "Clarity & Structure", description: "Clear milestones, timelines, and deliverables" },
    { title: "Proven Process", description: "Battle-tested methodology that delivers results" },
  ];

  return (
    <>
      <Hero
        variant="centered"
        title="From Idea to Product — We Build Ventures That Scale."
        subtitle="Studio partners with founders and businesses to research, validate, and build technology products that grow."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/contact?model=studio&type=partner">
              Partner With Studio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </Hero>

      {/* About the Studio */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            We're not an agency. We're your co-build partner.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Most ideas fail in execution, not imagination. The gap between a great concept and a successful product is filled with research, validation, strategic decisions, and relentless building.
            </p>
            <p>
              Studio combines startup thinking, technical precision, and business clarity. We don't just build what you ask for — we help you discover what needs to be built, validate it with real users, and execute it with speed and accountability.
            </p>
            <p className="text-xl font-semibold text-primary italic">
              "We don't just build projects. We build ventures."
            </p>
          </div>
        </div>
      </Section>

      {/* Four Pillars */}
      <Section background="muted">
        <SectionHeader
          title="What We Do: Four Pillars of Venturemond Studio"
          description="End-to-end venture building from research to growth"
          centered
        />
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <SectionHeader
          title="A process built for clarity and speed."
          description="Our structured approach ensures you always know what's happening and what's next."
          centered
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {process.map((step, index) => (
            <div key={step.title} className="flex items-start space-x-4 bg-card rounded-xl p-6 border border-border hover-lift">
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

      </Section>

      {/* Why Founders Choose Venturemond */}
      <Section background="muted">
        <SectionHeader
          title="Why Founders Choose Venturemond Studio"
          centered
        />
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-6 border border-border">
              <CheckCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's design, build, and launch your venture with structure and clarity. Partner with Studio today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact?model=studio&type=partner">Partner With Studio</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact?model=studio">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Studio;
