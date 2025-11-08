import { Droplets, AlertTriangle, Sparkles, BarChart3, Smartphone, Shield } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Droplets,
    title: "Smart Sensor Network",
    description: "IoT sensors on taps, showers, and toilets measure flow rate and duration with ultrasonic precision.",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "Live visualization of current water usage per device, room, or time period with beautiful charts.",
    color: "text-secondary"
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection Alerts",
    description: "Identify anomalies or continuous flow to flag leaks before they become expensive problems.",
    color: "text-warning"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Get personalized tips like 'Shorten showers by 2 mins to save 30L/day' based on your usage patterns.",
    color: "text-accent"
  },
  {
    icon: Smartphone,
    title: "Mobile Notifications",
    description: "Push alerts for leaks, overuse, or conservation milestones directly to your phone.",
    color: "text-success"
  },
  {
    icon: Shield,
    title: "Historical Reports",
    description: "Track monthly usage, compare averages, and analyze your water footprint trends over time.",
    color: "text-primary"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powerful Features for Water Conservation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand, monitor, and optimize your water consumption
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
