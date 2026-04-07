import { Button } from "@/components/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      } w-full z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO + NAME */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/LOGO3.png" // 👉 replace with your actual image path
            alt="Juma Granite Marble & Interiors"
            className="w-24 h-14 object-cover rounded-full border border-gray-300"
          />
          <div className="flex flex-col gap-0">
            <div className="text-md text-center md:text-xl font-semibold tracking-wide text-foreground">
            Juma's Granite 
          </div>
          <div className="text-sm text-center italic ">Marble & Interiors <span className="text-primary">.</span></div>
          </div>
          
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-md text-muted-foreground hover:text-foreground hover:underline rounded-full hover:bg-surface transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-block">
            <Button>
              Get Quote <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};