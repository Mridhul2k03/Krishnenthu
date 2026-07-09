import { Mail, Linkedin, Instagram, Facebook, Heart, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:Krishnakrishnendu668@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/krishnendu-k-v-56842527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_krishn_a___?igsh=MWxjdDl1enZiOHFwMQ%3D%3D&utm_source=qr",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.instagram.com/_krishn_a___?igsh=MWxjdDl1enZiOHFwMQ%3D%3D&utm_source=qr",
    },
  ];

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const services = [
    "SEO Optimization",
    "Google Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Web Designing",
    "Analytics & Reporting",
  ];

  return (
    <footer className="relative bg-secondary/30 border-t border-border pt-16 pb-8 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("top")}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform text-left"
            >
              KRISHNENDU
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering brands through data-driven digital marketing, SEO, high-converting paid campaigns, and engaging social media strategies.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-foreground font-semibold text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hover:translate-x-1 duration-200 transform inline-block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-foreground font-semibold text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left hover:translate-x-1 duration-200 transform inline-block"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-foreground font-semibold text-base mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Kerala, India (Available Globally/Remote)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:Krishnakrishnendu668@gmail.com"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors break-all"
                >
                  Krishnakrishnendu668@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow transition-all text-xs"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/80 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} Krishnendu. All rights reserved.
          </p>



          {/* Scroll to top */}
          <button
            onClick={() => scrollToSection("top")}
            className="w-10 h-10 rounded-full bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:shadow-glow transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
