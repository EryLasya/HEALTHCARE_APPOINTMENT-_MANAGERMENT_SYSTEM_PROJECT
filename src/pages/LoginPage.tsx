import { useState } from 'react';
import './LoginPage.css';
import { useNavigate, Link } from 'react-router-dom';
import { AuthService } from '@/services/AuthService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, Lock, User, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const result = AuthService.login(username, password);
      if (result) {
        toast.success(`Welcome back, ${result.user.fullName}!`);
        const routes = { PATIENT: '/patient/dashboard', DOCTOR: '/doctor/dashboard', RECEPTIONIST: '/receptionist/dashboard' };
        navigate(routes[result.user.role]);
      } else {
        toast.error('Invalid credentials. Try: patient1, doctor1, or receptionist1');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 healthcare-gradient items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-heading font-extrabold text-primary-foreground mb-4">
            HealthCare<br />Management System
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            A unified microservice platform for patients, doctors, and receptionists.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-primary-foreground/70 text-sm">
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <p className="font-semibold text-primary-foreground">Patients</p>
              <p>Book & manage</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <p className="font-semibold text-primary-foreground">Doctors</p>
              <p>Schedule & records</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <p className="font-semibold text-primary-foreground">Reception</p>
              <p>Coordinate all</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <Card className="w-full max-w-md border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="lg:hidden w-14 h-14 rounded-xl healthcare-gradient flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Sign In</h2>
            <p className="text-muted-foreground text-sm mt-1">Access your healthcare portal</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="username" placeholder="Enter username" className="pl-10" value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="Enter password" className="pl-10" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 p-4 rounded-lg bg-accent text-accent-foreground text-xs space-y-1">
              <p className="font-semibold text-sm mb-2">Demo Accounts:</p>
              <p><strong>patient1</strong> — Patient Portal</p>
              <p><strong>doctor1</strong> — Doctor Portal</p>
              <p><strong>receptionist1</strong> — Reception Desk</p>
              <p className="text-muted-foreground mt-1">Use any password</p>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-medium hover:underline">Register here</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
