// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Sparkles, Calendar, Sun, Moon, Clock, ChevronRight, Info, Users } from "lucide-react";

// const Muhurt = () => {
//   return (
//     <div className="flex flex-col animate-in fade-in duration-700">
//       {/* Page Header */}
//       <section className="bg-accent text-white py-24 relative overflow-hidden">
//         <div className="absolute inset-0 spiritual-pattern opacity-10" />
//         <div className="container relative z-10 text-center px-4">
//           <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium tracking-widest uppercase">
//             Vedic Astrology & Time
//           </div>
//           <h1 className="text-4xl md:text-7xl font-cinzel font-bold mb-6">Muhurt & Astrology</h1>
//           <p className="text-lg text-white/70 max-w-2xl mx-auto italic font-playfair">
//             "Timing is everything. Align your actions with the cosmic vibrations of the universe."
//           </p>
//         </div>
//       </section>

//       {/* Daily Panchang Section */}
//       <section className="py-20 container px-4">
//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-7 space-y-8">
//               <div className="space-y-4">
//                 <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">Daily Panchang</h2>
//                 <div className="w-20 h-1 bg-primary rounded-full" />
//                 <p className="text-lg text-foreground/60">
//                   Stay updated with the daily Vedic calendar. Ujjain, being the city of the Tropic of Cancer, has deep astronomical significance.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {[
//                   { label: "Tithi", value: "Ekadashi", icon: Moon },
//                   { label: "Nakshatra", value: "Rohini", icon: Sparkles },
//                   { label: "Yog", value: "Siddhi", icon: Sun },
//                   { label: "Karan", value: "Bav", icon: Clock },
//                 ].map((item, idx) => (
//                   <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/50 transition-colors">
//                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                       <item.icon className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-widest text-accent/50">{item.label}</p>
//                       <p className="text-sm font-bold text-accent">{item.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 relative overflow-hidden">
//                 <div className="relative z-10">
//                   <h3 className="text-xl font-cinzel font-bold text-accent mb-4 flex items-center gap-2">
//                     <Info className="w-5 h-5 text-primary" /> Today's Auspicious Times
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between items-center py-3 border-b border-primary/10">
//                       <span className="text-sm font-medium text-foreground/70 font-cinzel tracking-widest uppercase">Abhijit Muhurt</span>
//                       <span className="text-sm font-bold text-primary">11:45 AM - 12:35 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center py-3 border-b border-primary/10">
//                       <span className="text-sm font-medium text-foreground/70 font-cinzel tracking-widest uppercase">Amrit Kaal</span>
//                       <span className="text-sm font-bold text-primary">04:20 PM - 05:50 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center py-3">
//                       <span className="text-sm font-medium text-foreground/70 font-cinzel tracking-widest uppercase text-red-500">Rahu Kaal (Avoid)</span>
//                       <span className="text-sm font-bold text-red-500">01:30 PM - 03:00 PM</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-5 relative">
//               <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-border">
//                 <div className="flex flex-col items-center text-center space-y-6">
//                   <div className="h-20 w-20 bg-accent rounded-full flex items-center justify-center glow-gold mb-4">
//                     <Sparkles className="w-10 h-10 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-cinzel font-bold text-accent uppercase tracking-widest">Personal Horoscope</h3>
//                   <p className="text-sm text-foreground/60 italic">
//                     Get detailed insights into your life, career, and relationships based on your birth chart.
//                   </p>
//                   <div className="w-full space-y-4 pt-6 border-t border-border">
//                     <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-sm font-cinzel tracking-widest glow-saffron rounded-xl">
//                       CONSULT ASTROLOGER
//                     </Button>
//                     <p className="text-[10px] text-foreground/40 font-cinzel tracking-widest uppercase">
//                       STARTING FROM ₹501 PER SESSION
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
//               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 bg-muted/30">
//         <div className="container px-4">
//           <div className="text-center mb-16 space-y-4">
//             <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">Our Astrology Services</h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-foreground/60 max-w-2xl mx-auto">
//               We offer a variety of specialized astrology services tailored to your specific needs and questions.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: "Kundali Matching", desc: "Ensure marital harmony with traditional Guna Milan and deep chart analysis.", icon: Users },
//               { title: "Career Guidance", desc: "Find the right path and timing for your business or job transitions.", icon: ChevronRight },
//               { title: "Property Muhurt", desc: "Auspicious timing for buying or entering a new home (Griha Pravesh).", icon: Calendar },
//             ].map((service, idx) => (
//               <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-md hover:shadow-xl transition-all group">
//                 <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
//                   <service.icon className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-cinzel font-bold text-accent mb-4 group-hover:text-primary transition-colors uppercase tracking-widest">{service.title}</h3>
//                 <p className="text-sm text-foreground/70 mb-8 leading-relaxed italic">{service.desc}</p>
//                 <Button variant="ghost" className="p-0 h-auto font-cinzel tracking-widest text-xs hover:text-primary gap-2">
//                   LEARN MORE <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Muhurt;
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Calendar,
  Sun,
  Moon,
  Clock,
  ChevronRight,
  Users,
  Star,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

/* ─── types ─────────────────────────────────────── */
interface PanchangItem {
  label: string;
  value: string;
  sub: string;
  icon: React.ElementType;
}

/* ─── static data ───────────────────────────────── */

const panchangItems: PanchangItem[] = [
  { label: "Tithi", value: "Ekadashi", sub: "Shukla Paksha", icon: Moon },
  { label: "Nakshatra", value: "Rohini", sub: "Favourable", icon: Sparkles },
  { label: "Yog", value: "Siddhi", sub: "Auspicious", icon: Sun },
  { label: "Karan", value: "Bav", sub: "Balanced", icon: Clock },
  { label: "Var", value: "Somvar", sub: "Day of Shiva", icon: Star },
];

const auspiciousTimes = [
  {
    label: "Abhijit Muhurt",
    time: "11:45 AM – 12:35 PM",
    desc: "Most powerful muhurt of the day — ideal for starting important work",
    type: "good",
  },
  {
    label: "Amrit Kaal",
    time: "04:20 PM – 05:50 PM",
    desc: "Nectar period — auspicious for worship, puja, and new beginnings",
    type: "good",
  },
  {
    label: "Brahma Muhurt",
    time: "04:24 AM – 05:12 AM",
    desc: "Divine hour before sunrise — best for meditation and spiritual practice",
    type: "good",
  },
  {
    label: "Rahu Kaal",
    time: "01:30 PM – 03:00 PM",
    desc: "Avoid important activities during this inauspicious period",
    type: "bad",
  },
  {
    label: "Gulika Kaal",
    time: "07:30 AM – 09:00 AM",
    desc: "Avoid starting new ventures or travel during this time",
    type: "bad",
  },
];

const services = [
  {
    title: "Kundali Matching",
    hindi: "कुंडली मिलान",
    desc: "Traditional Guna Milan with 36-point compatibility analysis. Ensure marital harmony, health, prosperity, and lifelong happiness.",
    detail: "Ashtakoot + Dashakoot analysis included",
    icon: Users,
    price: "₹1,101",
    duration: "60 min",
  },
  {
    title: "Janam Kundali",
    hindi: "जन्म कुंडली",
    desc: "Complete birth chart analysis covering all 12 houses, planetary positions, dashas, and their impact on your life journey.",
    detail: "Includes written PDF report",
    icon: Star,
    price: "₹751",
    duration: "45 min",
  },
  {
    title: "Career & Business Muhurt",
    hindi: "व्यापार मुहूर्त",
    desc: "Find the most powerful auspicious timing for business launches, job changes, partnerships, and major career decisions.",
    detail: "3 alternate dates provided",
    icon: Calendar,
    price: "₹501",
    duration: "30 min",
  },
  {
    title: "Griha Pravesh Muhurt",
    hindi: "गृह प्रवेश",
    desc: "Auspicious timing for entering your new home, aligned with planetary positions, nakshatra, and your family's kundali.",
    detail: "Puja vidhi guide included",
    icon: Sun,
    price: "₹501",
    duration: "30 min",
  },
  {
    title: "Vivah Muhurt",
    hindi: "विवाह मुहूर्त",
    desc: "Marriage date and time selection based on both birth charts, avoiding doshas, and maximising marital prosperity.",
    detail: "Multiple auspicious dates",
    icon: Moon,
    price: "₹1,101",
    duration: "60 min",
  },
  {
    title: "Namkaran Muhurt",
    hindi: "नामकरण",
    desc: "Baby naming ceremony timing and first-letter selection based on the child's birth nakshatra and planetary positions.",
    detail: "Name suggestions included",
    icon: Sparkles,
    price: "₹501",
    duration: "30 min",
  },
];

const faqItems = [
  {
    q: "What is a Muhurt?",
    a: "A Muhurt is an auspicious moment in time, calculated using Vedic astrology principles — planetary positions, tithi, nakshatra, and yog — to maximise the success and harmony of any important undertaking.",
  },
  {
    q: "How accurate is Vedic astrology?",
    a: "Vedic (Jyotish) astrology has a 5,000-year unbroken tradition. Its accuracy depends heavily on the precision of the birth time. Our pandits are trained in classical Parashari and Jaimini systems.",
  },
  {
    q: "Do I need my birth time for a consultation?",
    a: "For Janam Kundali and Kundali Matching, exact birth time is essential. For Muhurt calculations and Panchang queries, birth time is helpful but not always required.",
  },
  {
    q: "Is the consultation online or in-person?",
    a: "Both options are available. In-person consultations happen at our Ujjain centre. Online consultations are conducted via phone or video call with a written report shared via email.",
  },
];

/* ─── hooks & helpers ───────────────────────────── */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const OrnamentalDivider = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center justify-center gap-4 my-3">
    <div className={`h-px w-14 ${light ? "bg-orange-300/30" : "bg-orange-300/40"}`} />
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
        fill="#f97316"
        opacity="0.55"
      />
    </svg>
    <div className={`h-px w-14 ${light ? "bg-orange-300/30" : "bg-orange-300/40"}`} />
  </div>
);

const SectionTitle = ({
  children,
  subtitle,
  light = false,
}: {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="text-center mb-16">
    <p className={`text-[10px] tracking-[0.35em] uppercase mb-3 ${light ? "text-orange-300/60" : "text-orange-500/70"}`}>
      ॐ
    </p>
    <h2 className={`text-3xl md:text-5xl font-cinzel font-bold leading-tight mb-3 ${light ? "text-white" : "text-stone-800"}`}>
      {children}
    </h2>
    {subtitle && (
      <p className={`text-sm max-w-xl mx-auto leading-relaxed mt-3 ${light ? "text-orange-100/50" : "text-stone-500"}`}>
        {subtitle}
      </p>
    )}
    <OrnamentalDivider light={light} />
  </div>
);

/* ═══════════════════════════════════════════════════ */

const Muhurt = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col antialiased">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-orange-400/30 rounded-full px-5 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300/80 text-[10px] tracking-[0.3em] uppercase">
              Vedic Astrology & Sacred Time
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white leading-[1.1] mb-5">
            Muhurt &
            <span className="block text-orange-400 mt-2">Astrology</span>
          </h1>

          <p className="text-orange-100/70 text-lg italic mb-3 max-w-2xl mx-auto">
            "काल: कलयतामहम् — I am Time, among all that measures."
          </p>
          <p className="text-orange-300/45 text-xs tracking-widest mb-10">
            Bhagavad Gita 10.30 · Lord Krishna on the nature of Time
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 h-14 text-sm font-cinzel tracking-widest border border-orange-500 rounded-none transition-all"
            >
              CONSULT AN ASTROLOGER
            </button>
            <button
              onClick={() => document.getElementById("panchang")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-orange-300/40 text-orange-100 hover:bg-white/5 px-10 h-14 text-sm font-cinzel tracking-widest rounded-none transition-all"
            >
              TODAY'S PANCHANG
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-orange-300/25 animate-pulse" />
          <span className="text-orange-300/35 text-[9px] tracking-[0.35em]">SCROLL</span>
        </div>
      </section>

      {/* ── WHAT IS MUHURT — editorial intro ─────────── */}
      <section className="py-20 bg-orange-700">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <p className="text-orange-100/80 text-base md:text-lg leading-[1.9] italic">
            In Vedic tradition, time is not neutral — it carries energy. A Muhurt is a precisely calculated auspicious window when the universe is aligned to support your intent. Ujjain, as the ancient prime meridian of Vedic astronomy, has always been the seat of time-keeping and cosmic calculation in India.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-orange-300/40" />
            <p className="text-orange-300/60 text-xs tracking-widest uppercase">Jyotish Shastra</p>
            <div className="h-px w-12 bg-orange-300/40" />
          </div>
        </div>
      </section>

      {/* ── PANCHANG ─────────────────────────────────── */}
      <section id="panchang" className="py-28 bg-stone-50">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle subtitle={`Live Vedic calendar for Ujjain — ${today}`}>
              Daily Panchang
            </SectionTitle>
          </FadeIn>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left — panchang cards */}
            <FadeIn>
              <div className="space-y-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {panchangItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-stone-200 hover:border-orange-200 hover:shadow-md transition-all p-5 flex flex-col items-center text-center group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-100 transition-colors">
                        <item.icon className="w-4 h-4 text-orange-500" />
                      </div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-sm font-cinzel font-bold text-stone-800">{item.value}</p>
                      <p className="text-[10px] text-orange-500/80 mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Quote box */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6 border-l-4 border-l-orange-400">
                  <p className="text-stone-500 text-sm leading-relaxed italic mb-3">
                    "Panchang — the five limbs of time — is the backbone of all Vedic auspicious activity. Tithi, Vara, Nakshatra, Yoga, and Karana together define the quality of every moment."
                  </p>
                  <p className="text-orange-500 text-[10px] tracking-widest uppercase">Vedic Jyotish Principle</p>
                </div>
              </div>
            </FadeIn>

            {/* Right — auspicious times */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="bg-stone-800 px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-cinzel font-bold text-sm tracking-wide">Today's Auspicious Times</p>
                    <p className="text-stone-400 text-[10px] tracking-widest mt-0.5">Ujjain Standard Time</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>

                <div className="p-2">
                  {auspiciousTimes.map((t, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-4 px-4 py-4 rounded-xl mb-1 transition-colors ${
                        t.type === "bad"
                          ? "bg-red-50 hover:bg-red-100/70"
                          : "bg-stone-50 hover:bg-orange-50"
                      }`}
                    >
                      <div className={`mt-0.5 shrink-0 ${t.type === "bad" ? "text-red-400" : "text-green-500"}`}>
                        {t.type === "bad" ? (
                          <AlertTriangle className="w-4 h-4" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className={`text-[11px] font-cinzel font-bold tracking-wide uppercase ${t.type === "bad" ? "text-red-600" : "text-stone-700"}`}>
                            {t.label}
                          </span>
                          <span className={`text-xs font-bold ${t.type === "bad" ? "text-red-500" : "text-orange-500"}`}>
                            {t.time}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 pb-5 pt-2">
                  <p className="text-[10px] text-stone-400 italic">
                    * Times are calculated for Ujjain (23.1765°N, 75.7885°E). They shift daily based on sunrise.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONSULT CTA card ─────────────────────────── */}
      <section id="consult" className="py-20 bg-white">
        <div className="container px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto rounded-3xl border border-orange-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left — dark */}
                <div className="bg-stone-900 px-10 py-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none select-none" aria-hidden>
                    <span className="text-[9rem] font-cinzel font-bold text-white/[0.03] leading-none absolute top-0 right-2">ॐ</span>
                  </div>
                  <p className="text-orange-400 text-[10px] tracking-[0.3em] uppercase mb-4">Expert Guidance</p>
                  <h3 className="text-2xl font-cinzel font-bold text-white mb-4 leading-tight">
                    Personal Horoscope<br />& Consultation
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    Our pandits are trained in classical Parashari Jyotish. A 45-minute session provides deep clarity on life, career, relationships, and health.
                  </p>
                  <div className="border-l-2 border-orange-500/40 pl-4">
                    <p className="text-orange-300/75 italic text-sm">
                      "ज्योतिषं वेदानां चक्षुः" — Astrology is the eye of the Vedas.
                    </p>
                    <p className="text-stone-500 text-[10px] mt-1">Vedanga Jyotisha</p>
                  </div>
                </div>

                {/* Right — form-like */}
                <div className="bg-orange-50 px-10 py-12">
                  <p className="text-stone-500 text-sm mb-6">Available consultation types:</p>
                  <div className="space-y-3 mb-8">
                    {["Janam Kundali Reading", "Kundali Matching (Vivah)", "Muhurt Selection", "Dasha & Transit Analysis"].map((s, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-stone-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-xl border border-orange-100 px-5 py-4 mb-6">
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Starting from</p>
                    <p className="text-2xl font-cinzel font-bold text-stone-800">₹501</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">Per session · 30 – 60 minutes</p>
                  </div>

                  <button className="w-full h-12 bg-orange-600 hover:bg-orange-500 text-white font-cinzel tracking-widest text-sm rounded-xl transition-all flex items-center justify-center gap-2 group">
                    BOOK A CONSULTATION
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────── */}
      <section className="py-28 bg-stone-50">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle subtitle="Specialized astrology services designed for life's most important milestones.">
              Our Astrology Services
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((svc, idx) => (
              <FadeIn key={idx} delay={idx * 60}>
                <div className="group bg-white rounded-2xl border border-stone-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                      <svc.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-cinzel font-bold text-stone-800">{svc.price}</p>
                      <p className="text-[10px] text-stone-400">{svc.duration}</p>
                    </div>
                  </div>

                  <h3 className="text-base font-cinzel font-bold text-stone-800 mb-0.5">{svc.title}</h3>
                  <p className="text-orange-500/70 text-xs mb-3">{svc.hindi}</p>

                  <p className="text-sm text-stone-500 leading-relaxed mb-4 flex-1">{svc.desc}</p>

                  <div className="flex items-center gap-2 text-[10px] text-green-600 bg-green-50 border border-green-100 rounded-lg px-3 py-2 mb-5">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    {svc.detail}
                  </div>

                  <button className="flex items-center gap-1.5 text-[11px] font-cinzel tracking-widest text-orange-500 hover:text-orange-700 uppercase transition-colors group/link mt-auto">
                    Book This Service
                    <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle subtitle="Answers to common questions about Vedic astrology and muhurt consultations.">
              Frequently Asked
            </SectionTitle>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqItems.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 60}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-colors cursor-pointer ${openFaq === idx ? "border-orange-200" : "border-stone-200 hover:border-stone-300"}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between px-6 py-4 bg-white">
                    <p className="font-cinzel font-bold text-stone-800 text-sm">{faq.q}</p>
                    <ChevronRight
                      className={`w-4 h-4 text-orange-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-90" : ""}`}
                    />
                  </div>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 bg-orange-50/50 border-t border-orange-100">
                      <p className="text-stone-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK BANNER — CTA ────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 12px)",
          }}
        />
        <div className="container px-4 relative z-10 text-center">
          <p className="text-orange-200/60 text-[10px] tracking-[0.35em] uppercase mb-3">हर हर महादेव</p>
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-4">
            Let the Stars Guide Your Path
          </h2>
          <p className="text-orange-100/60 text-sm max-w-xl mx-auto mb-10 leading-relaxed italic">
            "In Ujjain — where time itself was born — let an expert pandit illuminate your destiny through the sacred science of Jyotish."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-orange-700 hover:bg-orange-50 px-10 h-12 text-sm font-cinzel tracking-widest rounded-none border border-white/30 transition-all">
              BOOK CONSULTATION
            </button>
            <Link to="/pooja-booking">
              <button className="border border-white/30 text-orange-100 hover:bg-white/10 px-10 h-12 text-sm font-cinzel tracking-widest rounded-none transition-all">
                BOOK A POOJA
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Muhurt;
