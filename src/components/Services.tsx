import {

  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description:
        "Optimizes websites to rank higher on Google by improving content, keywords, and backlinks for better visibility and organic traffic.",
      color: "text-primary",
      bgColor: "bg-accent/20",
      src:"https://cdn-icons-png.flaticon.com/512/5597/5597785.png",
    },
    {
      title: "Google Ads",
      description:
      "Expert in running search, display, and video ad campaigns that generate high-quality leads and conversions with smart targeting and optimization.",
      color: "text-accent-foreground",
      bgColor: "bg-primary/10",
      src:"https://cdn-icons-png.flaticon.com/512/2875/2875421.png",
    },
    {
      title: "Social Media Marketing",
      description:
      "Skilled in creating and managing engaging campaigns on platforms like Facebook, Instagram, and LinkedIn to boost brand awareness and audience engagement.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
      src:"https://cdn-icons-png.flaticon.com/512/8407/8407469.png",
    },
    {
      title: "Content Marketing",
      description:
      "Creates valuable, SEO-friendly content that connects with audiences and builds brand trust while driving traffic and conversions.",
      color: "text-accent-foreground",
      bgColor: "bg-primary/10",
      src:"https://cdn-icons-png.flaticon.com/512/9743/9743201.png",
    },
    {
      title: "Web Designing",
      description:
      "Designs user-friendly, responsive, and visually appealing websites that deliver strong user experience and business results.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
      src:"https://cdn-icons-png.flaticon.com/512/2779/2779775.png",
    },
    {
      title: "Analytics & Reporting",
      description:
      "Uses tools like Google Analytics and Meta Insights to track performance, analyze data, and make informed marketing decisions.",
      color: "text-accent-foreground",
      bgColor: "bg-primary/10",
      src:"https://cdn-icons-png.flaticon.com/512/13965/13965894.png",
    },
    {
      title: "Email Marketing",
      description:
      "Builds and manages effective email campaigns that nurture leads and convert subscribers into loyal customers.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
      src:"https://cdn-icons-png.flaticon.com/512/17600/17600857.png",
    },
    {
      title: "Branding & Strategy",
      description:
      "Develops complete digital strategies to define brand voice, set goals, and ensure consistent online presence.",
      color: "text-accent-foreground",
      bgColor: "bg-primary/10",
      src:"https://cdn-icons-png.flaticon.com/512/7832/7832382.png",
    },
    {
      title: "Performance Marketing",
      description:
      "Focuses on measurable results by optimizing campaigns for the best ROI through A/B testing and conversion tracking.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
      src:"https://cdn-icons-png.flaticon.com/512/939/939354.png",
    },
    {
      title: "Creative Advertising",
      description:
      "Blends design and strategy to create attention-grabbing visuals and ad copies that connect emotionally and perform effectively.",
      color: "text-accent-foreground",
      bgColor: "bg-primary/10",
      src:"https://cdn-icons-png.flaticon.com/512/5471/5471014.png",
    },
    {
      title: "Lead Generation Campaigns",
      description:
      "Generate qualified leads for your business using paid and organic marketing funnels.",
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
      src:"https://cdn-icons-png.flaticon.com/512/16989/16989234.png",
    },
    {
      title: "Website Development & Optimization",
      description:
      "Design responsive, fast-loading websites optimized for SEO and conversions.",
      color: "text-accent-foreground",
      bgColor: "bg-primary/10",
      src:"https://cdn-icons-png.flaticon.com/512/7991/7991055.png",
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
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-2xl hover:shadow-large transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                 {/* <Icon className={`w-7 h-7 ${service.color}`} /> */}
                 <img src={`${service.src}`}
                      alt=""
                      className="w-7 h-7"
                       />
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
