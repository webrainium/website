import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TargetCursor from "@/components/ui/target-cursor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Brain, BarChart, Settings, Layers, Shield, ArrowRight, Heart, Sparkles } from "lucide-react";
const services = [{
  icon: Code,
  title: "Web Development",
  description: "Beautiful, responsive websites that tell your story and connect with your audience.",
  features: ["React & Next.js", "Unique, Brand-aligned Interface", "Performance Optimized", "SEO Ready"],
  color: "text-coral",
  bgColor: "bg-coral/10",
  gradient: "from-coral/20 to-transparent"
}, {
  icon: Brain,
  title: "AI Automation",
  description: "Smart solutions that work while you sleep. Automate the mundane, amplify the meaningful.",
  features: ["Custom AI Models", "Process Automation", "Data Intelligence", "Smart Workflows"],
  color: "text-primary-glow",
  bgColor: "bg-primary-glow/10",
  gradient: "from-primary-glow/20 to-transparent"
}, {
  icon: BarChart,
  title: "Data Analytics",
  description: "Turn your data into insights that drive decisions and fuel growth.",
  features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Visualization"],
  color: "text-accent-foreground",
  bgColor: "bg-accent/50",
  gradient: "from-accent/50 to-transparent"
}, {
  icon: Settings,
  title: "Marketing",
  description: "Strategic digital marketing that connects your brand with the right audience at the right time.",
  features: ["Custom Marketing Strategies", "Brand Identity Design", "Social Media Management", "Content Marketing"],
  color: "text-coral",
  bgColor: "bg-coral/10",
  gradient: "from-coral/20 to-transparent"
}, {
  icon: Layers,
  title: "SaaS Products",
  description: "From idea to launch. We build scalable SaaS products that users love to use.",
  features: ["MVP Development", "Scalable Architecture", "User Experience Design", "Launch Strategy"],
  color: "text-primary-glow",
  bgColor: "bg-primary-glow/10",
  gradient: "from-primary-glow/20 to-transparent"
}, {
  icon: Shield,
  title: "Quality Assurance",
  description: "Peace of mind through thorough testing. Your users deserve bulletproof software.",
  features: ["Testing", "Security and Vulnerability assessments", "Performance Testing", "Bug Prevention"],
  color: "text-accent-foreground",
  bgColor: "bg-accent/50",
  gradient: "from-accent/50 to-transparent"
}];
const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  return <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">Our Services</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            We Craft Digital Dreams
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to impact, we build technology that serves humanity. 
            Each service is designed with care, crafted with expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }}>
                <Card className="group relative overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:shadow-warm transition-all duration-500 hover:scale-105 cursor-target" onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)} style={{
              transformStyle: 'preserve-3d'
            }}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map(feature => <li key={feature} className="flex items-center font-body text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-coral rounded-full mr-3"></div>
                        {feature}
                      </li>)}
                  </ul>

                  {/* CTA */}
                  

                  {/* Floating Elements */}
                  {hoveredService === index && <div className="absolute top-4 right-4">
                      
                    </div>}
                </div>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Let's turn your vision into reality. We're here to listen, understand, and create.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="cursor-target" asChild>
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="cursor-target" asChild>
              <Link to="/contact">
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Services;