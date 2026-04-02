import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    name: "Granite Countertops",
    description: "Premium granite countertops installed with precision and elegance.",
    image: "/services/granite.jpeg",
  },
  {
    name: "Marble Flooring",
    description: "Elegant marble flooring that adds timeless beauty to any space.",
    image: "/services/marble.jpeg",
  },
  {
    name: "Custom Furniture",
    description: "Bespoke furniture crafted to match your interior style.",
    image: "/services/furniture.jpeg",
  },
  {
    name: "Interior Design",
    description: "Complete interior solutions that reflect sophistication and functionality.",
    image: "/services/interior.jpeg",
  },
  {
    name: "Wall Finishes",
    description: "Luxury wall finishes that elevate your space.",
    image: "/services/wall.jpeg",
  },
  {
    name: "Kitchen & Bathroom Installations",
    description: "High-end installations with attention to detail and durability.",
    image: "/services/kitchen_bathroom.jpeg",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Services that{" "}
            <span className="font-serif italic font-normal text-white">
              transform your space.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            At Juma Granite Marble & Interiors, we offer a wide range of premium services
            including marble and granite installations, custom furniture, and complete interior solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl p-4 hover:glow-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="overflow-hidden rounded-2xl mb-4">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                >
                  <SwiperSlide>
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-72 object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.name}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};