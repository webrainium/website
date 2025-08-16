import { Heart, ArrowUp, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/a19f3a0c-98d3-43c6-92ec-ba003eb7fed7.png" alt="WebrAInium Logo" className="w-7 h-7 object-contain" />
              <span className="font-heading font-bold text-2xl">WebrAInium</span>
            </div>
            <p className="font-body text-primary-foreground/80">
              The smart alloy of web, AI & human engineering.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/webrainium_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WebrAInium on Instagram"
                className="cursor-target hover:text-coral transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/webrainium" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WebrAInium on LinkedIn"
                className="cursor-target hover:text-coral transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/Webrainium_" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WebrAInium on X (Twitter)"
                className="cursor-target hover:text-coral transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="cursor-target font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/process" 
                  className="cursor-target font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="cursor-target font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="cursor-target font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:webrainium.team@gmail.com" 
                  className="cursor-target flex items-center space-x-2 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>webrainium.team@gmail.com</span>
                </a>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="cursor-target font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Stay Updated</h3>
            <p className="font-body text-primary-foreground/80 text-sm">
              Get the latest insights and updates from our team.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-coral transition-colors duration-300"
              />
              <Button 
                variant="default" 
                size="sm" 
                className="w-full cursor-target bg-coral text-primary-foreground border-coral hover:bg-coral/90 hover:scale-105 hover:shadow-glow transition-all duration-300"
                data-cursor-text="Subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <Heart className="w-4 h-4 text-coral" />
            <span className="font-body text-xs sm:text-sm text-primary-foreground/80">
              Made with love by humans, not just AI
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="font-body text-xs sm:text-sm text-primary-foreground/60 text-center">
              © 2024 WebrAInium. All rights reserved.
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="cursor-target text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;