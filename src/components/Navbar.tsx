
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, FileText, BookOpen, Github, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/papers" },
    { name: "Projects", path: "/projects" },
    { name: "Art", path: "/art" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full",
        isScrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-sm" : "py-4 md:py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display tracking-tight text-gray-900 hover:opacity-90 transition-opacity flex items-center"
        >
          <span className="text-accent font-medium">Vitor Negromonte</span>
          {!isMobile && <span className="text-gray-600 text-sm ml-3">Data Scientist & AI Researcher</span>}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                location.pathname === link.path 
                  ? "text-accent" 
                  : "text-gray-600 hover:text-accent/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-l border-gray-200 h-5 mx-1"></div>
          <a 
            href="/cv.pdf" 
            download
            className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center"
          >
            <FileText size={16} className="mr-1" />
            CV
          </a>
          <a 
            href="https://scholar.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center"
          >
            <BookOpen size={16} className="mr-1" />
            Scholar
          </a>
          <div className="border-l border-gray-200 h-5 mx-1"></div>
          <div className="flex space-x-2">
            <a 
              href="https://github.com/vitornegromonte" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/vitornegromonte" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 p-1 rounded hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-fade-in absolute top-full left-0 right-0 p-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path 
                    ? "text-accent bg-accent/5" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-accent/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-1 pt-2"></div>
            <a 
              href="/cv.pdf" 
              download
              className="px-4 py-2.5 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-800 flex items-center"
            >
              <FileText size={16} className="mr-2" />
              CV
            </a>
            <a 
              href="https://scholar.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-800 flex items-center"
            >
              <BookOpen size={16} className="mr-2" />
              Scholar
            </a>
            <div className="border-t border-gray-100 my-1 pt-2"></div>
            <div className="px-4 py-1 flex space-x-4">
              <a 
                href="https://github.com/vitornegromonte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/vitornegromonte" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
