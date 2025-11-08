import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, TrendingDown, AlertTriangle, Sparkles, Activity, Award, Home, Bell } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const hourlyData = [
  { time: "12am", flow: 2 },
  { time: "3am", flow: 1 },
  { time: "6am", flow: 45 },
  { time: "7am", flow: 38 },
  { time: "8am", flow: 28 },
  { time: "9am", flow: 15 },
  { time: "10am", flow: 8 },
  { time: "11am", flow: 12 },
  { time: "12pm", flow: 25 },
  { time: "1pm", flow: 18 },
  { time: "2pm", flow: 10 },
  { time: "3pm", flow: 14 },
  { time: "4pm", flow: 22 },
  { time: "5pm", flow: 19 },
  { time: "6pm", flow: 52 },
  { time: "7pm", flow: 48 },
  { time: "8pm", flow: 35 },
  { time: "9pm", flow: 28 },
  { time: "10pm", flow: 15 },
  { time: "11pm", flow: 8 },
];

const weeklyUsage = [
  { day: "Mon", usage: 285, target: 244 },
  { day: "Tue", usage: 320, target: 244 },
  { day: "Wed", usage: 275, target: 244 },
  { day: "Thu", usage: 310, target: 244 },
  { day: "Fri", usage: 295, target: 244 },
  { day: "Sat", usage: 340, target: 244 },
  { day: "Sun", usage: 315, target: 244 },
];

const roomData = [
  { name: "Bathroom", value: 45, color: "hsl(var(--primary))" },
  { name: "Kitchen", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Laundry", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Garden", value: 10, color: "hsl(var(--chart-4))" },
];

const deviceData = [
  { device: "Shower", usage: 85, status: "normal", icon: "🚿" },
  { device: "Kitchen Sink", usage: 42, status: "normal", icon: "🚰" },
  { device: "Toilet", usage: 28, status: "warning", icon: "🚽" },
  { device: "Washing Machine", usage: 56, status: "normal", icon: "🧺" },
];

export default function Dashboard() {
  const [currentUsage, setCurrentUsage] = useState(12.4);
  const [notifications] = useState(3);

  useEffect(() => {
    // Update current usage every 2 minutes
    const interval = setInterval(() => {
      setCurrentUsage(prev => Math.max(0, prev + (Math.random() - 0.5) * 4));
    }, 120000); // 2 minutes

    // Also update on component mount (refresh)
    setCurrentUsage(Math.random() * 15 + 5);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-muted/30 pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Current Usage Hero */}
          <Card className="mb-6 border-0 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2 opacity-90">
                    <Activity className="h-5 w-5" />
                    <span className="text-sm font-medium">Current Flow Rate</span>
                  </div>
                  <div className="text-6xl font-bold mb-2">
                    {currentUsage.toFixed(1)}
                    <span className="text-3xl ml-2">L/min</span>
                  </div>
                  <div className="text-sm opacity-90">Kitchen Sink • Active</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90 mb-1">Today's Total</div>
                  <div className="text-3xl font-bold">287L</div>
                  <div className="text-sm opacity-90 mt-2">43L over target</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-success" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Weekly Average
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">243 L/day</div>
                <p className="text-sm text-success flex items-center gap-1 mt-1">
                  ↓ 12% from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Droplets className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Monthly Total
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7,290 L</div>
                <p className="text-sm text-muted-foreground mt-1">
                  8 days remaining
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-warning/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Alerts
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1 Warning</div>
                <p className="text-sm text-warning mt-1">
                  Toilet leak detected
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Water Saved
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">940 L</div>
                <p className="text-sm text-muted-foreground mt-1">
                  This month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Usage Trend</CardTitle>
                <CardDescription>Daily consumption vs target</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weeklyUsage}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="day" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }} />
                    <Legend />
                    <Bar dataKey="usage" fill="hsl(var(--primary))" name="Usage (L)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="target" fill="hsl(var(--muted))" name="Target (L)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage by Room</CardTitle>
                <CardDescription>Distribution across your home</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={roomData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={90}
                      fill="hsl(var(--primary))"
                      dataKey="value"
                    >
                      {roomData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Hourly Flow Pattern */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Today's Hourly Flow Pattern</CardTitle>
              <CardDescription>Water flow rate throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="time" className="text-xs" />
                  <YAxis className="text-xs" label={{ value: 'L/min', angle: -90, position: 'insideLeft' }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }} />
                  <Line 
                    type="monotone" 
                    dataKey="flow" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bottom Row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Device Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Device Status
                </CardTitle>
                <CardDescription>Connected sensor readings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {deviceData.map((device, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{device.icon}</span>
                        <div>
                          <div className="font-medium">{device.device}</div>
                          <div className="text-sm text-muted-foreground">{device.usage}L today</div>
                        </div>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${device.status === 'warning' ? 'bg-warning' : 'bg-success'}`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Alerts
                </CardTitle>
                <CardDescription>Notifications and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <div className="flex items-start gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Possible leak in bathroom toilet</div>
                        <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-start gap-2 mb-1">
                      <TrendingDown className="h-4 w-4 text-success mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">You saved 45L today vs last week!</div>
                        <div className="text-xs text-muted-foreground mt-1">5 hours ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-start gap-2 mb-1">
                      <Award className="h-4 w-4 text-accent mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">7-day conservation streak!</div>
                        <div className="text-xs text-muted-foreground mt-1">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <CardTitle>AI Insights</CardTitle>
                </div>
                <CardDescription>Personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                  <Badge variant="outline" className="bg-success/20 text-success border-success mb-2">
                    High Impact
                  </Badge>
                  <p className="text-sm font-medium mb-1">Shorten showers by 2 minutes</p>
                  <p className="text-xs text-muted-foreground">Save ~30L/day (900L/month)</p>
                </div>

                <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <Badge variant="outline" className="bg-warning/20 text-warning border-warning mb-2">
                    Action Needed
                  </Badge>
                  <p className="text-sm font-medium mb-1">Fix running toilet</p>
                  <p className="text-xs text-muted-foreground">Prevent 200L/day waste</p>
                </div>

                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Badge variant="outline" className="bg-primary/20 text-primary border-primary mb-2">
                    Tip
                  </Badge>
                  <p className="text-sm font-medium mb-1">Run dishwasher off-peak</p>
                  <p className="text-xs text-muted-foreground">Reduce system strain</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
