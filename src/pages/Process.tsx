import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  Heart, 
  Sparkles,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Deduce",
    subtitle: "We listen before we build",
    description: "Deep discovery sessions to understand your vision, challenges, and dreams. We don't just hear what you say—we understand what you need.",
    features: ["Stakeholder Interviews", "Market Research", "Technical Assessment", "Goal Alignment"],
    color: "text-coral",
    bgColor: "bg-coral/10",
    number: "01"
  },
  {
    icon: Palette,
    title: "Design",
    subtitle: "We sketch dreams, not just screens",
    description: "User-centered design that tells your story. Every pixel serves a purpose, every interaction feels natural.",
    features: ["User Experience Design", "Visual Identity", "Prototyping", "Design Systems"],
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/10",
    number: "02"
  },
  {
    icon: Code,
    title: "Develop",
    subtitle: "We build with care, not just code",
    description: "Clean, scalable code that grows with you. Built for performance, designed for maintainability.",
    features: ["Agile Development", "Code Reviews", "Testing", "Documentation"],
    color: "text-accent-foreground",
    bgColor: "bg-accent/50",
    number: "03"
  },
  {
    icon: Rocket,
    title: "Deploy",
    subtitle: "We launch with confidence",
    description: "Seamless deployment and ongoing support. Your launch is just the beginning of our partnership.",
    features: ["Cloud Deployment", "Performance Monitoring", "User Training", "Ongoing Support"],
    color: "text-coral",
    bgColor: "bg-coral/10",
    number: "04"
  }
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">Our Process</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            How We Bring Dreams to Life
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures your project is built with intention, 
            crafted with care, and delivered with excellence.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-2 sm:-top-4 left-2 sm:left-4 md:left-8">
                  <div className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold text-muted/20 select-none">
                    {step.number}
                  </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative z-10`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                      <div className={`${step.bgColor} ${step.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4`}>
                        <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary">
                          {step.title}
                        </h2>
                        <p className="font-body text-base sm:text-lg text-muted-foreground">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="font-body text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-coral mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm sm:text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline Indicator */}
                    <div className="flex items-center text-primary">
                      <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                      <span className="font-body font-medium">
                        Step {step.number} of 04
                      </span>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="group-hover:shadow-warm transition-all duration-500 group-hover:scale-105 overflow-hidden border-0 bg-background/60 backdrop-blur-sm">
                      <div className="p-4 sm:p-6 lg:p-8 relative">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-coral/5"></div>
                        
                        {/* Icon */}
                        <div className={`${step.bgColor} ${step.color} w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                        </div>

                        {/* Step Number Large */}
                        <div className="text-center mb-4">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                            {step.title}
                          </div>
                          <div className="text-xs sm:text-sm font-body text-muted-foreground">
                            {step.subtitle}
                          </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="w-px h-12 bg-gradient-to-b from-coral via-primary-glow to-accent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Let's begin with a conversation. Tell us about your dreams, and we'll help you build them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;