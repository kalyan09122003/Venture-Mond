import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => {
  const roles = [
    {
      title: "Full Stack Developer",
      experience: "0-3 years",
      description: "Join our engineering team to build scalable web applications and SaaS products using modern tech stack.",
      responsibilities: [
        "Develop and maintain web applications using React, Next.js, and Node.js",
        "Build RESTful APIs and integrate with databases",
        "Collaborate with design and product teams",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
      ],
    },
    {
      title: "Business Development Executive",
      experience: "0-3 years",
      description: "Help us grow partnerships and bring exciting ventures to life by connecting with founders and businesses.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build relationships with potential clients and partners",
        "Present Venturemond's services to founders and businesses",
        "Support sales pipeline and client onboarding",
        "Collaborate with Studio and SaaS teams on project scoping",
      ],
    },
  ];

  const applyProcess = [
    "Send your CV and portfolio/GitHub links to hello@venturemond.com",
    "Include the role title in your email subject",
    "Write a short note about why you want to join Venturemond",
    "We'll review and get back to you within 5-7 business days",
  ];

  return (
    <>
      <Hero
        title="Join the Venturemond Journey"
        subtitle="Founder-led, execution-focused culture. We like builders who ship."
      />

      {/* About the Team */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Small Team. Big Impact.
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            At Venturemond, we're obsessed with execution, learning, and ownership. We're a small, focused, full-stack team that moves fast and builds things that matter.
          </p>
          <p className="text-lg text-muted-foreground">
            If you're passionate about building ventures, shipping products, and growing with a founder-led team, you'll fit right in.
          </p>
        </div>
      </Section>

      {/* Open Roles */}
      <Section background="muted">
        <SectionHeader
          title="Open Roles"
          description="We're looking for talented individuals to join our growing team."
          centered
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {roles.map((role) => (
            <Card key={role.title} className="hover-lift">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{role.title}</h3>
                    <p className="text-muted-foreground">Experience: {role.experience}</p>
                  </div>
                  <Button asChild className="mt-4 md:mt-0">
                    <a href={`mailto:hello@venturemond.com?subject=Application for ${role.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-6">{role.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {role.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Application Process */}
      <Section>
        <SectionHeader
          title="How to Apply"
          description="Simple and straightforward application process."
          centered
        />
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {applyProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 bg-card rounded-lg p-6 border border-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <a href="mailto:hello@venturemond.com">
                <Mail className="mr-2 h-5 w-5" />
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="muted">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't see a role that fits?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your profile and let's explore opportunities together.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:hello@venturemond.com?subject=General Application">
              Get in Touch
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Careers;
