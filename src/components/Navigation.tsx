
import { Button } from "@/components/ui/button";
import { Music, Home, Calendar, Users, Store, User, LogOut, MessageCircle, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname.startsWith(path);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: Store, label: "Store", path: "/store" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Sidebar - Collapsible */}
      <div className="hidden md:flex">
        {/* Hamburger Menu Button - Always Visible */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="fixed left-4 top-4 z-50 bg-card border border-concert-border shadow-lg"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Sidebar */}
        <nav className={`fixed left-0 top-0 h-full bg-card border-r border-concert-border shadow-lg z-40 overflow-y-auto transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        }`}>
          <div className={`p-6 ${isOpen ? "block" : "hidden"}`}>
            <Link to="/" className="flex items-center space-x-2 mb-8 mt-12">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Concert Circle
              </span>
            </Link>

            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive(item.path) 
                        ? "bg-gradient-primary text-white" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    asChild
                    onClick={() => setIsOpen(false)} // Close sidebar when navigating
                  >
                    <Link to={item.path}>
                      <Icon className="w-4 h-4 mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="w-full border-concert-border"
                asChild
              >
                <Link to="/login">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Overlay for mobile-like behavior */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Mobile Bottom Navigation - Updated Icons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-concert-border shadow-lg z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center space-y-1 ${
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
                asChild
              >
                <Link to={item.path}>
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
