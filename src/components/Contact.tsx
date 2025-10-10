import { useState } from "react";
import { Mail, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@digitalmarketer.com",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-primary",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-accent-foreground",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            Get In Touch
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Ready to grow your business? Drop me a message and let's discuss
            your next big campaign.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can I help?"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all group"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="mr-2 w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Social Links */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group ${social.color}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Let's connect
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl bg-gradient-hero">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                {[
                  "8+ years of proven experience",
                  "Data-driven strategies",
                  "Transparent reporting",
                  "Customized solutions",
                  "Dedicated support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
