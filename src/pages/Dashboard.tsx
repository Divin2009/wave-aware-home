import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, TrendingDown, AlertTriangle, Sparkles, Activity } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const dailyUsage = [
  { hour: "12am", usage: 2 },
  { hour: "3am", usage: 1 },
  { hour: "6am", usage: 45 },
  { hour: "9am", usage: 38 },
  { hour: "12pm", usage: 25 },
  { hour: "3pm", usage: 18 },
  { hour: "6pm", usage: 52 },
  { hour: "9pm", usage: 35 },
];

const weeklyUsage = [
  { day: "Mon", usage: 285 },
  { day: "Tue", usage: 320 },
  { day: "Wed", usage: 275 },
  { day: "Thu", usage: 310 },
  { day: "Fri", usage: 295 },
  { day: "Sat", usage: 340 },
  { day: "Sun", usage: 315 },
];

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-muted/30 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Water Usage Dashboard</h1>
            <p className="text-muted-foreground">Real-time insights into your water consumption</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Today's Usage
                  </CardTitle>
                  <Droplets className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">216 L</div>
                <p className="text-sm text-success flex items-center gap-1 mt-1">
                  <TrendingDown className="h-4 w-4" />
                  12% less than yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Monthly Average
                  </CardTitle>
                  <Activity className="h-4 w-4 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">302 L/day</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Current month trend
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Alerts
                  </CardTitle>
                  <AlertTriangle className="h-4 w-4 text-warning" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1</div>
                <p className="text-sm text-warning mt-1">
                  Bathroom sink - slow leak detected
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Water Saved
                  </CardTitle>
                  <TrendingDown className="h-4 w-4 text-success" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,247 L</div>
                <p className="text-sm text-muted-foreground mt-1">
                  This month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Today's Hourly Usage</CardTitle>
                <CardDescription>Water consumption throughout the day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dailyUsage}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="hour" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="usage" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Overview</CardTitle>
                <CardDescription>Daily water usage for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyUsage}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="day" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Bar dataKey="usage" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <CardTitle>AI-Powered Insights & Recommendations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-success/10 border border-success/20">
                <Badge variant="outline" className="bg-success text-success-foreground border-success">
                  High Impact
                </Badge>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Shorten morning showers by 2 minutes</h4>
                  <p className="text-sm text-muted-foreground">
                    You could save approximately 30 liters per day (900L/month). Your average shower time is 
                    currently 12 minutes, which is above the recommended 8-10 minutes.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Set shower timer reminder
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-warning/10 border border-warning/20">
                <Badge variant="outline" className="bg-warning text-warning-foreground border-warning">
                  Action Required
                </Badge>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Bathroom sink leak detected</h4>
                  <p className="text-sm text-muted-foreground">
                    We've detected a continuous flow of 0.5 L/hour from your bathroom sink for the past 8 hours. 
                    This could waste 360L per month if not addressed.
                  </p>
                  <Button variant="link" className="h-auto p-0 mt-2">
                    Schedule repair
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <Badge variant="outline" className="bg-primary text-primary-foreground border-primary">
                  Tip
                </Badge>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Peak usage during evening hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Your highest water consumption occurs between 6-9 PM. Consider running dishwasher and 
                    laundry during off-peak hours to reduce strain on local water systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device Status */}
          <Card>
            <CardHeader>
              <CardTitle>Connected Sensors</CardTitle>
              <CardDescription>Status of your AquaSense monitoring devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Kitchen Sink", status: "online", flow: "2.3 L/min" },
                  { name: "Bathroom Shower", status: "online", flow: "0 L/min" },
                  { name: "Bathroom Sink", status: "warning", flow: "0.5 L/min" },
                  { name: "Guest Bathroom", status: "online", flow: "0 L/min" },
                  { name: "Garden Hose", status: "online", flow: "0 L/min" },
                ].map((device, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${
                        device.status === "online" ? "bg-success" : "bg-warning"
                      }`} />
                      <span className="font-medium">{device.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{device.flow}</span>
                      <Badge variant="outline">
                        {device.status === "online" ? "Active" : "Alert"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
