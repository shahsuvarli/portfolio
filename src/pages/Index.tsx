import { ArrowRight, BookOpen, FileText, Code2, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Reading List",
      description: "Curated books on data engineering and analytics",
      link: "/books",
    },
    {
      icon: FileText,
      title: "Articles",
      description: "Insights on modern data stack and best practices",
      link: "/articles",
    },
    {
      icon: Code2,
      title: "Skills",
      description: "Technical expertise and capabilities",
      link: "/skills",
    },
    {
      icon: Briefcase,
      title: "Projects",
      description: "Featured work and implementations",
      link: "/projects",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Analytics Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforming data into insights. Building scalable analytics platforms and empowering teams with reliable, accessible data.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/articles">Read Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link key={index} to={item.link}>
                    <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 h-full">
                      <CardHeader>
                        <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl">About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I'm an analytics engineer passionate about building reliable data infrastructure 
                  and empowering teams with trustworthy insights. With expertise in modern data stack 
                  tools and best practices, I focus on creating scalable, maintainable analytics solutions.
                </p>
                <p>
                  My work spans the entire analytics lifecycle—from data modeling and pipeline 
                  orchestration to visualization and stakeholder collaboration. I believe in the 
                  power of well-architected data systems to drive informed decision-making.
                </p>
                <p>
                  When I'm not working with data, you'll find me reading technical books, 
                  writing about analytics engineering, or exploring new tools in the modern data ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
