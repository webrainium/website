import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Rocket, TrendingUp, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2024",
    event: "The Beginning",
    description: "Three friends founded WebrAInium to change how technology serves humanity",
    icon: Lightbulb,
    color: "text-coral",
    bgColor: "bg-coral/10"
  },
  {
    year: "Now",
    event: "Growing & Learning",
    description: "Building amazing projects and expanding our impact",
    icon: TrendingUp,
    color: "text-accent-foreground",
    bgColor: "bg-accent/50"
  },
  {
    year: "Future",
    event: "Your Story",
    description: "Ready to write the next chapter together?",
    icon: Heart,
    color: "text-coral",
    bgColor: "bg-coral/10"
  }
];

const JourneyTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !progressLineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline items on scroll
      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          x: -50,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate progress line
      gsap.fromTo(
        progressLineRef.current,
        {
          height: "0%"
        },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1
          }
        }
      );

      // Add hover animations
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        const icon = item.querySelector('.timeline-icon');
        const content = item.querySelector('.timeline-content');
        
        item.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.3 });
          gsap.to(content, { x: 10, duration: 0.3 });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
          gsap.to(content, { x: 0, duration: 0.3 });
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            Our Journey So Far
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Every great story has a beginning. Here's ours.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 w-0.5 bg-border h-full">
            <div 
              ref={progressLineRef}
              className="w-full bg-gradient-to-b from-coral to-primary-glow"
              style={{ height: "0%" }}
            />
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className="timeline-item flex items-start space-x-6 cursor-target"
                data-cursor-text="Expand"
              >
                {/* Icon */}
                <div className={`timeline-icon ${milestone.bgColor} ${milestone.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-soft`}>
                  <milestone.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="timeline-content bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-soft hover:shadow-warm transition-all duration-500 flex-1 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {milestone.year}
                    </span>
                    <div className="w-2 h-2 bg-coral rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                    {milestone.event}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                  
                  {/* Connecting Line */}
                  {index < milestones.length - 1 && (
                    <svg 
                      className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-30"
                      width="40" 
                      height="40" 
                      viewBox="0 0 40 40"
                    >
                      <path 
                        d="M10 20 L30 20 M25 15 L30 20 L25 25" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        fill="none"
                        className="text-coral"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;