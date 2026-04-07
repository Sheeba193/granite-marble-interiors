import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const projectImages = [
  "/projects/project1.jpeg",
  "/projects/project2.jpeg",
  "/projects/project3.jpeg",
  "/projects/project4.jpeg",
  "/projects/project5.jpeg",
];

const services = [
  "Granite Countertops",
  "Marble Flooring",
  "Custom Furniture",
  "Interior Design",
  "Wall Finishes",
  "Kitchen Installations",
  "Bathroom Finishing",
  "Electrical & Wiring",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/herobg.jpg" // 👉 replace with high-end marble/interior image
          alt="Luxury Interior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-background" />
      </div>

      {/* FLOATING GOLD PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#c9a14a",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* TAG */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Luxury Interiors • Granite • Marble
              </span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Transforming Spaces with{" "}
                <span className="text-primary glow-text">Luxury</span>
                <br />
                Marble & Granite
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                At Juma Granite Marble & Interiors, we specialize in premium
                marble, granite installations, and bespoke interior solutions.
                We craft elegant, timeless spaces that reflect quality,
                sophistication, and durability.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button>
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">

              {/* glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />

              <div className="relative glass rounded-3xl p-2 glow-border overflow-hidden">

                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="rounded-2xl"
                >
                  {projectImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Project ${index + 1}`}
                        className="w-full aspect-[4/5] object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* EXPERIENCE BADGE */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 z-10">
                  <div className="text-2xl text-center font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>

                {/* TRUST BADGE */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float z-10">
                  <span className="text-md text-center pr-2 font-medium">
                    Premium Finishes
                  </span>
                </div>

              </div>
            </div>
          </div>
          </div>

          {/* SERVICES MARQUEE */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-lg font-semibold text-muted-foreground mb-6 text-center">
              Our Services
            </p>

            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...services, ...services].map((service, idx) => (
                  <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-primary/60 hover:text-primary transition">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
    </section>
  );
};
