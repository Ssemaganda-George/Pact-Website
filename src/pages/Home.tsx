import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary mb-6 leading-tight">
              Excellence in Professional Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Strategic solutions that drive sustainable growth and organizational excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accent mb-4">
              Why Choose PACT?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver transformative solutions through expertise, innovation, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Proven Expertise",
                description: "Decades of combined experience across multiple industries and sectors"
              },
              {
                title: "Client-Centric Approach",
                description: "Tailored solutions that align with your unique organizational needs"
              },
              {
                title: "Measurable Results",
                description: "Data-driven strategies that deliver tangible, sustainable outcomes"
              }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors">
                <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accent mb-4">
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive consulting services across 12 specialized domains
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Strategic Planning",
              "Project Management",
              "Organizational Development",
              "Financial Advisory",
              "Risk Management",
              "Change Management",
              "Business Analysis",
              "Quality Assurance"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all">
                <h3 className="font-sans font-medium text-primary text-center">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-primary-foreground">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 leading-relaxed">
              Let's discuss how we can help you achieve your strategic objectives
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
