import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-time Analytics Dashboard",
    description: "Built a scalable real-time analytics platform processing millions of events daily using Kafka, dbt, and Snowflake.",
    technologies: ["Python", "Kafka", "dbt", "Snowflake", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Data Quality Framework",
    description: "Developed a comprehensive data quality monitoring system with automated testing and alerting capabilities.",
    technologies: ["Python", "Great Expectations", "Airflow", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Feature Pipeline",
    description: "Engineered feature pipelines for machine learning models, reducing feature preparation time by 70%.",
    technologies: ["Python", "dbt", "BigQuery", "Scikit-learn"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Featured work and technical implementations
            </p>
          </div>

          <div className="grid gap-6 animate-slide-in">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
