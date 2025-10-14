import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const books = [
  {
    id: "designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    year: 2017,
    category: "Technical",
    description: "The big ideas behind reliable, scalable, and maintainable systems.",
  },
  {
    id: "analytics-at-work",
    title: "Analytics at Work",
    author: "Thomas Davenport",
    year: 2010,
    category: "Business",
    description: "Data-driven management practices for organizational success.",
  },
  {
    id: "storytelling-with-data",
    title: "Storytelling with Data",
    author: "Cole Nussbaumer Knaflic",
    year: 2015,
    category: "Visualization",
    description: "A data visualization guide for business professionals.",
  },
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reading List
            </h1>
            <p className="text-xl text-muted-foreground">
              Books that shaped my understanding of data engineering and analytics
            </p>
          </div>

          <div className="grid gap-6 animate-slide-in">
            {books.map((book, index) => (
              <Link key={book.id} to={`/books/${book.id}`}>
                <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{book.title}</CardTitle>
                        <CardDescription>
                          {book.author} • {book.year} • {book.category}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{book.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
