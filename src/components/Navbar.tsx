import { Droplets } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
          <Droplets className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Aqua Sense</span>
        </NavLink>
        
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            Home
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            Dashboard
          </NavLink>
          <NavLink to="/login">
            <Button variant="default" size="sm">
              Try Demo
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
