import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Juma Granite Marble & Interiors transformed our living room with stunning marble countertops and elegant furniture. Truly a top-notch service!",
    author: "Brian Mwangi",
    role: "Homeowner, Nairobi",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote:
      "The team provided professional interior design advice and delivered beautiful granite installations. Highly recommended for anyone looking for quality work.",
    author: "Lydia Njeri",
    role: "Interior Designer, Nairobi",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Their craftsmanship in furniture making is exceptional. The custom pieces we ordered fit perfectly and look amazing in our home.",
    author: "David Otieno",
    role: "Entrepreneur, Nairobi",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    quote:
      "I’m impressed by their attention to detail. From marble flooring to cabinets, every installation was flawless and professionally handled.",
    author: "Mercy Wambui",
    role: "Homeowner, Nairobi",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    quote:
      "Juma Granite Marble & Interiors delivers premium quality materials and designs. The furniture and countertops exceeded our expectations.",
    author: "Kevin Kiptoo",
    role: "Hotel Manager, Nairobi",
    avatar: "https://randomuser.me/api/portraits/men/69.jpg",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-gradient-to-br from-black/90 to-gray-900">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-white">
            Hear from Our{" "}
            <span className="font-serif italic font-normal text-primary">Clients & Partners</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial */}
            <div className="glass p-8 md:p-12 rounded-3xl shadow-lg border border-primary/20 animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 text-white">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].author}</div>
                  <div className="text-sm text-primary/70">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/50 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              <button
                className="p-3 rounded-full glass hover:bg-primary/20 transition-all"
                onClick={nextTestimonial}
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};