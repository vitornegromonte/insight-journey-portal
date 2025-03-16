
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, Search, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 flex items-center",
      isHome ? "bg-transparent" : "bg-white border-b border-gray-200"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo for mobile */}
        <div className="md:hidden">
          <Link to="/" className="font-display text-xl tracking-tight">
            <span className="text-accent">Vitor</span>
            <span className={isHome ? "text-white" : "text-gray-800"}>.Dev</span>
          </Link>
        </div>
        
        {/* Center section */}
        <div className="hidden md:flex items-center justify-center flex-1">
          {!isHome && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          )}
        </div>
        
        {/* Right section */}
        <div className="flex items-center space-x-4">
          {!isHome && (
            <>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-accent">
                <Bell size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-accent">
                <User size={20} />
              </Button>
            </>
          )}
          {isHome && (
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
              Contact Me
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
