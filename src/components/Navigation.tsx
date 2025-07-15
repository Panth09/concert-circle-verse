import { Button } from "@/components/ui/button";
import { Music, Home, Calendar, Users, Store, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname.startsWith(path);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: Store, label: "Store", path: "/store" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <nav className="fixed left-0 top-0 h-full w-64 bg-card border-r border-concert-border shadow-lg z-50">
          <div className="p-6">
            <Link to="/" className="flex items-center space-x-2 mb-8">
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
      </div>

      {/* Mobile Bottom Navigation */}
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
                  <Icon className="w-4 h-4" />
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