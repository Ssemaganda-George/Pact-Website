import { PageHero } from "@/components/PageHero";

const Clients = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Clients & Associates" 
        subtitle="Trusted partnerships with leading organizations worldwide"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-semibold text-accent mb-4">
                Our Clients
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We are proud to partner with organizations that share our commitment to excellence 
                and continuous improvement across various sectors and industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
              {Array.from({ length: 12 }).map((_, index) => (
                <div 
                  key={index} 
                  className="aspect-square bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors flex items-center justify-center p-6"
                >
                  <div className="text-center">
                    <span className="text-4xl font-serif text-accent/40">C</span>
                    <p className="text-xs text-muted-foreground mt-2">Client Logo</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-semibold text-accent mb-4">
                Strategic Partners
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our network of strategic partners enables us to deliver comprehensive solutions 
                and extend our capabilities across specialized domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Technology Partners",
                  description: "Leading technology providers supporting digital transformation initiatives"
                },
                {
                  category: "Academic Institutions",
                  description: "Research and knowledge partnerships with premier universities"
                },
                {
                  category: "Industry Associations",
                  description: "Active membership in professional consulting and management associations"
                },
                {
                  category: "Financial Institutions",
                  description: "Banking and investment partners facilitating financial advisory services"
                },
                {
                  category: "Legal Advisors",
                  description: "Trusted legal counsel supporting compliance and governance"
                },
                {
                  category: "Training Providers",
                  description: "Specialized training and development partners for capacity building"
                }
              ].map((partner, index) => (
                <div key={index} className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                    {partner.category}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold text-accent mb-6">
              Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are always interested in exploring strategic partnerships with organizations 
              that share our values and commitment to excellence.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
