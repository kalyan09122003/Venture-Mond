import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Lightbulb, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const Blogs = () => {
  const caseStories = [
    {
      title: "Scaling a Logistics Startup from 100 to 10,000 Daily Deliveries",
      category: "Case Study",
      description: "How we built a scalable platform that automated routing, tracking, and customer communication for a rapidly growing logistics company.",
      readTime: "8 min read",
    },
    {
      title: "Building an EdTech Platform in 60 Days",
      category: "Case Study",
      description: "From concept to launch: the story of creating a learning management system that scaled to 50,000 students in the first month.",
      readTime: "6 min read",
    },
    {
      title: "Government Sector Digital Transformation",
      category: "Case Study",
      description: "Modernizing public services with secure, scalable systems that serve millions of citizens.",
      readTime: "10 min read",
    },
  ];

  const founderNotes = [
    {
      title: "The Execution Gap: Why Most Startups Fail After the Idea Stage",
      category: "Founder Notes",
      description: "Understanding the critical transition from idea to execution and what it takes to bridge that gap.",
      readTime: "7 min read",
    },
    {
      title: "Designing Systems That Scale — Lessons from Venturemond Builds",
      category: "Founder Notes",
      description: "Technical and architectural decisions that make the difference between a prototype and a scalable product.",
      readTime: "9 min read",
    },
    {
      title: "Why Speed Without Structure Kills Innovation",
      category: "Founder Notes",
      description: "The balance between moving fast and building right: how structure enables sustainable speed.",
      readTime: "5 min read",
    },
    {
      title: "The Future of Collaboration: Building Venturemond Workspace",
      category: "Product Insights",
      description: "Behind the scenes of building our flagship product: the decisions, challenges, and learnings.",
      readTime: "8 min read",
    },
  ];

  const ventureStories = [
    {
      title: "From Zero to Revenue in 90 Days",
      category: "Venture Story",
      description: "How a B2B SaaS startup went from idea to paying customers with strategic validation and rapid execution.",
      readTime: "6 min read",
    },
    {
      title: "Pivoting Without Panic: A Founder's Journey",
      category: "Venture Story",
      description: "When market feedback demanded a pivot, here's how we helped a founder make the right call.",
      readTime: "7 min read",
    },
  ];

  const BlogCard = ({ title, category, description, readTime }: any) => (
    <Card className="hover-lift cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</span>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-primary font-medium text-sm">
          Read Article <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Hero
        title="Insights. Stories. Execution."
        subtitle="Explore how Venturemond builds ventures, products, and systems that move ideas from 0 to 1 and beyond."
      >
        <Button size="lg" asChild>
          <a href="#articles">Read Articles</a>
        </Button>
      </Hero>

      {/* Case Stories */}
      <Section id="articles">
        <SectionHeader
          title="Ventures We've Built"
          description="Real projects, real challenges, real results."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStories.map((story) => (
            <BlogCard key={story.title} {...story} />
          ))}
        </div>
      </Section>

      {/* Founder Notes */}
      <Section background="muted">
        <SectionHeader
          title="Thoughts from the Desk"
          description="Lessons, insights, and perspectives on building ventures."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {founderNotes.map((note) => (
            <BlogCard key={note.title} {...note} />
          ))}
        </div>
      </Section>

      {/* Behind the Builds */}
      <Section>
        <SectionHeader
          title="Behind the Builds"
          description="Technical insights, design decisions, and product development stories."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="hover-lift cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Technical Deep Dive</span>
                  <h3 className="text-2xl font-semibold text-foreground mt-2 mb-3">
                    Building Real-Time Collaboration: WebSocket Architecture at Scale
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    An in-depth look at how we architected real-time features for Venturemond Workspace, handling thousands of concurrent connections with minimal latency.
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Read Technical Article <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Venture Stories */}
      <Section background="muted">
        <SectionHeader
          title="Venture Stories"
          description="Success stories from founders who built with Venturemond."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {ventureStories.map((story) => (
            <BlogCard key={story.title} {...story} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Build Something Worth Writing About
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your story could be next. Partner with Venturemond to build ventures that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Partner With Venturemond</Link>
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

export default Blogs;
