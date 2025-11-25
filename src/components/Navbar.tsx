import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Studio",
    href: "/studio"
  }, {
    name: "SaaS",
    href: "/saas"
  }, {
    name: "Blogs",
    href: "/blogs"
  }, {
    name: "Careers",
    href: "/careers"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Venturemond" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive(item.href) ? "text-primary bg-secondary" : "text-foreground hover:text-primary hover:bg-secondary/50"}`}>
                {item.name}
              </Link>)}
          </div>


          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="lg:hidden border-t border-border bg-background">
          <div className="container-custom py-4 space-y-2">
            {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive(item.href) ? "text-primary bg-secondary" : "text-foreground hover:text-primary hover:bg-secondary/50"}`}>
                {item.name}
              </Link>)}

          </div>
        </div>}
    </nav>;
};
export default Navbar;