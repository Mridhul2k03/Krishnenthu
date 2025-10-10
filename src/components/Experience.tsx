import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Digital Marketing Manager",
      company: "Exmedia Pvt. Ltd.",
      period: "2025 - Present",
      achievements: [
        "Led a team of 8 marketers to achieve 180% increase in qualified leads",
        "Implemented data-driven SEO strategy resulting in 250% organic traffic growth",
        "Managed $2M+ annual ad budget across multiple channels",
      ],
    },
    {
      role: "Digital Marketing Trainer",
      company: "Growth Partners Inc.",
      period: "2024 - 2025",
      achievements: [
        "Trained 50+ marketers on digital marketing best practices",
        "Developed curriculum for marketing training programs",
        "Provided mentorship and guidance to new hires",
      ],
    },
    {
      role: "Digital Marketing Intern",
      company: "StartupHub",
      period: "2024 - 2024",
      achievements: [
        "Built email marketing program from scratch with 35% open rate",
        "Managed brand partnerships generating $500K in value",
        "Produced data reports used for executive decision-making",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            Career Journey
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A track record of delivering results across diverse industries
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:shadow-large transition-all group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-0 sm:ml-16">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
