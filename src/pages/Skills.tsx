import { Database, Code, BarChart3, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "SQL", level: 95 },
      { name: "dbt", level: 90 },
      { name: "Python (Pandas, NumPy)", level: 85 },
      { name: "Data Modeling", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Snowflake", level: 85 },
      { name: "BigQuery", level: 80 },
      { name: "Redshift", level: 75 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Code,
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Airflow", level: 80 },
      { name: "Looker/Tableau", level: 85 },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Google Cloud", level: 75 },
      { name: "Azure", level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground">
              Technical capabilities and proficiencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-slide-in">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
