// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import {
//   Menu,
//   X,
//   Calendar,
//   MapPin,
//   Sparkles,
//   User,
//   Bell,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/hooks/use-auth";
// import axios from "axios";

// const navLinks = [
//   { name: "Pooja Booking", path: "/pooja-booking", icon: Calendar },
//   { name: "Muhurt / Astrology", path: "/muhurt", icon: Sparkles },
//   { name: "City Guide", path: "/city-guide", icon: MapPin },
// ];

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const { isAuthenticated, logout, user } = useAuth();

//   const isAdmin = user?.email === "admin@purohitam.com";

//   const notifications = [
//     "Your Rudrabhishek booking is approved.",
//     "Satyanarayan Katha is pending approval.",
//   ];

//   // ✅ VERIFY FUNCTION
//   const handleVerifyClick = async () => {
//     try {
//       await axios.post(
//         "http://localhost:8080/api/v1.0/send-otp",
//         {},
//         { withCredentials: true }
//       );

//       navigate("/verify-otp");
//     } catch (err) {
//       alert("Failed to send OTP");
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
//       <div className="container flex h-16 items-center justify-between">
        
//         {/* LOGO */}
//         <Link to="/" className="flex items-center space-x-2">
//           <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
//             <span className="text-white font-cinzel font-bold text-lg">
//               🔱
//             </span>
//           </div>
//           <span className="font-cinzel font-bold text-xl tracking-wider text-accent hidden sm:inline-block">
//             PUROHITAM
//           </span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary",
//                 location.pathname === link.path
//                   ? "text-primary"
//                   : "text-foreground/70"
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}

//           {isAuthenticated ? (
//             <div className="flex items-center gap-6 ml-6 relative">
              
//               {/* 🔥 VERIFY ACCOUNT BUTTON */}
//               {user && !user.isVerified && (
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={handleVerifyClick}
//                   className="text-xs border-yellow-500 text-yellow-600"
//                 >
//                   Verify Account
//                 </Button>
//               )}

//               {/* Notification Bell
//               <div
//                 className="relative cursor-pointer"
//                 onClick={() =>
//                   setShowNotifications(!showNotifications)
//                 }
//               >
//                 <Bell className="w-5 h-5 text-primary" />

//                 {notifications.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//                     {notifications.length}
//                   </span>
//                 )}
//               </div> */}

//               {/* Notification Dropdown */}
//               {showNotifications && (
//                 <div className="absolute right-0 top-12 w-72 bg-white shadow-lg rounded-xl p-4 border z-50">
//                   <p className="font-semibold mb-3">
//                     Notifications
//                   </p>

//                   {notifications.length === 0 ? (
//                     <p className="text-sm text-gray-500">
//                       No new notifications
//                     </p>
//                   ) : (
//                     <div className="space-y-3 text-sm">
//                       {notifications.map((note, index) => (
//                         <div
//                           key={index}
//                           className="p-2 bg-primary/5 rounded-md"
//                         >
//                           {note}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* My Bookings */}
//               <Link
//                 to="/my-bookings"
//                 className="text-sm font-medium hover:text-primary"
//               >
//                 My Bookings
//               </Link>

//               {/* Admin */}
//               {isAdmin && (
//                 <Link
//                   to="/admin"
//                   className="text-sm font-bold text-primary hover:underline"
//                 >
//                   Admin
//                 </Link>
//               )}

//               {/* Greeting */}
//               <span className="text-sm font-cinzel text-primary">
//                 Namaste, {user?.name}
//               </span>

//               {/* Logout */}
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={logout}
//                 className="text-xs font-cinzel tracking-widest text-foreground/50"
//               >
//                 LOGOUT
//               </Button>
//             </div>
//           ) : (
//             <Link to="/auth">
//               <Button
//                 variant="outline"
//                 className="ml-4 border-primary text-primary hover:bg-primary/10"
//               >
//                 <User className="mr-2 h-4 w-4" />
//                 Sign In
//               </Button>
//             </Link>
//           )}
//         </nav>

//         {/* MOBILE MENU BUTTON */}
//         <div className="flex items-center md:hidden">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X /> : <Menu />}
//           </Button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden border-b bg-background p-4">
//           <nav className="flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   "text-base font-medium transition-colors",
//                   location.pathname === link.path
//                     ? "text-primary"
//                     : "text-foreground/70"
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {isAuthenticated ? (
//               <>
//                 {/* 🔥 VERIFY BUTTON MOBILE */}
//                 {user && !user.isVerified && (
//                   <Button
//                     onClick={() => {
//                       handleVerifyClick();
//                       setIsOpen(false);
//                     }}
//                     className="w-full bg-yellow-500 text-white"
//                   >
//                     Verify Account
//                   </Button>
//                 )}

//                 <Link
//                   to="/my-bookings"
//                   onClick={() => setIsOpen(false)}
//                   className="text-primary font-medium"
//                 >
//                   My Bookings
//                 </Link>

//                 {isAdmin && (
//                   <Link
//                     to="/admin"
//                     onClick={() => setIsOpen(false)}
//                     className="text-primary font-bold"
//                   >
//                     Admin Dashboard
//                   </Link>
//                 )}

//                 <Button
//                   onClick={() => {
//                     logout();
//                     setIsOpen(false);
//                   }}
//                   className="w-full"
//                 >
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <Link to="/auth" onClick={() => setIsOpen(false)}>
//                 <Button className="w-full bg-primary text-white">
//                   Sign In
//                 </Button>
//               </Link>
//             )}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };
// export const Footer = () => (
//   <footer className="border-t bg-muted/30 py-12 text-center">
//     <p className="text-sm text-gray-500">
//       © {new Date().getFullYear()} PUROHITAM. Divine Service Platform.
//     </p>
//   </footer>
// );

// export const Layout = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">{children}</main>
//       <Footer />
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar, MapPin, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import axios from "axios";

const navLinks = [
  { name: "Pooja Booking", path: "/pooja-booking", icon: Calendar },
  { name: "Muhurt", path: "/muhurt", icon: Sparkles },
  { name: "City Guide", path: "/city-guide", icon: MapPin },
];

/* ─── Decorative SVG divider ─────────────────────────── */
const OmDivider = () => (
  <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="mx-auto opacity-40">
    <line x1="0" y1="10" x2="45" y2="10" stroke="#C9952A" strokeWidth="0.8" />
    <text x="50" y="14" fontSize="12" fill="#C9952A" fontFamily="serif">ॐ</text>
    <line x1="75" y1="10" x2="120" y2="10" stroke="#C9952A" strokeWidth="0.8" />
  </svg>
);

/* ─── Lotus SVG motif ────────────────────────────────── */
const LotusDivider = () => (
  <svg width="180" height="24" viewBox="0 0 180 24" fill="none" className="opacity-30">
    <line x1="0" y1="12" x2="60" y2="12" stroke="#C9952A" strokeWidth="0.6" strokeDasharray="3 4" />
    <circle cx="90" cy="12" r="3" fill="#C9952A" opacity="0.6" />
    <circle cx="80" cy="12" r="1.5" fill="#C9952A" opacity="0.4" />
    <circle cx="100" cy="12" r="1.5" fill="#C9952A" opacity="0.4" />
    <line x1="120" y1="12" x2="180" y2="12" stroke="#C9952A" strokeWidth="0.6" strokeDasharray="3 4" />
  </svg>
);

/* ═══════════════════════════════════════════════════════ */

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
  const isAdmin = user?.email === "admin@purohitam.com";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const handleVerifyClick = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1.0/send-otp", {}, { withCredentials: true });
      navigate("/verify-otp");
    } catch {
      alert("Failed to send OTP");
    }
  };

  return (
    <>
      {/* ── Top sacred strip ─────────────────────────── */}
      <div className="hidden md:flex items-center justify-center gap-2 bg-[#1A0800] py-1.5 text-[10px] tracking-[3px] font-cinzel text-[#C9952A]/70 uppercase select-none">
        <span>🔱</span>
        <span>हर हर महादेव</span>
        <span className="mx-2 opacity-40">·</span>
        <span>Mahakaleshwar Jyotirlinga · Ujjain</span>
        <span className="mx-2 opacity-40">·</span>
        <span>जय श्री महाकाल</span>
        <span>🔱</span>
      </div>

      {/* ── Main header ──────────────────────────────── */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-[#0F0500]/97 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.5)] border-b border-[#C9952A]/15"
            : "bg-[#0F0500] border-b border-[#C9952A]/20"
        )}
      >
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative container flex h-[68px] items-center justify-between px-4 md:px-8">

          {/* ── Logo ─────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-[#C9952A]/40 group-hover:border-[#C9952A]/70 transition-colors duration-500" />
              <div className="absolute inset-[3px] rounded-full border border-[#C9952A]/20" />
              <span className="text-[18px] z-10 select-none">🔱</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-cinzel font-bold text-[18px] tracking-[0.18em] text-white group-hover:text-[#F5C842] transition-colors duration-300">
                PUROHITAM
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#C9952A]/50 uppercase font-light mt-0.5 hidden sm:block">
                वैदिक सेवा · Ujjain
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ──────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative group flex items-center gap-1.5 px-4 py-2 font-cinzel text-[11px] tracking-[2px] uppercase transition-all duration-200",
                    active ? "text-[#F5C842]" : "text-[#C9952A]/70 hover:text-[#F5C842]"
                  )}
                >
                  <link.icon className="w-3 h-3 opacity-70" />
                  {link.name}
                  {/* Active underline */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-[1px] bg-[#C9952A] transition-all duration-300",
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop auth ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                {/* Verify badge */}
                {user && !user.isVerified && (
                  <button
                    onClick={handleVerifyClick}
                    className="flex items-center gap-1.5 text-[10px] font-cinzel tracking-[2px] uppercase border border-yellow-600/60 text-yellow-500 hover:bg-yellow-600/10 px-3 py-1.5 rounded-full transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    Verify Account
                  </button>
                )}

                {/* My Bookings */}
                <Link
                  to="/my-bookings"
                  className="text-[11px] font-cinzel tracking-[2px] uppercase text-[#C9952A]/70 hover:text-[#F5C842] transition-colors"
                >
                  My Bookings
                </Link>

                {/* Admin */}
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="text-[11px] font-cinzel tracking-[2px] uppercase text-red-400 hover:text-red-300 transition-colors"
                  >
                    Admin
                  </Link>
                )}

                {/* Separator */}
                <div className="w-px h-4 bg-[#C9952A]/20" />

                {/* User greeting */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#C9952A]/15 border border-[#C9952A]/30 flex items-center justify-center">
                    <span className="text-[#C9952A] text-xs font-cinzel font-bold">
                      {user?.name?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[11px] font-cinzel text-[#C9952A]/80 tracking-wide max-w-[100px] truncate">
                    {user?.name}
                  </span>
                </div>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="text-[10px] font-cinzel tracking-[2px] uppercase text-white/30 hover:text-white/60 transition-colors border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth">
                <button className="flex items-center gap-2 font-cinzel text-[11px] tracking-[2.5px] uppercase bg-gradient-to-r from-[#C9952A] to-[#E8B84B] text-[#1A0800] font-semibold px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(201,149,42,0.4)] transition-all duration-300 hover:scale-[1.02]">
                  <User className="w-3.5 h-3.5" />
                  Sign In
                </button>
              </Link>
            )}
          </div>

          {/* ── Mobile menu toggle ───────────────────── */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#C9952A]/30 text-[#C9952A] hover:border-[#C9952A]/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* ── Mobile menu ──────────────────────────── */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#C9952A]/15",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="bg-[#0F0500] px-6 py-6 flex flex-col gap-1">

            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-cinzel text-[11px] tracking-[2px] uppercase transition-all",
                    active
                      ? "bg-[#C9952A]/10 text-[#F5C842] border border-[#C9952A]/25"
                      : "text-[#C9952A]/60 hover:text-[#F5C842] hover:bg-white/5"
                  )}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile divider */}
            <div className="my-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#C9952A]/15" />
              <span className="text-[#C9952A]/40 text-xs">✦</span>
              <div className="h-px flex-1 bg-[#C9952A]/15" />
            </div>

            {isAuthenticated ? (
              <>
                {/* Greeting */}
                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="w-8 h-8 rounded-full bg-[#C9952A]/15 border border-[#C9952A]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9952A] text-sm font-cinzel font-bold">
                      {user?.name?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-cinzel text-white/80 tracking-wide">{user?.name}</p>
                    <p className="text-[9px] text-[#C9952A]/40 tracking-widest">Devotee</p>
                  </div>
                </div>

                {/* Verify */}
                {user && !user.isVerified && (
                  <button
                    onClick={() => { handleVerifyClick(); setIsOpen(false); }}
                    className="mx-4 mt-1 flex items-center justify-center gap-2 text-[10px] font-cinzel tracking-[2px] uppercase bg-yellow-600/15 border border-yellow-600/40 text-yellow-400 py-2.5 rounded-xl transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    Verify Account
                  </button>
                )}

                <Link
                  to="/my-bookings"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-cinzel text-[11px] tracking-[2px] uppercase text-[#C9952A]/60 hover:text-[#F5C842] hover:bg-white/5 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  My Bookings
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-cinzel text-[11px] tracking-[2px] uppercase text-red-400/70 hover:text-red-300 hover:bg-white/5 transition-all"
                  >
                    Admin Dashboard
                  </Link>
                )}

                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="mx-0 mt-1 flex items-center justify-center gap-2 text-[10px] font-cinzel tracking-[2px] uppercase border border-white/10 text-white/40 py-2.5 rounded-xl hover:border-white/20 hover:text-white/60 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 font-cinzel text-[11px] tracking-[2.5px] uppercase bg-gradient-to-r from-[#C9952A] to-[#E8B84B] text-[#1A0800] font-semibold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(201,149,42,0.3)] transition-all">
                  <User className="w-3.5 h-3.5" />
                  Sign In
                </button>
              </Link>
            )}

            {/* Bottom Sanskrit */}
            <p className="text-center text-[9px] text-[#C9952A]/25 font-cinzel tracking-[3px] uppercase mt-4">
              हर हर महादेव
            </p>
          </nav>
        </div>
      </header>
    </>
  );
};

/* ════════════════════════════════════════════════════════ */

export const Footer = () => (
  <footer className="relative overflow-hidden bg-[#0A0400] border-t border-[#C9952A]/15">

    {/* Grain */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />

    {/* Mandala watermark */}
    <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none select-none" aria-hidden>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
        {[140, 110, 80, 50, 20].map((r) => (
          <circle key={r} cx="150" cy="150" r={r} stroke="#C9952A" strokeWidth="0.5" />
        ))}
        {[0, 45, 90, 135].map((angle) => (
          <line
            key={angle}
            x1="150" y1="10" x2="150" y2="290"
            stroke="#C9952A" strokeWidth="0.4"
            transform={`rotate(${angle} 150 150)`}
          />
        ))}
      </svg>
    </div>

    <div className="relative container mx-auto px-6 pt-12 pb-6">

      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#C9952A]/10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#C9952A]/40 flex items-center justify-center text-lg">
              🔱
            </div>
            <div>
              <span className="font-cinzel font-bold text-[16px] tracking-[0.2em] text-white block">
                PUROHITAM
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#C9952A]/40 uppercase">
                वैदिक सेवा · Ujjain
              </span>
            </div>
          </div>
          <p className="text-[12px] text-white/35 leading-relaxed max-w-[220px]">
            Authentic Vedic ceremonies performed by learned pandits at the sacred city of Mahakaleshwar.
          </p>
          <p className="text-[11px] italic text-[#C9952A]/40 font-cinzel">
            "श्रद्धावान् लभते ज्ञानम्"
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-cinzel text-[10px] tracking-[3px] uppercase text-[#C9952A]/50 mb-5">
            ✦ Navigate
          </p>
          <ul className="space-y-3">
            {[
              { label: "Pooja Booking", path: "/pooja-booking" },
              { label: "Muhurt / Astrology", path: "/muhurt" },
              { label: "City Guide", path: "/city-guide" },
              { label: "My Bookings", path: "/my-bookings" },
            ].map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="flex items-center gap-2 text-[12px] font-cinzel tracking-wide text-white/35 hover:text-[#C9952A] transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C9952A]/30 group-hover:bg-[#C9952A] transition-colors" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sacred info */}
        <div>
          <p className="font-cinzel text-[10px] tracking-[3px] uppercase text-[#C9952A]/50 mb-5">
            ✦ Sacred City
          </p>
          <ul className="space-y-3">
            {[
              { icon: "🕉️", text: "Mahakaleshwar Temple" },
              { icon: "🌊", text: "Kshipra River · Ram Ghat" },
              { icon: "📍", text: "Ujjain, Madhya Pradesh" },
              { icon: "📞", text: "purohitamadmin@gmail.com" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-[12px] text-white/30">
                <span className="text-sm">{item.icon}</span>
                <span className="font-cinzel tracking-wide">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[10px] font-cinzel tracking-[2px] text-white/20 uppercase">
          © {new Date().getFullYear()} Purohitam · All Rights Reserved
        </p>

        <div className="flex items-center gap-2 text-[#C9952A]/20">
          <span className="text-[10px] font-cinzel tracking-[2px]">हर हर महादेव</span>
          <span className="text-xs">🔱</span>
          <span className="text-[10px] font-cinzel tracking-[2px]">जय श्री महाकाल</span>
        </div>
      </div>
    </div>
  </footer>
);

/* ════════════════════════════════════════════════════════ */

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-[#FDF6EC]">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);