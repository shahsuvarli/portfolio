import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: "data-quality-framework",
    title: "Building a Scalable Data Quality Framework",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Data Quality", "Analytics", "Best Practices"],
    excerpt: "Learn how to implement automated data quality checks that scale with your organization.",
    content: `
      <h2>Introduction</h2>
      <p>Data quality is the foundation of any successful analytics initiative. In this article, we'll explore how to build a scalable data quality framework that grows with your organization.</p>
      
      <h2>Key Components</h2>
      <p>A robust data quality framework consists of several key components:</p>
      <ul>
        <li>Automated validation rules</li>
        <li>Monitoring and alerting systems</li>
        <li>Data lineage tracking</li>
        <li>Quality metrics and KPIs</li>
      </ul>

      <h2>Implementation Strategy</h2>
      <p>Start by identifying critical data sources and defining quality rules specific to your business needs. Implement automated checks at ingestion points and create dashboards to monitor data health continuously.</p>

      <h2>Conclusion</h2>
      <p>Building a data quality framework is an iterative process. Start small, measure impact, and scale gradually as your organization matures.</p>
    `,
  },
  {
    id: "dbt-best-practices",
    title: "dbt Best Practices for Analytics Engineering",
    date: "2023-12-10",
    readTime: "10 min read",
    tags: ["dbt", "SQL", "Data Modeling"],
    excerpt: "Essential patterns and practices for maintaining clean, tested, and documented dbt projects.",
    content: `
      <h2>Why dbt?</h2>
      <p>dbt (data build tool) has revolutionized analytics engineering by bringing software engineering best practices to data transformation workflows.</p>

      <h2>Project Structure</h2>
      <p>Organize your dbt project with clear staging, intermediate, and mart layers. Use consistent naming conventions and maintain separation of concerns.</p>

      <h2>Testing Strategy</h2>
      <p>Implement tests at every layer: source freshness tests, unique and not-null tests, and custom data quality tests. Make testing part of your CI/CD pipeline.</p>

      <h2>Documentation</h2>
      <p>Document your models, columns, and business logic. Good documentation makes your data platform accessible to all stakeholders.</p>
    `,
  },
  {
    id: "modern-data-stack",
    title: "Navigating the Modern Data Stack",
    date: "2023-11-22",
    readTime: "12 min read",
    tags: ["Data Stack", "Tools", "Architecture"],
    excerpt: "A comprehensive guide to choosing the right tools for your data infrastructure.",
    content: `
      <h2>The Modern Data Stack</h2>
      <p>The modern data stack has transformed how organizations handle data. Let's explore the key components and how to choose the right tools.</p>

      <h2>Core Components</h2>
      <p>Data warehouse, transformation layer, orchestration, and BI tools form the backbone of modern data infrastructure. Each component should be evaluated based on your specific needs.</p>

      <h2>Tool Selection</h2>
      <p>Consider factors like scalability, ease of use, integration capabilities, and total cost of ownership when selecting tools for your stack.</p>

      <h2>Future Trends</h2>
      <p>Watch for developments in real-time analytics, data governance automation, and AI-powered data operations.</p>
    `,
  },
];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/articles">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/articles">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

        <article className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
}
