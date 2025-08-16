import { RefreshCw, Monitor, Cloud, Target, UserCheck, Sparkles } from "lucide-react";
const features = [{
  icon: RefreshCw,
  title: "Agile, not rigid",
  description: "We flex with your growth",
  color: "text-coral",
  bgColor: "bg-coral/10"
}, {
  icon: Monitor,
  title: "All-in-One",
  description: "Full-stack from code to care",
  color: "text-primary-glow",
  bgColor: "bg-primary-glow/10"
}, {
  icon: Cloud,
  title: "Born in the Cloud",
  description: "We think scalable from Day 1",
  color: "text-accent-foreground",
  bgColor: "bg-accent/50"
}, {
  icon: Target,
  title: "End-to-End",
  description: "From spark to launch and beyond",
  color: "text-coral",
  bgColor: "bg-coral/10"
}];
const WhyWebrAInium = () => {
  return <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <UserCheck className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">Why Choose Us</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Why WebrAInium?
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            We're not just another tech team. We're your partners in building something that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => <div key={feature.title} className="group relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-warm transition-all duration-500 hover:scale-105 cursor-target animate-fade-in hover-scale" style={{
          animationDelay: `${index * 200}ms`,
          animationFillMode: 'both'
        }} data-cursor-text="Explore">
              {/* Floating Icon */}
              <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-10 transition-all duration-300 group-hover:scale-105"></div>
              
              {/* Floating Sparkle */}
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-coral opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500" />
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{
        animationDelay: '800ms',
        animationFillMode: 'both'
      }}>
          
          
        </div>
      </div>
    </section>;
};
export default WhyWebrAInium;