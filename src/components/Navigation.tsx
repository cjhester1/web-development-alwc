import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const ministryLinks = [
    { name: "Youth Ministry", path: "/ministries/youth" },
    { name: "Children's Ministry", path: "/ministries/children" },
    { name: "Music Ministry", path: "/ministries/music" },
    { name: "Prayer Ministry", path: "/ministries/prayer" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-primary/96 backdrop-blur-md shadow-xl border-b border-primary-light/20"
          : "bg-primary/98 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-4 text-primary-foreground hover:opacity-90 transition-smooth"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-accent-foreground font-bold text-base">AL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight">Abundant Life</span>
              <span className="text-sm opacity-90 -mt-0.5 font-medium">Worship Center</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-smooth hover:text-accent relative ${
                isActive("/") ? "text-accent" : "text-primary-foreground/90"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full ${
                isActive("/") ? "after:w-full" : ""
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/connect"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/connect") ? "text-accent" : "text-primary-foreground"
              }`}
            >
              How to Connect
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-primary-foreground"
              }`}
            >
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-primary-foreground hover:text-accent transition-smooth">
                Ministries <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {ministryLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className="w-full cursor-pointer hover:bg-muted"
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/media"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/media") ? "text-accent" : "text-primary-foreground"
              }`}
            >
              Media
            </Link>

            <Link
              to="/events"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/events") ? "text-accent" : "text-primary-foreground"
              }`}
            >
              Events
            </Link>

            <Link
              to="/resources"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/resources") ? "text-accent" : "text-primary-foreground"
              }`}
            >
              Resources
            </Link>

            <Button asChild variant="secondary" size="default" className="btn-hover-lift font-semibold">
              <Link to="/give">Give</Link>
            </Button>

            <Button asChild size="default" className="btn-hero btn-hover-lift font-semibold px-6">
              <Link to="/connect">Plan a Visit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-light/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/connect"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Connect
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/media"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Media
              </Link>
              <Link
                to="/events"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="flex space-x-2 px-3 py-2">
                <Button asChild variant="secondary" size="sm" className="flex-1">
                  <Link to="/give" onClick={() => setIsMobileMenuOpen(false)}>Give</Link>
                </Button>
                <Button asChild size="sm" className="btn-hero flex-1">
                  <Link to="/connect" onClick={() => setIsMobileMenuOpen(false)}>Plan a Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;