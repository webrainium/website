import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import TargetCursor from "@/components/ui/target-cursor";
import { 
  Heart, 
  Sparkles, 
  Send, 
  MessageCircle, 
  Calendar,
  Mail,
  Phone,
  MapPin 
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

const EMAILJS_SERVICE_ID = "service_0jn3gff";
const EMAILJS_TEMPLATE_ID = "template_2k238pl";
const EMAILJS_PUBLIC_KEY = "GtcZV0zjcqKrzDQ_X";


const contactMethods = [
  {
    icon: MessageCircle,
    title: "Start a Conversation",
    description: "Tell us about your project and we'll get back to you within 24 hours.",
    action: "Send Message",
    color: "text-coral",
    bgColor: "bg-coral/10"
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a free 30-minute discovery call to discuss your ideas.",
    action: "Book Call",
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/10"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Prefer email? Drop us a line and we'll respond promptly.",
    action: "webrainium.team@gmail.com",
    color: "text-accent-foreground",
    bgColor: "bg-accent/50"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    reply_to: formData.email,
    company: formData.company || "-",
    project_type: formData.projectType || "-",
    message: formData.message,
    subject: "New message from WebrAInium",
    to_email: "webrainium.team@gmail.com",
  },
  EMAILJS_PUBLIC_KEY
);

      toast({
        title: "Message sent!",
        description: "Thanks! We’ll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", message: "", projectType: "" });
    } catch (error) {
      console.error("EmailJS error", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <TargetCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-coral mr-2" />
            <span className="font-body text-coral font-semibold">Let's Connect</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-6">
            Hey there! 👋
            <br />
            Tell us what you're dreaming up
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you have a detailed project plan or just a spark of an idea, 
            we're here to listen and help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method) => (
              <Card 
                key={method.title}
                className="group text-center p-8 border-0 bg-background/60 backdrop-blur-sm hover:shadow-warm transition-all duration-500 hover:scale-105 cursor-target"
                data-cursor-text={method.action}
              >
                <div className={`${method.bgColor} ${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                  {method.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  {method.description}
                </p>
                <Button 
                  variant={method.title === "Start a Conversation" ? "hero" : "outline"} 
                  className="w-full"
                  onClick={() => {
                    if (method.title === "Schedule a Call") {
                      window.open("https://cal.com/team-webrainium/15min", "_blank");
                    } else if (method.title === "Start a Conversation") {
                      document.getElementById("share-your-vision")?.scrollIntoView({ behavior: "smooth" });
                    } else if (method.title === "Email Us") {
                      window.open("mailto:webrainium.team@gmail.com", "_self");
                    }
                  }}
                >
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="share-your-vision" className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Share Your Vision
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              The more you tell us, the better we can help. Don't worry about having all the details—we'll figure it out together.
            </p>
          </div>

          <Card className="p-8 border-0 bg-background/80 backdrop-blur-sm shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="name" className="font-body font-medium text-primary text-sm sm:text-base">
                    What should we call you? *
                  </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your awesome name"
                      className="mt-2 border-2 border-border focus:border-coral focus:shadow-glow transition-all duration-300 cursor-target text-sm sm:text-base"
                      data-cursor-text="Write"
                      required
                    />
                </div>
                <div>
                  <Label htmlFor="email" className="font-body font-medium text-primary text-sm sm:text-base">
                    How can we reach you? *
                  </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-2 border-2 border-border focus:border-coral focus:shadow-glow transition-all duration-300 cursor-target text-sm sm:text-base"
                      data-cursor-text="Write"
                      required
                    />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="company" className="font-body font-medium text-primary text-sm sm:text-base">
                    Company/Organization
                  </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your amazing company"
                      className="mt-2 border-2 border-border focus:border-coral focus:shadow-glow transition-all duration-300 cursor-target text-sm sm:text-base"
                      data-cursor-text="Write"
                    />
                </div>
                <div>
                  <Label htmlFor="projectType" className="font-body font-medium text-primary text-sm sm:text-base">
                    What kind of magic are we building?
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 text-sm sm:text-base border-2 border-border rounded-lg focus:border-coral focus:shadow-glow transition-all duration-300 bg-background cursor-target"
                    data-cursor-text="Choose"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="saas-product">SaaS Product</option>
                    <option value="business-tools">Business Tools</option>
                    <option value="other">Something else amazing</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="font-body font-medium text-primary text-sm sm:text-base">
                  Tell us about your dream project *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What problem are you solving? Who are you helping? What's your vision? The more details, the better we can help!"
                  rows={4}
                  className="mt-2 border-2 border-border focus:border-coral focus:shadow-glow transition-all duration-300 resize-none cursor-target text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                  data-cursor-text="Write"
                  required
                />
              </div>

              <div className="text-center pt-4">
                <Button type="submit" variant="hero" size="lg" className="group cursor-target hover:scale-105 transition-transform duration-300 w-full sm:w-auto" data-cursor-text="Send" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Your Message"}
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mt-4">
                  We'll get back to you within 24 hours. Promise! 💙
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-coral/10 text-coral w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                Quick Response
              </h3>
              <p className="font-body text-muted-foreground">
                We respond to all inquiries within 24 hours
              </p>
            </div>
            <div>
              <div className="bg-primary-glow/10 text-primary-glow w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                Global Reach
              </h3>
              <p className="font-body text-muted-foreground">
                Working with clients worldwide, timezone-friendly
              </p>
            </div>
            <div>
              <div className="bg-accent/50 text-accent-foreground w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                Free Consultation
              </h3>
              <p className="font-body text-muted-foreground">
                Your first consultation is always on us
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
