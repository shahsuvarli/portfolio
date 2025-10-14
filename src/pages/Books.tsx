import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const books = [
  {
    title: "The Data Warehouse Toolkit",
    author: "Ralph Kimball",
    year: 2013,
    category: "Data Modeling",
    description: "The definitive guide to dimensional modeling",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    year: 2017,
    category: "System Design",
    description: "Deep dive into the architecture of data systems",
  },
  {
    title: "Python for Data Analysis",
    author: "Wes McKinney",
    year: 2022,
    category: "Programming",
    description: "Data wrangling with Pandas, NumPy, and Jupyter",
  },
  {
    title: "SQL Performance Explained",
    author: "Markus Winand",
    year: 2012,
    category: "SQL",
    description: "Everything developers need to know about SQL performance",
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
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
