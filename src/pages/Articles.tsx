import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Building Modern Data Pipelines with dbt",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["dbt", "Data Engineering", "Analytics"],
    excerpt: "A comprehensive guide to implementing analytics engineering best practices using dbt and modern data stack tools.",
  },
  {
    title: "Optimizing SQL Queries at Scale",
    date: "2024-02-20",
    readTime: "12 min read",
    tags: ["SQL", "Performance", "Optimization"],
    excerpt: "Techniques and strategies for improving query performance in large-scale analytical databases.",
  },
  {
    title: "The Future of Analytics Engineering",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Analytics", "Career", "Industry Trends"],
    excerpt: "Exploring emerging trends and technologies shaping the analytics engineering landscape.",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Articles
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts and insights on data, analytics, and engineering
            </p>
          </div>

          <div className="grid gap-6 animate-slide-in">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
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

export default Articles;
