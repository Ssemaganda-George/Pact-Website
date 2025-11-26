import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Regional Healthcare System Transformation",
    client: "Major Healthcare Provider",
    sector: "Healthcare",
    description: "Led comprehensive organizational restructuring and digital transformation initiative across 15 facilities, improving operational efficiency by 35%."
  },
  {
    title: "Infrastructure Development Program",
    client: "Government Agency",
    sector: "Infrastructure",
    description: "Managed $500M infrastructure program including stakeholder coordination, risk management, and compliance oversight."
  },
  {
    title: "Financial Services Modernization",
    client: "International Bank",
    sector: "Financial Services",
    description: "Guided strategic digital transformation and change management for core banking system implementation."
  },
  {
    title: "Supply Chain Optimization",
    client: "Manufacturing Corporation",
    sector: "Manufacturing",
    description: "Redesigned end-to-end supply chain operations, reducing costs by 22% and improving delivery times by 40%."
  },
  {
    title: "Educational Institution Strategic Plan",
    client: "University System",
    sector: "Education",
    description: "Developed 5-year strategic plan including academic program restructuring, enrollment growth, and financial sustainability."
  },
  {
    title: "Non-Profit Organizational Development",
    client: "International NGO",
    sector: "Development",
    description: "Implemented governance frameworks, capacity building programs, and performance management systems across 12 countries."
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Select Projects" 
        subtitle="Highlighting our track record of delivering impactful solutions across diverse sectors"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-border hover:border-accent hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl font-serif text-primary flex-1">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {project.sector}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.client}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-6">
              Industry Experience
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Healthcare", "Financial Services", "Infrastructure", "Education", "Manufacturing", "Government", "Non-Profit", "Technology", "Energy", "Retail"].map((industry) => (
                <Badge key={industry} variant="outline" className="px-4 py-2 text-sm border-primary/20">
                  {industry}
                </Badge>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our diverse portfolio spans multiple industries and geographies, 
              demonstrating our versatility and depth of expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
