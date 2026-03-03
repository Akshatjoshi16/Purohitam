import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, User, Mail, Lock, Phone, ChevronRight, Star } from "lucide-react";
import { toast } from "sonner";

import { useAuth } from "@/hooks/use-auth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "Admin User", role: "admin" });
    toast.success("Welcome Back!", {
      description: "You have successfully logged in to your account.",
    });
    setTimeout(() => navigate("/admin"), 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "New User", role: "user" });
    toast.success("Registration Successful!", {
      description: "Welcome to Ujjain Pandit Seva. You can now start booking rituals.",
    });
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-700 min-h-screen">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Visual Side */}
        <div className="hidden lg:flex lg:w-1/2 bg-accent text-white p-20 relative overflow-hidden items-center justify-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30 blur-sm"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/29329247/pexels-photo-29329247.jpeg")' }}
          />
          <div className="absolute inset-0 spiritual-pattern opacity-10" />
          
          <div className="relative z-10 max-w-lg space-y-12">
            <div className="space-y-6">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center glow-saffron shadow-2xl">
                <span className="text-white font-cinzel font-bold text-3xl">U</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-cinzel font-bold leading-tight">Ujjain <br /> <span className="text-primary glow-saffron">Pandit Seva</span></h1>
              <p className="text-xl text-white/70 italic font-playfair leading-relaxed">
                "Experience the divine blessings of Mahakaal through authentic Vedic traditions."
              </p>
            </div>

            <div className="space-y-8 pt-12 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg mb-1 uppercase tracking-widest">Verified Pandits</h3>
                  <p className="text-sm text-white/50">Only background-checked and learned priests are onboarded.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg mb-1 uppercase tracking-widest">Secure Bookings</h3>
                  <p className="text-sm text-white/50">Your data and spiritual requests are handled with utmost care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 spiritual-pattern opacity-5" />
          
          <div className="w-full max-w-md relative z-10 space-y-10">
            <div className="text-center lg:hidden space-y-4">
               <div className="h-12 w-12 bg-primary mx-auto rounded-full flex items-center justify-center glow-saffron">
                <span className="text-white font-cinzel font-bold text-xl">U</span>
              </div>
              <h2 className="text-3xl font-cinzel font-bold text-accent">UJJAIN PANDIT SEVA</h2>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-border">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-10 h-14 bg-muted/30 p-1.5 rounded-2xl">
                  <TabsTrigger value="login" className="font-cinzel tracking-widest text-xs rounded-xl transition-all data-[state=active]:bg-primary data-[state=active]:text-white">LOGIN</TabsTrigger>
                  <TabsTrigger value="register" className="font-cinzel tracking-widest text-xs rounded-xl transition-all data-[state=active]:bg-primary data-[state=active]:text-white">REGISTER</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-accent/50 ml-1">Email or Phone</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
                        <Input placeholder="Enter your email or phone" required className="pl-10 bg-muted/30 h-12 rounded-xl border-border/50 focus:ring-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/50">Password</label>
                        <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">Forgot?</Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
                        <Input type="password" placeholder="••••••••" required className="pl-10 bg-muted/30 h-12 rounded-xl border-border/50 focus:ring-primary" />
                      </div>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-sm font-cinzel tracking-widest glow-saffron shadow-lg rounded-2xl transition-all hover:scale-[1.02]">
                      SIGN IN NOW <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/50 ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
                          <Input placeholder="John Doe" required className="pl-10 bg-muted/30 h-12 rounded-xl border-border/50 focus:ring-primary" />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-2 md:col-span-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/50 ml-1">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
                          <Input type="tel" placeholder="+91..." required className="pl-10 bg-muted/30 h-12 rounded-xl border-border/50 focus:ring-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-accent/50 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
                        <Input type="email" placeholder="devotee@example.com" required className="pl-10 bg-muted/30 h-12 rounded-xl border-border/50 focus:ring-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-accent/50 ml-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-primary/60" />
                        <Input type="password" placeholder="••••••••" required className="pl-10 bg-muted/30 h-12 rounded-xl border-border/50 focus:ring-primary" />
                      </div>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-sm font-cinzel tracking-widest glow-saffron shadow-lg rounded-2xl transition-all hover:scale-[1.02]">
                      CREATE ACCOUNT <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-10 pt-10 border-t flex flex-col items-center gap-4">
                <p className="text-[10px] text-foreground/40 font-cinzel tracking-widest text-center uppercase">
                  BY CONTINUING, YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY.
                </p>
                <Link to="/" className="text-primary font-cinzel text-[10px] tracking-widest font-bold hover:underline">
                  RETURN TO HOME PAGE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
