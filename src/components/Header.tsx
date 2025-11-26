import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PROJECTS", path: "/projects" },
  { name: "CLIENTS & ASSOCIATES", path: "/clients" },
  { name: "NEWS & EVENTS", path: "/news" },
  { name: "CAREERS", path: "/careers" },
  { name: "CONTACT US", path: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-serif font-semibold text-primary">
              PACT Consultancy
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className="text-sm font-sans font-medium tracking-wider text-foreground hover:text-accent transition-colors"
                activeClassName="text-accent"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className="text-sm font-sans font-medium tracking-wider text-foreground hover:text-accent transition-colors py-2"
                  activeClassName="text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
