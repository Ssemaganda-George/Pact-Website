import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss how we can help achieve your objectives"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-semibold text-accent mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to start a new project, explore partnership opportunities, 
                or simply have questions about our services, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">info@pactconsultancy.com</p>
                    <p className="text-muted-foreground">business@pactconsultancy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">Main: +1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Fax: +1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      123 Business District<br />
                      Global City, GC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary/50 rounded-lg border border-border">
                <h3 className="font-semibold text-primary mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-secondary/30 p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-serif font-semibold text-primary mb-6">
                  Send Us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="john.doe@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization
                    </label>
                    <Input placeholder="Your company name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input placeholder="How can we help you?" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
