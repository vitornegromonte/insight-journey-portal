
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, FileText, BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" : "py-4 md:py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display tracking-tight text-gray-900 hover:opacity-80 transition-opacity flex items-center"
        >
          <span className="text-accent font-medium">Vitor Negromonte</span>
          {!isMobile && <span className="text-gray-600 text-sm ml-3">Data Scientist & AI Researcher</span>}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                location.pathname === link.path 
                  ? "text-accent" 
                  : "text-gray-600 hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/cv.pdf" 
            download
            className="text-sm font-medium text-gray-600 hover:text-accent transition-colors duration-200 flex items-center"
          >
            <FileText size={16} className="mr-1" />
            CV
          </a>
          <a 
            href="https://scholar.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-accent transition-colors duration-200 flex items-center"
          >
            <BookOpen size={16} className="mr-1" />
            Scholar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in absolute top-full left-0 right-0 p-4 mt-0 shadow-md">
          <nav className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded transition-colors",
                  location.pathname === link.path 
                    ? "text-accent" 
                    : "text-gray-600 hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/cv.pdf" 
              download
              className="px-4 py-2 text-sm font-medium rounded transition-colors text-gray-600 hover:text-accent flex items-center"
            >
              <FileText size={16} className="mr-1" />
              CV
            </a>
            <a 
              href="https://scholar.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded transition-colors text-gray-600 hover:text-accent flex items-center"
            >
              <BookOpen size={16} className="mr-1" />
              Scholar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
