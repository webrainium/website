import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TargetCursor from "@/components/ui/target-cursor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Sparkles, 
  Clock, 
  ArrowRight,
  User,
  Calendar,
  MessageCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Human Side of AI: Building Technology That Cares",
    excerpt: "Exploring how we can create AI solutions that augment human capability while preserving the human touch that makes interactions meaningful.",
    category: "AI",
    readTime: "5 min read",
    date: "2024-01-15",
    author: "Harshit",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    featured: true
  },
  {
    title: "Design Systems That Scale With Love",
    excerpt: "How we build design systems that grow with your product while maintaining that warm, human feeling users love.",
    category: "Design",
    readTime: "7 min read",
    date: "2024-01-10",
    author: "Jagriti",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop"
  },
  {
    title: "Cloud Architecture: Building for Tomorrow",
    excerpt: "Our approach to creating cloud-native applications that scale beautifully and remain maintainable as your team grows.",
    category: "Development",
    readTime: "6 min read",
    date: "2024-01-05",
    author: "Rahul",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
  },
  {
    title: "The Story Behind WebrAInium",
    excerpt: "Three friends, countless late-night conversations, and a shared dream of making technology more human. Here's how it all began.",
    category: "Stories",
    readTime: "4 min read",
    date: "2023-12-28",
    author: "Team WebrAInium",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
  },
  {
    title: "Product Discovery: Finding the Heart of Your Idea",
    excerpt: "Before we write a single line of code, we dig deep to understand not just what you want to build, but why it matters.",
    category: "Product",
    readTime: "8 min read",
    date: "2023-12-20",
    author: "Jagriti",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop"
  },
  {
    title: "Sustainable Development: Code That Lasts",
    excerpt: "Writing code is easy. Writing code that stands the test of time, scales gracefully, and remains maintainable? That's an art.",
    category: "Development",
    readTime: "6 min read",
    date: "2023-12-15",
    author: "Rahul",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
  }
];

const categories = ["All", "AI", "Design", "Development", "Product", "Stories"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">Our Blog</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            Stories, Insights & Learning
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every line of code, there's a story. Behind every design, there's a decision. 
            Join us as we share our journey of building technology with heart.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              category === "All" ? (
                <Button
                  key={category}
                  variant="coral"
                  className="rounded-full cursor-target"
                  data-cursor-text="Filter"
                >
                  {category}
                </Button>
              ) : (
                <Button
                  key={category}
                  variant="ghost"
                  className="rounded-full cursor-target"
                  data-cursor-text="Filter"
                  asChild
                >
                  <Link to={`/blog/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </Button>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-coral mr-2" />
              <span className="font-body text-coral font-semibold">Featured Story</span>
            </div>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.title} className="group overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:shadow-warm transition-all duration-500 cursor-target hover:shadow-glow" data-cursor-text="Read">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20"></div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-coral/10 text-coral border-0">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="font-body text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="font-body text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="group/btn cursor-target" data-cursor-text="Read">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-6">
              Latest Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card 
                key={post.title}
                className="group overflow-hidden border-0 bg-background/80 backdrop-blur-sm hover:shadow-warm transition-all duration-500 hover:scale-105 cursor-target hover:shadow-glow"
                data-cursor-text="Read"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-primary border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-muted-foreground mr-2" />
                      <span className="font-body text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn cursor-target" data-cursor-text="Open">
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-soft rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 text-coral mr-0 sm:mr-3 mb-2 sm:mb-0" />
              <span className="font-heading font-bold text-xl sm:text-2xl text-primary">
                Stay in the Loop
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-6">
              Get Our Latest Stories
            </h2>
            <p className="font-body text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our community of makers, thinkers, and dreamers. 
              Get insights, stories, and knowledge drops straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-border focus:border-coral focus:shadow-input-glow transition-all duration-300 font-body cursor-target"
                data-cursor-text="Email"
              />
              <Button variant="coral" className="w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base cursor-target hover:scale-105 transition-transform duration-300" data-cursor-text="Subscribe">
                Subscribe
              </Button>
            </div>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-4">
              No spam, just good stuff. Unsubscribe anytime. 💙
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;