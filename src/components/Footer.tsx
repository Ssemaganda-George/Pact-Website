import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-primary-foreground">
              PACT Consultancy
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional consulting services delivering excellence in project management, 
              strategic planning, and organizational development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-primary-foreground">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@pactconsultancy.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Business District<br />
                  Global City, GC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} PACT Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
