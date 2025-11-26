import { PageHero } from "@/components/PageHero";

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="About PACT Consultancy" 
        subtitle="Building excellence through expertise, integrity, and innovation"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                PACT Consultancy is a premier consulting firm dedicated to delivering transformative 
                solutions that drive organizational excellence. With a team of seasoned professionals 
                across multiple disciplines, we bring decades of combined experience to every engagement.
              </p>
              <p>
                Our approach combines rigorous analysis, strategic thinking, and practical implementation 
                to ensure sustainable results. We partner with organizations of all sizes, from emerging 
                startups to established enterprises, helping them navigate complex challenges and 
                capitalize on opportunities.
              </p>
              <p>
                At PACT, we believe in the power of collaboration, innovation, and continuous improvement. 
                Our commitment to excellence is reflected in every project we undertake, every relationship 
                we build, and every result we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-6">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations through strategic consulting, innovative solutions, 
                  and unwavering commitment to excellence, driving sustainable growth and 
                  competitive advantage.
                </p>
              </div>
              <div className="p-8 bg-background rounded-lg border border-border">
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted partner of choice for organizations seeking transformative 
                  change, recognized globally for our expertise, integrity, and measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-12 text-center">
              Advisory Board
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Dr. Sarah Johnson", role: "Strategic Advisor", specialty: "International Development" },
                { name: "Michael Chen", role: "Senior Advisor", specialty: "Financial Services" },
                { name: "Dr. Amara Okafor", role: "Technical Advisor", specialty: "Project Management" },
                { name: "James Wilson", role: "Advisory Member", specialty: "Risk Management" },
                { name: "Dr. Maria Rodriguez", role: "Advisory Member", specialty: "Organizational Development" },
                { name: "David Thompson", role: "Advisory Member", specialty: "Change Management" }
              ].map((member, index) => (
                <div key={index} className="p-6 bg-secondary/50 rounded-lg border border-border text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-serif text-accent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
