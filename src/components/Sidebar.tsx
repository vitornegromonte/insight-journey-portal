
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FileText, Layers, Paintbrush, User, Home, BookOpen, Paperclip, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Sidebar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Research", path: "/papers", icon: <BookOpen size={18} /> },
    { name: "Projects", path: "/projects", icon: <Layers size={18} /> },
    { name: "Art", path: "/art", icon: <Paintbrush size={18} /> }
  ];

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Mobile sidebar toggle button
  const SidebarToggle = () => (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="fixed bottom-6 right-6 z-50 bg-accent text-white p-3 rounded-full shadow-lg md:hidden"
      aria-label="Toggle sidebar"
    >
      {isSidebarOpen ? <X size={20} /> : <Home size={20} />}
    </button>
  );

  if (isMobile) {
    return (
      <>
        <SidebarToggle />
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-50 shadow-sm transition-transform duration-300 ease-in-out",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col h-full py-8 overflow-hidden">
            <div className="px-4 mb-8">
              <Link 
                to="/" 
                className="text-xl font-display tracking-tight hover:opacity-80 transition-opacity"
              >
                <span className="text-accent">Vitor</span>
                <span className="text-gray-900"> Negromonte</span>
              </Link>
              <p className="text-xs text-gray-500 mt-1">Ph.D. Candidate</p>
            </div>
            
            <nav className="flex-1 px-2">
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "flex items-center py-2 px-3 rounded-md transition-all duration-200",
                        "hover:bg-gray-50 group",
                        location.pathname === link.path 
                          ? "bg-gray-50 text-accent" 
                          : "text-gray-600"
                      )}
                    >
                      <span className="mr-3">{link.icon}</span>
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
                
                {/* CV Download Button */}
                <li>
                  <a
                    href="/cv.pdf" 
                    download
                    className={cn(
                      "flex items-center py-2 px-3 rounded-md transition-all duration-200",
                      "hover:bg-gray-50 group text-gray-600",
                    )}
                  >
                    <span className="mr-3"><Paperclip size={18} /></span>
                    <span className="text-sm font-medium">Curriculum Vitæ</span>
                  </a>
                </li>
              </ul>
            </nav>
            
            <div className="px-4 pt-4 border-t border-gray-50">
              <div className="text-xs text-gray-500">
                <p>© 2025 Vitor Negromonte</p>
                <p>Data Scientist & AI Researcher</p>
                <p className="mt-1">
                  <a href="mailto:contact@vitornegromonte.com" className="text-accent hover:underline">
                    contact@vitornegromonte.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 md:w-60 bg-white border-r border-gray-50 shadow-sm z-40 transition-all duration-300">
      <div className="flex flex-col h-full py-8 overflow-hidden">
        <div className="px-4 mb-8 flex justify-center md:justify-start">
          <div>
            <Link 
              to="/" 
              className="text-xl font-display tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-accent">Vitor</span>
              <span className="text-gray-900 hidden md:inline"> Negromonte</span>
            </Link>
            <p className="text-xs text-gray-500 mt-1 hidden md:block">Ph.D. Candidate</p>
          </div>
        </div>
        
        <nav className="flex-1 px-2">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-all duration-200",
                    "hover:bg-gray-50 group",
                    location.pathname === link.path 
                      ? "bg-gray-50 text-accent" 
                      : "text-gray-600"
                  )}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span className="hidden md:block text-sm font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
            
            {/* CV Download Button */}
            <li>
              <a
                href="/cv.pdf" 
                download
                className={cn(
                  "flex items-center py-2 px-3 rounded-md transition-all duration-200",
                  "hover:bg-gray-50 group text-gray-600",
                )}
              >
                <span className="mr-3"><Paperclip size={18} /></span>
                <span className="hidden md:block text-sm font-medium">Curriculum Vitæ</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="px-4 pt-4 border-t border-gray-50 hidden md:block">
          <div className="text-xs text-gray-500">
            <p>© 2025 Vitor Negromonte</p>
            <p>Data Scientist & AI Researcher</p>
            <p className="mt-1">
              <a href="mailto:contact@vitornegromonte.com" className="text-accent hover:underline">
                contact@vitornegromonte.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
