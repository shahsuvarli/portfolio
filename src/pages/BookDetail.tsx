import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const books = [
  {
    id: "designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    year: 2017,
    category: "Technical",
    description: "The big ideas behind reliable, scalable, and maintainable systems.",
    review: `
      <h2>Overview</h2>
      <p>This book is essential reading for anyone working with data systems. Kleppmann provides a comprehensive overview of the fundamental principles behind modern data architectures.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Understanding trade-offs between consistency, availability, and partition tolerance</li>
        <li>Deep dive into different data storage and processing systems</li>
        <li>Practical insights on building reliable and scalable systems</li>
        <li>Clear explanations of complex distributed systems concepts</li>
      </ul>

      <h2>Why I Recommend It</h2>
      <p>This book bridges the gap between theoretical computer science and practical engineering. It's helped me make better architectural decisions and understand the systems I work with daily.</p>

      <h2>Best For</h2>
      <p>Data engineers, backend engineers, and anyone interested in understanding how modern data systems work under the hood.</p>
    `,
    rating: 5,
  },
  {
    id: "analytics-at-work",
    title: "Analytics at Work",
    author: "Thomas Davenport",
    year: 2010,
    category: "Business",
    description: "Data-driven management practices for organizational success.",
    review: `
      <h2>Overview</h2>
      <p>Davenport presents a compelling case for building analytics capabilities within organizations and provides practical frameworks for implementation.</p>

      <h2>Key Insights</h2>
      <ul>
        <li>Building a data-driven culture</li>
        <li>Organizational structures that support analytics</li>
        <li>Measuring analytics impact on business outcomes</li>
        <li>Change management strategies</li>
      </ul>

      <h2>Application</h2>
      <p>This book has influenced how I communicate the value of analytics work and helped me understand the organizational aspects of being an analytics engineer.</p>
    `,
    rating: 4,
  },
  {
    id: "storytelling-with-data",
    title: "Storytelling with Data",
    author: "Cole Nussbaumer Knaflic",
    year: 2015,
    category: "Visualization",
    description: "A data visualization guide for business professionals.",
    review: `
      <h2>Overview</h2>
      <p>Cole Nussbaumer Knaflic teaches how to turn data into compelling narratives through effective visualization and communication techniques.</p>

      <h2>Core Principles</h2>
      <ul>
        <li>Understanding your audience and context</li>
        <li>Choosing the right type of visualization</li>
        <li>Eliminating clutter and focusing attention</li>
        <li>Crafting narrative with data</li>
      </ul>

      <h2>Impact</h2>
      <p>This book transformed how I present data. The principles are immediately applicable and have made my dashboards and reports much more effective.</p>
    `,
    rating: 5,
  },
];

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
          <Link to="/books">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Books
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/books">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reading List
          </Button>
        </Link>

        <article className="animate-fade-in">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-border">
                <BookOpen className="h-16 w-16 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-2">by {book.author}</p>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {book.year}
                </span>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {book.category}
                </Badge>
              </div>
              <p className="text-lg text-foreground italic">{book.description}</p>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: book.review }}
              />
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
