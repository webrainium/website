import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyWebrAInium from "@/components/sections/WhyWebrAInium";
import BrilliantCTA from "@/components/sections/BrilliantCTA";
import TargetCursor from "@/components/ui/target-cursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      <Hero />
      <WhyWebrAInium />
      <BrilliantCTA />
      <Footer />
    </div>
  );
};

export default Index;
