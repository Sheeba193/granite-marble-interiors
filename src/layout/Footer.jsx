import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitterSquare } from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/jumagranite/", label: "Instagram" },
  { icon: FaTwitterSquare, href: "https://twitter.com/JumaGranite", label: "Twitter" },
  { icon: FaFacebook, href: "https://www.facebook.com/JumaGranite", label: "Facebook" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/juma-granite/", label: "LinkedIn" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@jumagranite", label: "TikTok" },
];

const footerLinks = [
  {label: 'Home', href: '#'},
  {label: 'About Us', href: '#about'},
  {label: 'Services', href: '#services'},
  {label: 'Projects', href: '#projects'},
  {label: 'Contact', href: '#contact'},
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* logo & copy right */}
          <div>
            <a href="#" >
              {/* LOGO + NAME */}
              <a href="#" className="flex items-center gap-3">
                <img
                  src="/LOGO3.png" // 👉 replace with your actual image path
                  alt="Juma Granite Marble & Interiors"
                  className="w-24 h-12 object-cover rounded-full border border-gray-300"
                />
                {/*  */}
                <p className="text-md text-muted-foreground mt-2">
                        &copy; {new Date().getFullYear()} Juma Granite Marble & Interiors. All rights reserved.
                </p>
          
              </a>
            </a>   
            
          </div>
          {/* links */}
          <nav className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-md text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          
        </div>
      </div>
    </footer>
  )
}