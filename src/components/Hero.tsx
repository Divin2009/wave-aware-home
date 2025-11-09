import { Button } from "./ui/button";
import { Droplets, TrendingDown, Bell, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-water opacity-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 wave-animation">
            <Droplets className="h-4 w-4" />
            <span className="text-sm font-medium">Inspired by SDG 6 – Clean Water and Sanitation</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Track Every Drop,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Save Every Gallon</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AquaSense uses smart IoT sensors to give you real-time insights into your water consumption, 
            detect leaks instantly, and help you make informed conservation decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/login")}
            >
              Try Demo Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-card border border-border">
              <TrendingDown className="h-8 w-8 text-success mb-2 mx-auto" />
              <div className="text-2xl font-bold">30%</div>
              <div className="text-sm text-muted-foreground">Avg. Water Saved</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <Bell className="h-8 w-8 text-warning mb-2 mx-auto" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Leak Detection</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <Droplets className="h-8 w-8 text-primary mb-2 mx-auto" />
              <div className="text-2xl font-bold">Real-time</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <Sparkles className="h-8 w-8 text-accent mb-2 mx-auto" />
              <div className="text-2xl font-bold">AI-Powered</div>
              <div className="text-sm text-muted-foreground">Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
