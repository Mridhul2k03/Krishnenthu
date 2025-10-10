import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} Digital Marketer. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>for growth-focused brands</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
