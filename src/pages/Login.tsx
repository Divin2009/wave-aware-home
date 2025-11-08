import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@aquasense.com");
  const [password, setPassword] = useState("demo123");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === "demo@aquasense.com" && password === "demo123") {
      toast.success("Welcome to your AquaSense Dashboard!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials. Use demo@aquasense.com / demo123");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-muted/30 pt-16">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full gradient-water">
                <Droplets className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl">Welcome to AquaSense</CardTitle>
            <CardDescription>
              Sign in to access your water footprint dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Demo Credentials:</p>
                <p className="text-sm font-mono">demo@aquasense.com</p>
                <p className="text-sm font-mono">demo123</p>
              </div>

              <Button type="submit" className="w-full">
                Sign In to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
