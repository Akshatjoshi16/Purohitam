import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Calendar, MapPin, Sparkles, User, ChevronRight } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import axios from "axios";

const navLinks = [
  { name: "Pooja Booking", path: "/pooja-booking", icon: Calendar, sanskrit: "पूजा"   },
  { name: "Muhurt",        path: "/muhurt",         icon: Sparkles, sanskrit: "मुहूर्त" },
  { name: "City Guide",    path: "/city-guide",     icon: MapPin,   sanskrit: "नगर"    },
];

/* ─── Yantra SVG ─────────────────────────────────────── */
const Yantra = ({ size = 32, opacity = 0.15 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity, flexShrink: 0 }}>
    <circle cx="30" cy="30" r="28" stroke="#C9952A" strokeWidth="0.6" />
    <circle cx="30" cy="30" r="20" stroke="#C9952A" strokeWidth="0.4" />
    <circle cx="30" cy="30" r="12" stroke="#C9952A" strokeWidth="0.4" />
    <polygon points="30,4 56,48 4,48"  stroke="#C9952A" strokeWidth="0.5" fill="none" />
    <polygon points="30,56 4,12 56,12" stroke="#C9952A" strokeWidth="0.5" fill="none" />
    <circle cx="30" cy="30" r="3" fill="#C9952A" opacity="0.6" />
  </svg>
);

/* ─── Shimmer line ───────────────────────────────────── */
const ShimmerLine = () => (
  <div className="relative h-px w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9952A]/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5C842]/60 to-transparent"
      style={{ animation: "shimmer 3.5s ease-in-out infinite" }} />
  </div>
);

/* ─── Gold text gradient helper ─────────────────────── */
const goldText: React.CSSProperties = {
  background: "linear-gradient(135deg, #F5C842 0%, #C9952A 45%, #E8B84B 80%, #F5C842 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ═══════════════════════════════════════════════════════ */

export const Header = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered]  = useState<string | null>(null);

  const location  = useLocation();
  const navigate  = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
  const isAdmin   = user?.email === "purohitamadmin@gmail.com";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const handleVerify = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1.0/send-otp", {}, { withCredentials: true });
      navigate("/verify-otp");
    } catch { alert("Failed to send OTP"); }
  };

  return (
    <>
      {/* ── Top ribbon ─────────────────────────────────── */}
      <div className="hidden md:block bg-gradient-to-r from-[#0D0400] via-[#180700] to-[#0D0400]">
        <div className="container mx-auto px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-4 text-[9px] tracking-[3px] font-cinzel text-[#C9952A]/45 uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#C9952A]/50 animate-pulse" />
              हर हर महादेव
            </span>
            <span className="text-[#C9952A]/15">·</span>
            <span>Mahakaleshwar Jyotirlinga · Ujjain</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] tracking-[3px] font-cinzel text-[#C9952A]/45 uppercase">
            <span>500+ Rituals Performed</span>
            <span className="text-[#C9952A]/15">·</span>
            <span className="flex items-center gap-1.5">
              जय श्री महाकाल
              <span className="w-1 h-1 rounded-full bg-[#C9952A]/50 animate-pulse" style={{ animationDelay: "0.7s" }} />
            </span>
          </div>
        </div>
      </div>

      {/* ── Main header ───────────────────────────────── */}
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-[#070100]/98 backdrop-blur-2xl shadow-[0_8px_48px_rgba(0,0,0,0.7)] border-b border-[#C9952A]/18"
          : "bg-gradient-to-b from-[#0A0200] to-[#0F0500] border-b border-[#C9952A]/12"
      )}>
        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* Top warm glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-[#C9952A]/45 to-transparent pointer-events-none" />

        <div className="container mx-auto flex h-[70px] items-center justify-between px-4 md:px-8 relative">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="relative w-11 h-11 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9952A]/15 to-transparent border border-[#C9952A]/25 group-hover:border-[#C9952A]/55 group-hover:shadow-[0_0_18px_rgba(201,149,42,0.2)] transition-all duration-500" />
              <Yantra size={26} opacity={0.45} />
              <span className="absolute text-[16px] select-none" style={{ filter: "drop-shadow(0 0 8px rgba(201,149,42,0.5))" }}>🔱</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-cinzel font-bold text-[18px] tracking-[0.2em]" style={goldText}>
                PUROHITAM
              </span>
              <span className="text-[8px] tracking-[0.33em] text-[#C9952A]/38 uppercase font-light mt-0.5 hidden sm:block">
                वैदिक सेवा · Ujjain
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-white/[0.025] border border-[#C9952A]/8 rounded-2xl px-2 py-1.5 gap-0.5">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHovered(link.path)}
                    onMouseLeave={() => setHovered(null)}
                    className={cn(
                      "relative group flex items-center gap-2 px-4 py-2 rounded-xl font-cinzel text-[10px] tracking-[2px] uppercase transition-all duration-250 overflow-hidden",
                      active
                        ? "bg-gradient-to-r from-[#C9952A]/18 to-[#C9952A]/6 text-[#F5C842] border border-[#C9952A]/22"
                        : "text-[#C9952A]/52 hover:text-[#F5C842] border border-transparent"
                    )}
                  >
                    {!active && (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#C9952A]/0 to-[#C9952A]/7 opacity-0 group-hover:opacity-100 transition-opacity duration-250 rounded-xl" />
                    )}
                    <link.icon className={cn(
                      "w-3 h-3 relative z-10 transition-colors duration-250",
                      active ? "text-[#F5C842]" : "text-[#C9952A]/45 group-hover:text-[#C9952A]/80"
                    )} />
                    <span className="relative z-10">{link.name}</span>
                    {/* Sanskrit peek on hover */}
                    <span className={cn(
                      "relative z-10 text-[7px] text-[#C9952A]/28 font-light transition-all duration-300 overflow-hidden",
                      hovered === link.path ? "max-w-[28px] opacity-100" : "max-w-0 opacity-0"
                    )}>
                      {link.sanskrit}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Desktop auth */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                {!user?.isVerified && (
                  <button onClick={handleVerify}
                    className="flex items-center gap-1.5 text-[9px] font-cinzel tracking-[2px] uppercase px-3 py-1.5 rounded-full border border-amber-500/35 text-amber-400 bg-amber-400/5 hover:bg-amber-400/12 transition-all duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Verify Account
                  </button>
                )}

                <Link to="/my-bookings"
                  className="group flex items-center gap-1.5 text-[10px] font-cinzel tracking-[2px] uppercase text-[#C9952A]/55 hover:text-[#F5C842] transition-colors duration-200">
                  <Calendar className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  My Bookings
                </Link>

                {isAdmin && (
                  <Link to="/admin"
                    className="text-[9px] font-cinzel tracking-[2px] uppercase text-orange-400/65 hover:text-orange-300 border border-orange-500/18 hover:border-orange-400/38 px-3 py-1.5 rounded-full transition-all duration-200 bg-orange-500/4 hover:bg-orange-500/9">
                    Admin Panel
                  </Link>
                )}

                <div className="w-px h-5 bg-[#C9952A]/12" />

                {/* Avatar */}
                <div className="flex items-center gap-2.5 group">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9952A]/28 to-[#8B6914]/15 border border-[#C9952A]/35 flex items-center justify-center group-hover:border-[#C9952A]/65 group-hover:shadow-[0_0_14px_rgba(201,149,42,0.25)] transition-all duration-300">
                      <span className="text-[#F5C842] text-xs font-cinzel font-bold">{user?.name?.[0]?.toUpperCase()}</span>
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-[1.5px] border-[#0F0500]" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] font-cinzel text-[#C9952A]/75 tracking-wide max-w-[80px] truncate">{user?.name}</span>
                    <span className="text-[7.5px] text-[#C9952A]/28 tracking-widest uppercase">Devotee</span>
                  </div>
                </div>

                <button onClick={logout}
                  className="text-[9px] font-cinzel tracking-[2px] uppercase text-white/22 hover:text-red-400/80 border border-white/7 hover:border-red-400/25 px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-red-400/4">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth">
                <button className="group relative flex items-center gap-2 font-cinzel text-[10px] tracking-[2.5px] uppercase px-5 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,149,42,0.38)] hover:scale-[1.025]">
                  <span className="absolute inset-0" style={{ background: "linear-gradient(135deg, #C9952A, #E8B84B, #C9952A, #F5C842)", backgroundSize: "200%" }} />
                  <User className="w-3.5 h-3.5 relative z-10 text-[#1A0800]" />
                  <span className="relative z-10 text-[#1A0800] font-bold">Sign In</span>
                  <ChevronRight className="w-3 h-3 relative z-10 text-[#1A0800] group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[#C9952A]/22 text-[#C9952A] hover:border-[#C9952A]/48 hover:bg-[#C9952A]/5 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <ShimmerLine />

        {/* Mobile menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-350 ease-in-out",
          isOpen ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-gradient-to-b from-[#0B0200] to-[#110500] px-5 py-5 space-y-1">

            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 rounded-xl font-cinzel text-[11px] tracking-[2px] uppercase transition-all duration-200",
                    active
                      ? "bg-gradient-to-r from-[#C9952A]/14 to-[#C9952A]/4 text-[#F5C842] border border-[#C9952A]/18"
                      : "text-[#C9952A]/50 hover:text-[#F5C842] hover:bg-white/[0.035] border border-transparent"
                  )}>
                  <div className="flex items-center gap-3">
                    <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center", active ? "bg-[#C9952A]/12" : "bg-white/[0.04]")}>
                      <link.icon className="w-3.5 h-3.5" />
                    </div>
                    {link.name}
                  </div>
                  <span className="text-[#C9952A]/22 text-[10px]">{link.sanskrit}</span>
                </Link>
              );
            })}

            <div className="py-3 px-2 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9952A]/18 to-transparent" />
              <Yantra size={14} opacity={0.25} />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9952A]/18 to-transparent" />
            </div>

            {isAuthenticated ? (
              <>
                {/* User card */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#C9952A]/4 border border-[#C9952A]/10 rounded-xl mb-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9952A]/28 to-transparent border border-[#C9952A]/35 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#F5C842] text-sm font-cinzel font-bold">{user?.name?.[0]?.toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-cinzel text-white/75 tracking-wide">{user?.name}</p>
                    <p className="text-[8px] text-[#C9952A]/35 tracking-widest uppercase">Devotee · Online</p>
                  </div>
                  <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                </div>

                {!user?.isVerified && (
                  <button onClick={() => { handleVerify(); setIsOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-cinzel text-[10px] tracking-[2px] uppercase bg-amber-400/8 border border-amber-400/25 text-amber-400 hover:bg-amber-400/14 transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Verify Account
                  </button>
                )}

                <Link to="/my-bookings" onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-cinzel text-[11px] tracking-[2px] uppercase text-[#C9952A]/50 hover:text-[#F5C842] hover:bg-white/[0.035] border border-transparent transition-all">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  My Bookings
                </Link>

                {isAdmin && (
                  <Link to="/admin" onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-cinzel text-[11px] tracking-[2px] uppercase text-orange-400/65 hover:text-orange-300 hover:bg-orange-500/5 border border-transparent transition-all">
                    <div className="w-7 h-7 rounded-lg bg-orange-500/8 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    </div>
                    Admin Panel
                  </Link>
                )}

                <button onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-cinzel text-[10px] tracking-[2px] uppercase border border-white/7 text-white/28 hover:border-red-400/25 hover:text-red-400/80 hover:bg-red-400/4 transition-all mt-1">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-cinzel text-[11px] tracking-[2.5px] uppercase font-bold text-[#1A0800] hover:shadow-[0_0_20px_rgba(201,149,42,0.3)] transition-all"
                  style={{ background: "linear-gradient(135deg, #C9952A, #E8B84B, #C9952A)" }}>
                  <User className="w-3.5 h-3.5" />
                  Sign In to Book
                </button>
              </Link>
            )}

            <p className="text-center text-[8px] text-[#C9952A]/18 font-cinzel tracking-[4px] uppercase pt-2">
              हर हर महादेव 🔱
            </p>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); opacity: 0.4; }
          50%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0.4; }
        }
      `}</style>
    </>
  );
};

/* ════════════════════════════════════════════════════════ */

export const Footer = () => (
  <footer className="relative overflow-hidden bg-[#050100]">
    {/* Grain */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

    {/* Radial glow */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,149,42,0.04) 0%, transparent 65%)" }} />

    {/* Large background yantra */}
    <div className="absolute right-6 bottom-6 pointer-events-none select-none opacity-[0.035]">
      <Yantra size={260} opacity={1} />
    </div>

    <ShimmerLine />

    <div className="relative container mx-auto px-6 pt-14 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C9952A]/7">

        {/* Brand */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-full border border-[#C9952A]/28 flex items-center justify-center group-hover:border-[#C9952A]/55 group-hover:shadow-[0_0_16px_rgba(201,149,42,0.18)] transition-all duration-300">
              <span className="text-lg">🔱</span>
            </div>
            <div>
              <span className="font-cinzel font-bold text-[16px] tracking-[0.2em] block" style={goldText}>PUROHITAM</span>
              <span className="text-[8px] tracking-[0.32em] text-[#C9952A]/30 uppercase">वैदिक सेवा · Ujjain</span>
            </div>
          </Link>

          <p className="text-[12px] text-white/28 leading-relaxed max-w-[230px]">
            Authentic Vedic ceremonies performed by learned pandits at the sacred city of Mahakaleshwar — one of India's twelve Jyotirlingas.
          </p>

          <div className="border-l-2 border-[#C9952A]/20 pl-4">
            <p className="text-[11px] italic text-[#C9952A]/45 font-cinzel mb-0.5">"श्रद्धावान् लभते ज्ञानम्"</p>
            <p className="text-[9px] text-[#C9952A]/22 tracking-wide">The faithful one obtains wisdom — Gita 4.39</p>
          </div>

          <div className="flex gap-6">
            {[
              { num: "500+", label: "Rituals" },
              { num: "4.9★", label: "Rating"  },
              { num: "15+",  label: "Years"   },
            ].map(s => (
              <div key={s.label}>
                <p className="font-cinzel font-bold text-[14px] text-[#C9952A]">{s.num}</p>
                <p className="text-[9px] text-white/22 tracking-[2px] uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div className="md:col-span-3">
          <p className="font-cinzel text-[9px] tracking-[3px] uppercase text-[#C9952A]/38 mb-6 flex items-center gap-2">
            <span className="w-3 h-px bg-[#C9952A]/28 block" />Navigate
          </p>
          <ul className="space-y-3.5">
            {[
              { label: "Pooja Booking",     path: "/pooja-booking" },
              { label: "Muhurt / Astrology", path: "/muhurt"        },
              { label: "City Guide",         path: "/city-guide"    },
              { label: "My Bookings",        path: "/my-bookings"   },
            ].map(l => (
              <li key={l.path}>
                <Link to={l.path}
                  className="group flex items-center gap-2.5 text-[12px] font-cinzel tracking-wide text-white/28 hover:text-[#C9952A] transition-all duration-200">
                  <span className="w-1 h-1 rounded-full bg-[#C9952A]/22 group-hover:bg-[#C9952A] group-hover:shadow-[0_0_5px_rgba(201,149,42,0.5)] transition-all duration-200" />
                  {l.label}
                  <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sacred city */}
        <div className="md:col-span-3">
          <p className="font-cinzel text-[9px] tracking-[3px] uppercase text-[#C9952A]/38 mb-6 flex items-center gap-2">
            <span className="w-3 h-px bg-[#C9952A]/28 block" />Sacred City
          </p>
          <ul className="space-y-3.5">
            {[
              { icon: "🕉️", text: "Mahakaleshwar Temple" },
              { icon: "🌊", text: "Kshipra River · Ram Ghat" },
              { icon: "📍", text: "Ujjain, Madhya Pradesh" },
              { icon: "✉️", text: "purohitamadmin@gmail.com" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[12px] text-white/22 group">
                <span className="text-sm opacity-55 flex-shrink-0">{item.icon}</span>
                <span className="font-cinzel tracking-wide group-hover:text-white/38 transition-colors duration-200">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Book now card */}
        <div className="md:col-span-2">
          <p className="font-cinzel text-[9px] tracking-[3px] uppercase text-[#C9952A]/38 mb-6 flex items-center gap-2">
            <span className="w-3 h-px bg-[#C9952A]/28 block" />Book
          </p>
          <Link to="/pooja-booking">
            <div className="group relative overflow-hidden rounded-2xl border border-[#C9952A]/16 hover:border-[#C9952A]/38 transition-all duration-300 cursor-pointer hover:shadow-[0_0_22px_rgba(201,149,42,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9952A]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-4 relative">
                <div className="w-8 h-8 rounded-lg bg-[#C9952A]/8 border border-[#C9952A]/16 flex items-center justify-center mb-3">
                  <Calendar className="w-4 h-4 text-[#C9952A]" />
                </div>
                <p className="font-cinzel text-[11px] tracking-[1px] text-white/42 mb-1">Book a Pooja</p>
                <p className="text-[10px] text-white/22 leading-relaxed">Connect with Vedic pandits at Mahakal</p>
                <div className="flex items-center gap-1 mt-3 text-[#C9952A]/42 group-hover:text-[#C9952A] transition-colors duration-200">
                  <span className="text-[9px] font-cinzel tracking-[2px] uppercase">Explore</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[9px] font-cinzel tracking-[2.5px] text-white/14 uppercase">
          © {new Date().getFullYear()} Purohitam · All Rights Reserved · Ujjain
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-cinzel tracking-[2.5px] text-[#C9952A]/18 uppercase">हर हर महादेव</span>
          <Yantra size={16} opacity={0.18} />
          <span className="text-[9px] font-cinzel tracking-[2.5px] text-[#C9952A]/18 uppercase">जय श्री महाकाल</span>
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