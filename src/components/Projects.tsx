import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Growth Campaign",
      category: "Digital Marketing",
      description:
        "Led a comprehensive digital marketing strategy that increased online sales by 320% in 6 months.",
      image: project1,
      metrics: [
        { label: "ROI", value: "320%" },
        { label: "Revenue", value: "$2.5M" },
        { label: "Conversion Rate", value: "8.2%" },
      ],
    },
    {
      title: "SEO Transformation",
      category: "SEO Strategy",
      description:
        "Implemented technical SEO improvements and content strategy that tripled organic traffic.",
      image: project2,
      metrics: [
        { label: "Traffic Growth", value: "300%" },
        { label: "Keywords Ranked", value: "450+" },
        { label: "Domain Authority", value: "+28" },
      ],
    },
    {
      title: "Social Media Success",
      category: "Paid Advertising",
      description:
        "Managed multi-platform ad campaigns achieving 5x ROAS and building strong brand presence.",
      image: project3,
      metrics: [
        { label: "ROAS", value: "5.2x" },
        { label: "Engagement", value: "+420%" },
        { label: "Followers", value: "85K+" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            Portfolio
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Case Studies & Results
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Real campaigns, real results—driving measurable growth for brands
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-large transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-primary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="flex items-center justify-center gap-1 text-accent-foreground font-bold text-base sm:text-lg mb-1">
                        {metric.value}
                        {i === 0 && <TrendingUp className="w-4 h-4" />}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <Button
                  variant="outline"
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
                >
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
