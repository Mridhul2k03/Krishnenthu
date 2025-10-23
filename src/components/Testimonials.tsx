import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Johnson",
      role: "Senior Manager",
      company: "TechStartup Inc.",
      content:
        "Working with this digital marketer transformed our online presence. Our revenue increased by 250% in just 6 months. The strategic approach and attention to data was exactly what we needed.",
      rating: 5,
    },
    {
      name: "Radha Krishnan",
      role: "Marketing Director",
      company: "E-commerce Plus",
      content:
        "The SEO strategies implemented were game-changing. We went from page 3 to ranking #1 for our top keywords. Traffic tripled, and more importantly, quality leads increased significantly.",
      rating: 5,
    },
    {
      name: "Answara Rajan",
      role: "Founder",
      company: "GrowthHub",
      content:
        "Best investment we made this year. The ROI on our ad campaigns exceeded expectations, and the reporting was crystal clear. Finally, someone who truly understands digital marketing.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            Client Testimonials
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Don't just take my word for it—hear from satisfied clients
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl relative animate-fade-in">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-10">
              <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-bold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role} at{" "}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
