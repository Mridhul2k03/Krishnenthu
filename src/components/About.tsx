import {
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Megaphone,
  Lightbulb,
} from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const skills = [
    { icon: TrendingUp, label: "SEO & Analytics", color: "text-primary" },
    { icon: Megaphone, label: "Social Media Ads", color: "text-accent-foreground" },
    { icon: Target, label: "Branding Strategy", color: "text-primary" },
    { icon: BarChart3, label: "Google Analytics", color: "text-accent-foreground" },
    { icon: Users, label: "Audience Insights", color: "text-primary" },
    { icon: Lightbulb, label: "Content Strategy", color: "text-accent-foreground" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full " />
              <img
                src="./2150063146.jpg"
                alt="Digital Marketer at Work"
                className="relative rounded-2xl shadow-sm w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
                About Me
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Crafting Digital Success Stories
              </h2>
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                 With years of experience in digital marketing, I specialize in strategy, storytelling, and performance-driven advertising—helping brands stand out and grow in today’s competitive digital world.
                </p>
                <p>
                 My expertise spans Google Ads, SEO, social media, and content marketing, ensuring every campaign drives measurable impact and lasting engagement.
                </p>
                <p>
                  My expertise spans Google Ads, SEO, social media, and content marketing, ensuring every campaign drives measurable impact and lasting engagement.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="glass-card p-4 rounded-xl hover:shadow-medium transition-all group"
                    >
                      <Icon
                        className={`w-6 h-6 mb-2 ${skill.color} group-hover:scale-110 transition-transform`}
                      />
                      <p className="text-sm font-medium text-foreground">
                        {skill.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
