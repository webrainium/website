import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TargetCursor from "@/components/ui/target-cursor";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import { Heart, Sparkles, Users, TrendingUp, Code, Lightbulb, ArrowRight } from "lucide-react";
const founders = [{
  name: "Rahul",
  role: "Co-Founder & Technical Architect",
  bio: "Passionate about building scalable systems that solve real problems. Loves turning complex challenges into elegant solutions.",
  quote: "Code is poetry, and every function should tell a story.",
  flipQuote: "Build like it'll scale to the stars.",
  expertise: ["System Architecture", "Cloud Solutions", "Performance Optimization"],
  color: "text-coral",
  bgColor: "bg-coral/10",
  avatarBg: "bg-gradient-to-br from-coral/20 to-coral/10",
  avatarElements: ["code", "blueprint"]
}, {
  name: "Harshit",
  role: "Co-Founder & AI Engineer",
  bio: "AI enthusiast who believes technology should augment human capability, not replace it. Specializes in making AI accessible and meaningful.",
  quote: "The best AI is invisible—it just makes life better.",
  flipQuote: "Let's make tech feel like magic.",
  expertise: ["Machine Learning", "Data Science", "AI Integration"],
  color: "text-primary-glow",
  bgColor: "bg-primary-glow/10",
  avatarBg: "bg-gradient-to-br from-primary-glow/20 to-primary/10",
  avatarElements: ["neural", "brain"]
}, {
  name: "Jagriti",
  role: "Co-Founder & Product Designer",
  bio: "Design-thinking advocate who crafts experiences that users love. Believes great design is a conversation between human needs and technology possibilities.",
  quote: "Design is not just how it looks—it's how it feels.",
  flipQuote: "Design is emotion encoded in pixels.",
  expertise: ["UX/UI Design", "Product Strategy", "User Research"],
  color: "text-accent-foreground",
  bgColor: "bg-accent/50",
  avatarBg: "bg-gradient-to-br from-accent/30 to-secondary/20",
  avatarElements: ["design", "ui"]
}];
const values = [{
  icon: Heart,
  title: "Human-Centered",
  description: "Technology serves people, not the other way around."
}, {
  icon: Sparkles,
  title: "Innovation with Purpose",
  description: "We innovate to solve real problems, not just because we can."
}, {
  icon: Users,
  title: "Collaborative Spirit",
  description: "The best solutions emerge from diverse perspectives working together."
}, {
  icon: TrendingUp,
  title: "Sustainable Growth",
  description: "We build for the long term, creating lasting value for all."
}];
const About = () => {
  return <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            
            <span className="font-body text-coral font-semibold">Who are we ?</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            Three Engineers, One Dream
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            We started WebrAInium with a simple belief: technology should make life more human, not less. 
            Here's our story of building bridges between code and care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              The WebrAInium Origin Story
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                It started with late-night conversations about the future of technology. Three friends, 
                three different backgrounds, but one shared vision: creating digital solutions that 
                actually improve people's lives.
              </p>
              <p>We named ourselves WebrAInium, a play on Vibranium from Marvel, because we believe the right technology, like that fictional metal, can be both incredibly powerful and completely sustainable. It can strengthen everything it touches.</p>
              <p>
                Today, we're more than engineers. We're storytellers, problem-solvers, and dream-builders. 
                We don't just write code; we craft experiences that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Meet the Humans Behind the Code
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Three unique perspectives, one shared passion for building meaningful technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => <div key={founder.name} className="group perspective-1000 h-[400px] sm:h-[450px] md:h-[500px] cursor-target" data-cursor-text="">
                {/* Flip Card Container */}
                <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 transition-transform duration-700 ease-in-out">
                  
                  {/* Front Side */}
                  <Card className="absolute inset-0 w-full h-full backface-hidden border-0 bg-background/80 backdrop-blur-sm shadow-warm overflow-hidden">
                    <div className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col justify-center">
                      {/* Avatar */}
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${founder.bgColor} ${founder.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-3xl font-heading font-bold transition-transform duration-300`}>
                        {founder.name[0]}
                      </div>

                      <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-primary mb-2">
                        {founder.name}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-coral font-semibold mb-3 sm:mb-4">
                        {founder.role}
                      </p>
                      
                      <p className="font-body text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                        {founder.bio}
                      </p>

                      {/* Quote */}
                      <div className="bg-secondary/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                        <p className="font-body italic text-primary text-xs sm:text-sm">
                          "{founder.quote}"
                        </p>
                      </div>

                      {/* Expertise */}
                      <div className="space-y-2">
                        {founder.expertise.map(skill => <div key={skill} className="inline-block bg-accent/30 text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-body mr-1 sm:mr-2 mb-2">
                            {skill}
                          </div>)}
                      </div>
                    </div>
                  </Card>

                  {/* Back Side */}
                  <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-0 bg-gradient-to-br from-background/90 to-secondary/50 backdrop-blur-sm shadow-warm overflow-hidden">
                    <div className="relative p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col justify-center">
                      {/* Animated Background Elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        {founder.avatarElements.includes("code") && <>
                            <div className="absolute top-6 sm:top-10 left-2 sm:left-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 border border-coral/30 rounded rotate-12 animate-pulse"></div>
                            <div className="absolute top-12 sm:top-20 right-3 sm:right-6 w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 border border-coral/20 rounded-sm rotate-45 animate-pulse delay-300"></div>
                            <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-8 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-coral/20 rounded rotate-45 animate-pulse delay-500"></div>
                          </>}
                        {founder.avatarElements.includes("neural") && <>
                            <div className="absolute top-4 sm:top-8 right-2 sm:right-4 w-1 sm:w-2 h-1 sm:h-2 bg-primary-glow/40 rounded-full animate-ping"></div>
                            <div className="absolute top-8 sm:top-16 left-3 sm:left-6 w-1 h-1 bg-primary-glow/30 rounded-full animate-ping delay-200"></div>
                            <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-8 w-2 sm:w-3 h-2 sm:h-3 bg-primary-glow/50 rounded-full animate-pulse delay-400"></div>
                          </>}
                        {founder.avatarElements.includes("design") && <>
                            <div className="absolute top-6 sm:top-12 left-2 sm:left-4 w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 bg-accent/20 rounded-full animate-bounce delay-100"></div>
                            <div className="absolute top-3 sm:top-6 right-4 sm:right-8 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-secondary/30 rounded-full animate-bounce delay-300"></div>
                            <div className="absolute bottom-6 sm:bottom-12 right-2 sm:right-4 w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-accent/30 rounded-full animate-bounce delay-500"></div>
                          </>}
                      </div>

                      {/* Custom Avatar Illustration */}
                      <div className={`relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 ${founder.avatarBg} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 border-2 border-white/20 shadow-lg`}>
                        {founder.name === "Rahul" && <div className="relative">
                            {/* Architect figure with crossed arms */}
                            <div className="w-16 h-20 relative">
                              <div className="w-8 h-8 bg-coral/80 rounded-full mx-auto mb-2 relative">
                                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                                <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
                                <div className="absolute bottom-1 left-3 w-2 h-1 bg-white/80 rounded"></div>
                              </div>
                              <div className="w-12 h-8 bg-coral/60 rounded-lg mx-auto relative">
                                <div className="absolute -left-2 top-1 w-6 h-1 bg-coral/80 rotate-45 rounded"></div>
                                <div className="absolute -right-2 top-1 w-6 h-1 bg-coral/80 -rotate-45 rounded"></div>
                              </div>
                              <div className="w-8 h-4 bg-coral/60 rounded-b-lg mx-auto"></div>
                            </div>
                            <Code className="absolute -top-2 -right-2 w-4 h-4 text-coral/60 animate-pulse" />
                            <Lightbulb className="absolute -bottom-2 -left-2 w-4 h-4 text-coral/60 animate-pulse delay-300" />
                          </div>}
                        
                        {founder.name === "Harshit" && <div className="relative">
                            {/* AI Engineer creating neural network */}
                            <div className="w-16 h-20 relative">
                              <div className="w-8 h-8 bg-primary-glow/80 rounded-full mx-auto mb-2 relative">
                                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                                <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
                                <div className="absolute bottom-1 left-3 w-2 h-1 bg-white/80 rounded"></div>
                              </div>
                              <div className="w-12 h-8 bg-primary-glow/60 rounded-lg mx-auto relative">
                                <div className="absolute -left-1 top-2 w-4 h-1 bg-primary-glow/80 rounded"></div>
                                <div className="absolute -right-1 top-2 w-4 h-1 bg-primary-glow/80 rounded"></div>
                              </div>
                              <div className="w-8 h-4 bg-primary-glow/60 rounded-b-lg mx-auto"></div>
                            </div>
                            {/* Neural network effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative w-12 h-12">
                                <div className="absolute top-0 left-3 w-2 h-2 bg-primary-glow/60 rounded-full animate-pulse"></div>
                                <div className="absolute top-6 left-0 w-2 h-2 bg-primary-glow/60 rounded-full animate-pulse delay-100"></div>
                                <div className="absolute top-6 right-0 w-2 h-2 bg-primary-glow/60 rounded-full animate-pulse delay-200"></div>
                                <div className="absolute bottom-0 left-3 w-2 h-2 bg-primary-glow/60 rounded-full animate-pulse delay-300"></div>
                                {/* Connections */}
                                <div className="absolute top-1 left-4 w-4 h-px bg-primary-glow/40 rotate-45"></div>
                                <div className="absolute top-1 left-4 w-4 h-px bg-primary-glow/40 -rotate-45"></div>
                                <div className="absolute bottom-7 left-2 w-4 h-px bg-primary-glow/40 rotate-45"></div>
                                <div className="absolute bottom-7 right-2 w-4 h-px bg-primary-glow/40 -rotate-45"></div>
                              </div>
                            </div>
                          </div>}

                        {founder.name === "Jagriti" && <div className="relative">
                            {/* Designer with paintbrush */}
                            <div className="w-16 h-20 relative">
                              <div className="w-8 h-8 bg-accent/80 rounded-full mx-auto mb-2 relative">
                                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
                                <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
                                <div className="absolute bottom-1 left-2 w-4 h-1 bg-white/80 rounded-full"></div>
                              </div>
                              <div className="w-12 h-8 bg-accent/60 rounded-lg mx-auto relative">
                                <div className="absolute -right-3 -top-2 w-8 h-1 bg-accent/80 rotate-45 rounded-full"></div>
                                <div className="absolute -right-4 -top-3 w-3 h-3 bg-secondary/60 rounded rotate-45"></div>
                              </div>
                              <div className="w-8 h-4 bg-accent/60 rounded-b-lg mx-auto"></div>
                            </div>
                            {/* Floating UI elements */}
                            <div className="absolute -top-3 -left-3 w-4 h-4 border-2 border-accent/60 rounded animate-bounce"></div>
                            <div className="absolute -top-1 -right-4 w-6 h-2 bg-secondary/60 rounded animate-bounce delay-200"></div>
                            <div className="absolute -bottom-3 -right-1 w-3 h-3 bg-accent/60 rounded-full animate-bounce delay-400"></div>
                          </div>}
                      </div>

                      {/* Feel-good Quote */}
                      <div className="relative">
                        <div className="absolute -top-2 -left-2">
                          <Sparkles className="w-4 h-4 text-coral/60 animate-pulse" />
                        </div>
                        <div className="absolute -top-1 -right-3">
                          <Heart className="w-3 h-3 text-coral/40 animate-pulse delay-500" />
                        </div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-primary mb-3 sm:mb-4">
                          {founder.name}
                        </h3>
                        <div className="bg-gradient-to-r from-primary/10 to-coral/10 rounded-xl p-4 sm:p-6 border border-white/20">
                          <p className="font-body text-sm sm:text-base lg:text-lg font-medium text-primary leading-relaxed">
                            "{founder.flipQuote}"
                          </p>
                        </div>
                        
                        {/* Motivational Badge */}
                        <div className="mt-4 sm:mt-6 inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-coral/20 rounded-full border border-coral/30">
                          
                          <span className="font-body text-xs sm:text-sm text-coral font-semibold">Dream Builder</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              What Drives Us
            </h2>
            <p className="font-body text-xl text-muted-foreground">Our values aren't just words on a wall, they're the principles that guide every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => <div key={value.title} className="text-center group">
                <div className="bg-coral/10 text-coral w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <JourneyTimeline />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Whether you're looking for a technical partner, want to join our team, 
            or just want to say hello—we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group cursor-target" data-cursor-text="Connect">
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="cursor-target" data-cursor-text="Explore">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;