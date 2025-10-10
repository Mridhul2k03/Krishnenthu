import {
  Search,
  Megaphone,
  PenTool,
  BarChart3,
  Palette,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Optimizes websites to rank higher on Google by improving content, keywords, and backlinks for better visibility and organic traffic.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Search,
      title: "Google Ads",
      description:
        "Expert in running search, display, and video ad campaigns that generate high-quality leads and conversions with smart targeting and optimization.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Megaphone,
      title: "Ad Campaigns",
      description:
        "Maximize ROI with data-driven paid advertising across Google, Facebook, Instagram, and LinkedIn.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description:
        "Engage your audience with compelling content that builds brand authority and drives conversions.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description:
        "Comprehensive strategies combining SEO, PPC, social media, and email for holistic growth.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
    },
    {
      icon: Palette,
      title: "Branding",
      description:
        "Build memorable brand identities that resonate with your target audience and stand out.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Make informed decisions with detailed performance tracking and actionable data insights.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            What I Offer
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Services & Solutions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Comprehensive digital marketing services tailored to your business
            goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-2xl hover:shadow-large transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
