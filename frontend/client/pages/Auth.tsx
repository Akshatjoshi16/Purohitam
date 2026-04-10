// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { toast } from "sonner";

// import { useAuth } from "@/hooks/use-auth";
// import { login as loginApi, signup as signupApi } from "@/services/api";

// const Auth = () => {
//   const navigate = useNavigate();
//   const { loginUser } = useAuth();

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // ======================
//   // LOGIN
//   // ======================
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await loginApi({
//         email: loginData.email,
//         password: loginData.password,
//       });

//       loginUser({
//         name: res.name,
//         email: res.email,
//         isVerified: res.isVerified,
//       });

//       toast.success("Welcome Back!", {
//         description: `Namaste ${res.name}`,
//       });

//       navigate("/");
//     } catch (err: any) {
//       // ✅ FIXED HERE
//       toast.error("Login failed", {
//         description: err.message || "Invalid email or password",
//       });
//     }
//   };

//   // ======================
//   // REGISTER
//   // ======================
//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await signupApi({
//         name: signupData.name,
//         email: signupData.email,
//         password: signupData.password,
//       });

//       loginUser({
//         name: res.name,
//         email: res.email,
//         isVerified:res.isVerified,
//       });

//       toast.success("Registration Successful!", {
//         description: `Welcome ${res.name}`,
//       });

//       navigate("/");
//     } catch (err: any) {
//       // ✅ FIXED HERE
//       toast.error("Signup failed", {
//         description: err.message || "Please check your details",
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-1 flex flex-col lg:flex-row">

//         {/* LEFT SIDE */}
//         <div className="hidden lg:flex lg:w-1/2 bg-accent text-white p-20 items-center justify-center">
//           <div className="max-w-lg space-y-10">
//             <h1 className="text-5xl font-bold">
//               Purohitam <br />
//               <span className="text-primary">Divine Seva</span>
//             </h1>
//             <p className="text-lg text-white/70">
//               Experience authentic Vedic rituals in Mahakaal’s sacred city.
//             </p>
//           </div>
//         </div>

//         {/* FORM SIDE */}
//         <div className="flex-1 flex items-center justify-center p-8">
//           <div className="w-full max-w-md">
//             <div className="bg-white p-8 rounded-3xl shadow-xl border">

//               <Tabs defaultValue="login">
//                 <TabsList className="grid grid-cols-2 mb-6">
//                   <TabsTrigger value="login">LOGIN</TabsTrigger>
//                   <TabsTrigger value="register">REGISTER</TabsTrigger>
//                 </TabsList>

//                 {/* LOGIN */}
//                 <TabsContent value="login">
//                   <form onSubmit={handleLogin} className="space-y-4">

//                     <Input
//                       type="email"
//                       placeholder="Email"
//                       required
//                       value={loginData.email}
//                       onChange={(e) =>
//                         setLoginData({
//                           ...loginData,
//                           email: e.target.value,
//                         })
//                       }
//                     />

//                     <Input
//                       type="password"
//                       placeholder="Password"
//                       required
//                       value={loginData.password}
//                       onChange={(e) =>
//                         setLoginData({
//                           ...loginData,
//                           password: e.target.value,
//                         })
//                       }
//                     />

//                     <Button type="submit" className="w-full">
//                       SIGN IN
//                     </Button>

//                   </form>
//                 </TabsContent>

//                 {/* REGISTER */}
//                 <TabsContent value="register">
//                   <form onSubmit={handleRegister} className="space-y-4">

//                     <Input
//                       placeholder="Full Name"
//                       required
//                       value={signupData.name}
//                       onChange={(e) =>
//                         setSignupData({
//                           ...signupData,
//                           name: e.target.value,
//                         })
//                       }
//                     />

//                     <Input
//                       type="email"
//                       placeholder="Email"
//                       required
//                       value={signupData.email}
//                       onChange={(e) =>
//                         setSignupData({
//                           ...signupData,
//                           email: e.target.value,
//                         })
//                       }
//                     />

//                     <Input
//                       type="password"
//                       placeholder="Password"
//                       required
//                       value={signupData.password}
//                       onChange={(e) =>
//                         setSignupData({
//                           ...signupData,
//                           password: e.target.value,
//                         })
//                       }
//                     />

//                     <Button type="submit" className="w-full">
//                       CREATE ACCOUNT
//                     </Button>

//                   </form>
//                 </TabsContent>

//               </Tabs>

//               <div className="mt-6 text-center">
//                 <Link to="/" className="text-primary text-sm hover:underline">
//                   Return to Home
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Auth;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Eye, EyeOff, Mail, Lock, User, ChevronRight } from "lucide-react";

import { useAuth } from "@/hooks/use-auth";
import { login as loginApi, signup as signupApi } from "@/services/api";

/* ─── ornamental divider ─────────────────────────── */
const OrnamentalDivider = () => (
  <div className="flex items-center gap-3 my-6">
    <div className="h-px flex-1 bg-stone-200" />
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
        fill="#f97316"
        opacity="0.5"
      />
    </svg>
    <div className="h-px flex-1 bg-stone-200" />
  </div>
);

/* ─── input wrapper with icon ─────────────────────── */
const IconInput = ({
  icon: Icon,
  rightIcon,
  onRightClick,
  ...props
}: {
  icon: React.ElementType;
  rightIcon?: React.ElementType;
  onRightClick?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative group">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-orange-500 transition-colors z-10" />
    <input
      {...props}
      className="w-full h-12 pl-11 pr-11 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 focus:bg-white transition-all"
    />
    {rightIcon && onRightClick && (
      <button
        type="button"
        onClick={onRightClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
        tabIndex={-1}
      >
        {React.createElement(rightIcon, { className: "w-4 h-4" })}
      </button>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════ */

const Auth = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [tab, setTab] = useState<"login" | "register">("login");
  const [showLoginPw, setShowLoginPw] = useState(false);
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  /* ── login ─────────────────────────────────────── */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await loginApi({ email: loginData.email, password: loginData.password });
      loginUser({ name: res.name, email: res.email, isVerified: res.isVerified });
      toast.success("Welcome back!", { description: `Namaste, ${res.name}` });
      navigate("/");
    } catch (err: any) {
      toast.error("Login failed", { description: err.message || "Invalid email or password" });
    } finally {
      setLoginLoading(false);
    }
  };

  /* ── signup ────────────────────────────────────── */
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupLoading(true);
    try {
      const res = await signupApi({ name: signupData.name, email: signupData.email, password: signupData.password });
      loginUser({ name: res.name, email: res.email, isVerified: res.isVerified });
      toast.success("Registration successful!", { description: `Welcome, ${res.name}` });
      navigate("/");
    } catch (err: any) {
      toast.error("Signup failed", { description: err.message || "Please check your details" });
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* ── LEFT PANEL ──────────────────────────────── */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden flex-col">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/mahakallok.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-stone-900/70 to-orange-950/60" />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Watermark ॐ */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[22rem] font-cinzel font-bold text-white/[0.03] leading-none">ॐ</span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-16 py-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-orange-400 font-cinzel font-bold text-xl tracking-wider group-hover:text-orange-300 transition-colors">
              PUROHITAM
            </span>
            <span className="text-orange-500/50 text-xs">·</span>
            <span className="text-orange-300/60 text-xs tracking-[0.2em] uppercase">Ujjain</span>
          </Link>

          {/* Middle content */}
          <div className="flex-1 flex flex-col justify-center max-w-md">

            <div className="inline-flex items-center gap-2 border border-orange-400/20 rounded-full px-4 py-1 mb-8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-300/70 text-[10px] tracking-[0.25em] uppercase">
                {tab === "login" ? "Welcome back" : "New devotee"}
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-cinzel font-bold text-white leading-[1.15] mb-5">
              {tab === "login" ? (
                <>Continue Your<br /><span className="text-orange-400">Sacred Journey</span></>
              ) : (
                <>Begin Your<br /><span className="text-orange-400">Spiritual Path</span></>
              )}
            </h1>

            <p className="text-orange-100/60 text-sm leading-relaxed mb-10 max-w-sm">
              {tab === "login"
                ? "Connect with verified Vedic priests and book authentic poojas in the sacred city of Mahakaal."
                : "Join thousands of devotees experiencing authentic Vedic traditions in holy Ujjain."}
            </p>

            {/* Sanskrit quote */}
            <div className="border-l-2 border-orange-500/40 pl-5">
              <p className="text-orange-300/80 italic text-sm mb-1">
                "श्रद्धावान् लभते ज्ञानम्"
              </p>
              <p className="text-orange-200/40 text-xs">
                The faithful one obtains wisdom. — Bhagavad Gita 4.39
              </p>
            </div>
          </div>

          {/* Bottom features */}
          <div className="flex gap-8">
            {[
              { num: "500+", label: "Poojas Performed" },
              { num: "3", label: "Verified Pandits" },
              { num: "12+", label: "Ritual Types" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-xl font-cinzel font-bold text-orange-400">{s.num}</p>
                <p className="text-orange-200/40 text-[10px] tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL — FORM ───────────────────────── */}
      <div className="flex-1 flex items-center justify-center bg-stone-50 px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/">
              <span className="text-orange-600 font-cinzel font-bold text-2xl tracking-wider">
                PUROHITAM
              </span>
            </Link>
            <p className="text-stone-400 text-xs mt-1 tracking-widest">UJJAIN · वैदिक सेवाएँ</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden">

            {/* Tab switcher */}
            <div className="flex border-b border-stone-100">
              {(["login", "register"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-4 text-xs font-cinzel tracking-[0.2em] uppercase transition-all ${
                    tab === t
                      ? "text-orange-600 border-b-2 border-orange-500 bg-orange-50/50"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {t === "login" ? "Sign In" : "Register"}
                </button>
              ))}
            </div>

            <div className="p-8">

              {/* Form heading */}
              <div className="mb-6">
                <h2 className="text-xl font-cinzel font-bold text-stone-800">
                  {tab === "login" ? "Welcome back" : "Create account"}
                </h2>
                <p className="text-stone-400 text-xs mt-1">
                  {tab === "login"
                    ? "Sign in to manage your bookings and spiritual journey."
                    : "Join Purohitam and experience sacred Vedic traditions."}
                </p>
              </div>

              {/* ── LOGIN FORM ─────────────────────────── */}
              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 block">
                      Email address
                    </label>
                    <IconInput
                      icon={Mail}
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 block">
                      Password
                    </label>
                    <IconInput
                      icon={Lock}
                      type={showLoginPw ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      rightIcon={showLoginPw ? EyeOff : Eye}
                      onRightClick={() => setShowLoginPw(!showLoginPw)}
                    />
                  </div>

                  <OrnamentalDivider />

                  <button
                    type="submit"
                    disabled={loginLoading}
                    className="w-full h-12 bg-orange-600 hover:bg-orange-500 disabled:bg-orange-400 text-white font-cinzel tracking-[0.2em] text-sm rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    {loginLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      <>
                        SIGN IN
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 mt-2">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setTab("register")}
                      className="text-orange-500 hover:text-orange-700 font-medium transition-colors"
                    >
                      Register here
                    </button>
                  </p>
                </form>
              )}

              {/* ── REGISTER FORM ──────────────────────── */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 block">
                      Full name
                    </label>
                    <IconInput
                      icon={User}
                      type="text"
                      placeholder="Your full name"
                      required
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 block">
                      Email address
                    </label>
                    <IconInput
                      icon={Mail}
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 block">
                      Password
                    </label>
                    <IconInput
                      icon={Lock}
                      type={showSignupPw ? "text" : "password"}
                      placeholder="Create a strong password"
                      required
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      rightIcon={showSignupPw ? EyeOff : Eye}
                      onRightClick={() => setShowSignupPw(!showSignupPw)}
                    />
                  </div>

                  {/* Password hint */}
                  <p className="text-[11px] text-stone-400 -mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-stone-300 inline-block" />
                    Use at least 8 characters with a mix of letters and numbers
                  </p>

                  <OrnamentalDivider />

                  <button
                    type="submit"
                    disabled={signupLoading}
                    className="w-full h-12 bg-orange-600 hover:bg-orange-500 disabled:bg-orange-400 text-white font-cinzel tracking-[0.2em] text-sm rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    {signupLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      <>
                        CREATE ACCOUNT
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 mt-2">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setTab("login")}
                      className="text-orange-500 hover:text-orange-700 font-medium transition-colors"
                    >
                      Sign in
                    </button>
                  </p>
                </form>
              )}

              {/* Trust badge */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-center gap-6">
                {[
                  { icon: "🔒", label: "Secure login" },
                  { icon: "🛡️", label: "Data protected" },
                  { icon: "✨", label: "Verified priests" },
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span style={{ fontSize: 16 }}>{b.icon}</span>
                    <span className="text-[10px] text-stone-400 tracking-wide">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-stone-400 text-xs hover:text-orange-500 transition-colors flex items-center justify-center gap-1"
            >
              ← Return to home
            </Link>
          </div>

          {/* Sanskrit footer */}
          <p className="mt-4 text-center text-stone-300 text-[11px] italic tracking-wider">
            श्रद्धा–सेवा–संयोगः
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
