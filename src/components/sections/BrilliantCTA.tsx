import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BrilliantCTA = () => {
  return <section className="py-24 bg-gradient-to-br from-primary/5 via-coral/5 to-primary-glow/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-10 left-10 w-32 h-32 bg-coral/10 rounded-full blur-xl" animate={{
        x: [0, 50, 0],
        y: [0, -30, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute top-1/3 right-20 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl" animate={{
        x: [0, -40, 0],
        y: [0, 40, 0],
        scale: [1, 0.8, 1]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
        <motion.div className="absolute bottom-20 left-1/3 w-20 h-20 bg-accent/20 rounded-full blur-xl" animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        rotate: [0, 180, 360]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }} />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="flex items-center justify-center mb-8" initial={{
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
          <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
            <Zap className="w-5 h-5 text-coral" />
            <span className="font-body text-coral font-semibold">Ready to Build?</span>
            <Sparkles className="w-5 h-5 text-primary-glow" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight px-4" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <span className="text-primary">Let's Build</span>
          <br />
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Something Brilliant
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed px-4" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          Your vision deserves technology that thinks, feels, and grows with purpose. 
          Let's create something that makes a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }}>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="group cursor-target">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="cursor-target">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div className="mt-12 flex items-center justify-center space-x-2 text-muted-foreground" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }}>
          
          <span className="font-body text-sm">&quot; Every great idea starts with a conversation 
&quot;</span>
        </motion.div>
      </div>
    </section>;
};
export default BrilliantCTA;