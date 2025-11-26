import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Strategic Planning",
    description: "Comprehensive strategic planning services to align organizational goals with actionable roadmaps for sustainable growth and competitive advantage."
  },
  {
    title: "Project Management",
    description: "Expert project management ensuring on-time, on-budget delivery through proven methodologies and best practices."
  },
  {
    title: "Organizational Development",
    description: "Transform your organization through culture assessment, leadership development, and change management strategies."
  },
  {
    title: "Financial Advisory",
    description: "Strategic financial guidance including budgeting, forecasting, investment analysis, and risk management."
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment, mitigation strategies, and compliance frameworks to protect organizational assets."
  },
  {
    title: "Change Management",
    description: "Navigate organizational transitions smoothly with structured change management approaches and stakeholder engagement."
  },
  {
    title: "Business Analysis",
    description: "Data-driven insights and process optimization to improve efficiency, reduce costs, and drive innovation."
  },
  {
    title: "Quality Assurance",
    description: "Establish robust quality management systems ensuring consistent delivery of excellence across all operations."
  },
  {
    title: "Human Resources Development",
    description: "Build high-performing teams through talent acquisition, training programs, and performance management systems."
  },
  {
    title: "Digital Transformation",
    description: "Guide your organization through digital evolution with technology strategy, implementation, and adoption support."
  },
  {
    title: "Stakeholder Engagement",
    description: "Develop effective communication strategies and engagement frameworks to build strong stakeholder relationships."
  },
  {
    title: "Performance Management",
    description: "Implement measurement systems, KPIs, and continuous improvement processes to drive organizational performance."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive consulting solutions across 12 specialized areas of expertise"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-accent hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
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
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our services can be tailored to meet your specific organizational needs. 
              Contact us to discuss how we can help achieve your objectives.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
