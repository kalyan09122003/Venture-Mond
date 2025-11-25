import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    main: [
      { name: "Home", href: "/" },
      { name: "Studio", href: "/studio" },
      { name: "SaaS", href: "/saas" },
      { name: "Blogs", href: "/blogs" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={logo} alt="Venturemond" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Venture Mond is a Next-Gen Venture Studio & SaaS Company. Innovating the Future, One Byte at a Time. Where ideas become products — and products become ventures that scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {links.main.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@venturemond.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@venturemond.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  4th Floor, Bizness Square, Hitec City, Hyderabad – 500084
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Linkedin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.linkedin.com/company/venturemond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © Venturemond {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
