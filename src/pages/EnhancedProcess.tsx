import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TargetCursor from "@/components/ui/target-cursor";
import { Link } from "react-router-dom";
import { Lightbulb, Palette, Code, Rocket, Heart, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
const processSteps = [{
  id: 1,
  icon: Lightbulb,
  title: "Deduce",
  subtitle: "We listen before we build",
  description: "Every great product starts with understanding. We dive deep into your vision, goals, and challenges to uncover the real problem we're solving together.",
  details: ["Discovery workshops and stakeholder interviews", "Market research and competitive analysis", "User persona development and journey mapping", "Technical feasibility assessment"],
  color: "text-coral",
  bgColor: "bg-coral/10",
  gradient: "from-coral/20 to-transparent"
}, {
  id: 2,
  icon: Palette,
  title: "Design",
  subtitle: "We sketch dreams, not just screens",
  description: "Beautiful design isn't just about looks, it's about creating experiences that feel intuitive, delightful, and human. Every pixel serves a purpose.",
  details: ["User experience design and wireframing", "Visual design system and brand alignment", "Interactive prototyping and user testing", "Accessibility and responsive design"],
  color: "text-primary-glow",
  bgColor: "bg-primary-glow/10",
  gradient: "from-primary-glow/20 to-transparent"
}, {
  id: 3,
  icon: Code,
  title: "Develop",
  subtitle: "We build with care, not just code",
  description: "Clean, scalable, maintainable code is our craft. We build with the future in mind, ensuring your product can grow and evolve with your vision.",
  details: ["Modern tech stack and architecture planning", "Agile development with regular check-ins", "Quality assurance and automated testing", "Performance optimization and security"],
  color: "text-accent-foreground",
  bgColor: "bg-accent/50",
  gradient: "from-accent/50 to-transparent"
}, {
  id: 4,
  icon: Rocket,
  title: "Deploy",
  subtitle: "We launch with confidence",
  description: "Launch day is just the beginning. We ensure smooth deployment, monitor performance, and provide ongoing support as your product grows and succeeds.",
  details: ["Cloud infrastructure setup and optimization", "Deployment automation and monitoring", "User onboarding and training support", "Ongoing maintenance and feature updates"],
  color: "text-coral",
  bgColor: "bg-coral/10",
  gradient: "from-coral/20 to-transparent"
}];
const EnhancedProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const handleStepClick = (stepId: number) => {
    if (activeStep === stepId) {
      setActiveStep(null);
    } else {
      setActiveStep(stepId);
      if (!completedSteps.includes(stepId)) {
        setCompletedSteps([...completedSteps, stepId]);
      }
      // Scroll to the specific step
      const stepElement = document.getElementById(`step-${stepId}`);
      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  };
  return <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="flex items-center justify-center mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <Sparkles className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">Our Process</span>
          </motion.div>
          <motion.h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            From Spark to Success
          </motion.h1>
          <motion.p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            Every great product follows a journey. Here's how we transform your vision 
            into reality through our proven, human-centered process.
          </motion.p>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="relative mb-16">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-border rounded-full transform -translate-y-1/2"></div>
            <motion.div className="absolute left-0 top-1/2 h-1 bg-gradient-hero rounded-full transform -translate-y-1/2" initial={{
            width: "0%"
          }} animate={{
            width: completedSteps.length > 0 ? `${completedSteps.length / processSteps.length * 100}%` : "0%"
          }} transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}></motion.div>
            
            <div className="relative flex justify-between">
              {processSteps.map((step, index) => <motion.button key={step.id} onClick={() => handleStepClick(step.id)} className={`cursor-target w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 lg:border-4 flex items-center justify-center transition-all duration-300 hover:scale-110 ${completedSteps.includes(step.id) ? 'bg-primary border-primary text-primary-foreground' : activeStep === step.id ? 'bg-coral border-coral text-coral-foreground' : 'bg-background border-border text-muted-foreground hover:border-coral'}`} whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }}>
                  {completedSteps.includes(step.id) ? <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" /> : <step.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />}
                </motion.button>)}
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => <motion.div key={step.id} id={`step-${step.id}`} className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${activeStep === step.id ? 'border-coral shadow-warm' : 'border-border hover:border-border/60'}`} initial={{
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
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-500 ${activeStep === step.id ? 'opacity-100' : ''}`}></div>
                
                <div className="relative p-4 sm:p-6 lg:p-8 cursor-target" onClick={() => handleStepClick(step.id)}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
                    {/* Step Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                        <div className={`${step.bgColor} ${step.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <span className="font-body text-xs sm:text-sm text-muted-foreground">Step {step.id}</span>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-coral rounded-full"></div>
                          </div>
                          <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary">
                            {step.title}
                          </h3>
                          <p className="font-body text-sm sm:text-base text-coral font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="font-body text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                        {step.description}
                      </p>
                      
                      <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: activeStep === step.id ? 'auto' : 0,
                    opacity: activeStep === step.id ? 1 : 0
                  }} transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }} className="overflow-hidden">
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => <motion.div key={detailIndex} className="flex items-start space-x-3" initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: activeStep === step.id ? 1 : 0,
                        x: activeStep === step.id ? 0 : -10
                      }} transition={{
                        duration: 0.3,
                        delay: detailIndex * 0.1
                      }}>
                              <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                              <span className="font-body text-muted-foreground">{detail}</span>
                            </motion.div>)}
                        </div>
                      </motion.div>
                    </div>

                    {/* CTA */}
                    <div className="text-center lg:text-right mt-4 lg:mt-0">
                      <Button variant={activeStep === step.id ? "coral" : "ghost"} className="cursor-target group w-full sm:w-auto" size="sm">
                        {activeStep === step.id ? "Close" : "Explore"}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              Every great product starts with a conversation. Let's talk about your vision.
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
            <div className="mt-8 flex items-center justify-center space-x-2 text-muted-foreground">
              
              <span className="font-body text-sm">&quot; From Brainstorm to Breakthrough, That’s WebrAInium &quot;</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default EnhancedProcess;