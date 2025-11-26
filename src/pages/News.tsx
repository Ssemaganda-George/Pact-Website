import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    title: "PACT Consultancy Expands Advisory Board",
    date: "November 15, 2025",
    category: "Company News",
    excerpt: "We are pleased to announce the appointment of three distinguished professionals to our Advisory Board, strengthening our expertise in financial services and digital transformation."
  },
  {
    title: "New Partnership with Leading Technology Provider",
    date: "October 28, 2025",
    category: "Partnerships",
    excerpt: "Strategic alliance formed to enhance digital transformation capabilities and deliver cutting-edge solutions to clients across multiple sectors."
  },
  {
    title: "PACT Named Top Consulting Firm in Regional Awards",
    date: "October 10, 2025",
    category: "Recognition",
    excerpt: "Honored to receive the Excellence in Consulting award, recognizing our commitment to delivering measurable impact and client success."
  },
  {
    title: "Upcoming Webinar: Strategic Planning in Uncertain Times",
    date: "December 5, 2025",
    category: "Events",
    excerpt: "Join our experts for an interactive discussion on adaptive strategic planning methodologies and resilience building. Registration now open."
  },
  {
    title: "Q3 Impact Report: Delivering Results Across Sectors",
    date: "September 30, 2025",
    category: "Reports",
    excerpt: "Our third quarter impact report highlights successful project completions, client satisfaction metrics, and continued growth in key service areas."
  },
  {
    title: "Thought Leadership: The Future of Organizational Development",
    date: "September 15, 2025",
    category: "Insights",
    excerpt: "Latest white paper explores emerging trends in organizational development, including hybrid work models, digital collaboration, and culture transformation."
  }
];

const News = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="News & Events" 
        subtitle="Stay informed about our latest updates, insights, and upcoming events"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {newsItems.map((item, index) => (
                <Card key={index} className="border-border hover:border-accent hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-2">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                          {item.category}
                        </span>
                        <CardTitle className="text-xl font-serif text-primary">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.excerpt}
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Receive regular updates on our latest insights, events, and industry trends 
              delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
