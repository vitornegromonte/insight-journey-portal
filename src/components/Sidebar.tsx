
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FileText, Layers, PaintBrush, User, Mail, Home } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/projects", icon: <Layers size={20} /> },
    { name: "Papers", path: "/papers", icon: <FileText size={20} /> },
    { name: "Art", path: "/art", icon: <PaintBrush size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 md:w-60 bg-black/30 border-r border-white/10 backdrop-blur-lg z-50 transition-all duration-300">
      <div className="flex flex-col h-full py-8 overflow-hidden">
        <div className="px-4 mb-8 flex justify-center md:justify-start">
          <Link to="/" className="font-display text-xl tracking-tight">
            <span className="text-gradient-accent">Gus</span>
            <span className="text-white hidden md:inline">.Dev</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-2">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-colors",
                    "hover:bg-white/10 group",
                    location.pathname === link.path 
                      ? "bg-accent/20 text-accent" 
                      : "text-muted-foreground"
                  )}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span className="hidden md:block">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="px-4 pt-4 border-t border-white/10 hidden md:block">
          <div className="text-xs text-muted-foreground">
            <p>© 2023 Gus Anderson</p>
            <p>PhD Candidate, AI Research</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
