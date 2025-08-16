import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TargetCursor from "@/components/ui/target-cursor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">AI Stories</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            Artificial Intelligence
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of AI and human experience. Stories about building technology that serves humanity.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-gradient-soft border-0">
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto bg-coral/10 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-coral" />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                Coming Soon
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                We're crafting amazing AI stories and insights to share with you. 
                Stay tuned for deep dives into artificial intelligence, machine learning, 
                and the future of human-AI collaboration.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="coral" size="lg" className="cursor-target" asChild>
                  <Link to="/contact">
                    Get Notified
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="cursor-target" asChild>
                  <Link to="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Posts
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogAI;