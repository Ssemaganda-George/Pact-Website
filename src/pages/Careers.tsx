import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock } from "lucide-react";

const jobPostings = [
  {
    title: "Senior Management Consultant",
    location: "Multiple Locations",
    type: "Full-time",
    department: "Consulting",
    description: "Lead strategic consulting engagements across diverse sectors. Requires 8+ years experience in management consulting with proven track record of client delivery."
  },
  {
    title: "Project Manager",
    location: "Regional Office",
    type: "Full-time",
    department: "Project Management",
    description: "Manage complex, multi-stakeholder projects from initiation to closure. PMP certification and 5+ years project management experience required."
  },
  {
    title: "Business Analyst",
    location: "Head Office",
    type: "Full-time",
    department: "Analysis",
    description: "Drive business process improvement through data analysis and stakeholder engagement. 3+ years experience in business analysis or related field."
  },
  {
    title: "Financial Advisory Specialist",
    location: "Multiple Locations",
    type: "Full-time",
    department: "Finance",
    description: "Provide strategic financial guidance to clients. CPA/CFA qualification with 5+ years in financial advisory or corporate finance."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Careers" 
        subtitle="Join our team of exceptional professionals driving organizational excellence"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-4">
              Why Work at PACT?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We foster a culture of excellence, continuous learning, and professional growth. 
              Join a team that values innovation, collaboration, and making a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {[
              {
                title: "Professional Development",
                description: "Continuous learning opportunities, mentorship programs, and support for professional certifications"
              },
              {
                title: "Diverse Projects",
                description: "Work across industries and geographies on challenging, high-impact consulting engagements"
              },
              {
                title: "Collaborative Culture",
                description: "Join a team of talented professionals who value teamwork, respect, and shared success"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-secondary/50 rounded-lg border border-border text-center">
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-8 text-center">
              Current Openings
            </h2>
            
            <div className="space-y-6">
              {jobPostings.map((job, index) => (
                <Card key={index} className="border-border hover:border-accent transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-serif text-primary mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Apply Now
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
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
              Don't See the Right Fit?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're always looking for talented professionals. Send us your CV and let us know 
              how you can contribute to our mission of delivering excellence.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
