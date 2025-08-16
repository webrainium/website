import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="WebrAInium Hero Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-warm"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-coral/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-accent/30 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight px-2">
          <span className="text-primary">The Smart Alloy of</span>
          <br />
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Web, AI & Human Engineering
          </span>
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          We don't just build digital products, we engineer them with{" "}
          <span className="text-coral font-semibold">empathy</span> and{" "}
          <span className="text-primary-glow font-semibold">intelligence</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact" className="group cursor-target">
              Let's Collaborate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services" className="cursor-target">See Our Work</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-primary-glow" />
            <span className="font-body text-xs sm:text-sm">AI-First Solutions</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-hero rounded-full"></div>
            <span className="font-body text-xs sm:text-sm">Cloud-Native</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-coral" />
            <span className="font-body text-xs sm:text-sm">Human-Centered</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;