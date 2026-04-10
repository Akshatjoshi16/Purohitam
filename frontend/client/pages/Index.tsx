
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   MapPin,
//   Sparkles,
//   ChevronRight,
//   Star,
//   ShieldCheck,
//   Clock,
//   Users,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// const featuredPriests = [
//   {
//     id: 1,
//     name: "Pandit Akshat Joshi",
//     description:
//       "Experienced priest specializing in Mahamrityunjay Jaap and Vedic rituals.",
//     expertise: "Vedic Rituals, Mahamrityunjay Jaap",
//     experience: "10+ Years",
//     image: "/akshatjoshi.jpeg",
//   },
//   {
//     id: 2,
//     name: "Pandit Ayush Shukla",
//     description:
//       "Expert in Astrology and Muhurt calculations with deep knowledge of Shastras.",
//     expertise: "Astrology, Muhurt",
//     experience: "10+ Years",
//     image: "/ayushshukla.jpeg",
//   },
//   {
//     id: 3,
//     name: "Pandit Animesh Pal",
//     description:
//       "Renowned for performing Kalsarp Dosh Nivaran and Grah Shanti poojas.",
//     expertise: "Kalsarp Dosh, Grah Shanti",
//     experience: "2+ Years",
//     image: "/animeshpal.jpeg",
//   },
// ];

// const SectionTitle = ({ children }: { children: React.ReactNode }) => (
//   <div className="text-center mb-14">
//     <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent mb-3">
//       {children}
//     </h2>
//     <div className="w-16 h-[2px] bg-orange-400 mx-auto rounded-full" />
//   </div>
// );

// const Index = () => {
//   return (
//     <div className="flex flex-col">

//       {/* HERO */}
//       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/mahakallok.jpeg')" }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 text-center max-w-4xl px-6">
//           {/* Small label */}
//           <p className="text-orange-300/90 tracking-[0.25em] text-sm mb-4 font-medium">
//             PUROHITAM • UJJAIN
//           </p>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white leading-tight mb-6">
//             Connect with the Divine in
//             <span className="block text-orange-400 mt-2">
//               Holy Ujjain
//             </span>
//           </h1>

//           {/* Hindi line */}
//           <p className="text-lg md:text-2xl text-orange-200/95 mb-3">
//             महाकाल की नगरी में वैदिक पूजन सेवाओं का विश्वसनीय मंच
//           </p>

//           {/* Sanskrit */}
//           <p className="text-sm text-orange-300/70 italic mb-10">
//             महाकालक्षेत्रे श्रद्धालूनां पुरोहितसेवासेतुः
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link to="/pooja-booking">
//               <Button
//                 size="lg"
//                 className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-14 text-lg font-cinzel tracking-wide shadow-lg"
//               >
//                 BOOK POOJA
//               </Button>
//             </Link>

//             <Link to="/city-guide">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-orange-300/50 text-orange-100 bg-black/20 hover:bg-black/30 px-8 h-14 text-lg font-cinzel"
//               >
//                 EXPLORE UJJAIN
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Scroll */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-200/60 text-xs tracking-widest">
//           SCROLL
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-24 container px-4">
//         <SectionTitle>Our Spiritual Services</SectionTitle>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Pooja Booking",
//               desc: "Authentic Vedic rituals performed by learned priests.",
//               icon: Calendar,
//               path: "/pooja-booking",
//               color: "bg-orange-50",
//               accentColor: "text-orange-600",
//             },
//             {
//               title: "Muhurt / Astrology",
//               desc: "Consult expert astrologers for auspicious timings.",
//               icon: Sparkles,
//               path: "/muhurt",
//               color: "bg-yellow-50",
//               accentColor: "text-yellow-600",
//             },
//             {
//               title: "City Guide",
//               desc: "Explore sacred landmarks of Ujjain.",
//               icon: MapPin,
//               path: "/city-guide",
//               color: "bg-red-50",
//               accentColor: "text-red-600",
//             },
//           ].map((option, idx) => (
//             <Link
//               key={idx}
//               to={option.path}
//               className="group p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center"
//             >
//               <div
//                 className={cn(
//                   "p-4 rounded-full mb-6 transition-colors group-hover:bg-orange-500 group-hover:text-white",
//                   option.color,
//                   option.accentColor
//                 )}
//               >
//                 <option.icon className="w-10 h-10" />
//               </div>

//               <h3 className="text-2xl font-cinzel font-bold mb-3">
//                 {option.title}
//               </h3>

//               <p className="text-foreground/70 mb-6">{option.desc}</p>

//               <span className="text-orange-500 font-cinzel tracking-wide flex items-center gap-1">
//                 LEARN MORE <ChevronRight className="w-4 h-4" />
//               </span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* PRIESTS */}
//       <section className="py-24 bg-muted/30">
//         <div className="container px-4">
//           <SectionTitle>Learned Priests</SectionTitle>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredPriests.map((priest) => (
//               <div
//                 key={priest.id}
//                 className="group overflow-hidden rounded-2xl bg-white border shadow-sm hover:shadow-xl transition"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={priest.image}
//                     alt={priest.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition"
//                   />

//                   <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold font-cinzel">
//                     {priest.experience}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-cinzel font-bold mb-1">
//                     {priest.name}
//                   </h3>

//                   <p className="text-xs text-orange-500 mb-3 uppercase tracking-widest">
//                     {priest.expertise}
//                   </p>

//                   <p className="text-sm text-foreground/70 mb-5 italic">
//                     "{priest.description}"
//                   </p>

//                   <div className="flex items-center justify-between">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((s) => (
//                         <Star
//                           key={s}
//                           className="w-4 h-4 text-yellow-400 fill-yellow-400"
//                         />
//                       ))}
//                     </div>

//                     <Link to="/pooja-booking">
//                       <span className="text-orange-500 text-xs font-cinzel flex items-center gap-1">
//                         DETAILS <ChevronRight className="w-3 h-3" />
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TRUST */}
//       <section className="py-20 bg-white border-y">
//         <div className="container px-4">
//           <SectionTitle>Why Choose Purohitam</SectionTitle>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { icon: ShieldCheck, title: "Verified Priests", desc: "Background checked" },
//               { icon: Users, title: "Custom Rituals", desc: "As per tradition" },
//               { icon: Clock, title: "Auspicious Timings", desc: "Expert Muhurt" },
//               { icon: Star, title: "Divine Experience", desc: "Satisfied devotees" },
//             ].map((badge, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
//                   <badge.icon className="w-6 h-6" />
//                 </div>

//                 <h4 className="font-cinzel font-bold text-sm mb-1">
//                   {badge.title}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">
//                   {badge.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//         {/* ABOUT PUROHITAM (Hindi) */}
// <section className="py-24 bg-orange-50">
//   <div className="container px-6 max-w-4xl text-center">
    
//     <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-orange-700 mb-4">
//       पुरोहितम् क्या है ?
//     </h2>

//     <div className="w-16 h-[2px] bg-orange-400 mx-auto mb-8 rounded-full" />

//     <p className="text-lg text-gray-700 leading-relaxed mb-4">
//       पुरोहितम् एक आध्यात्मिक मंच है जो श्रद्धालुओं को उज्जैन की पावन
//       परंपराओं से जुड़े अनुभवी पंडितों और वैदिक सेवाओं से जोड़ता है।
//     </p>

//     <p className="text-lg text-gray-700 leading-relaxed mb-4">
//       यहाँ आप पूजा, अनुष्ठान, ज्योतिष परामर्श तथा धार्मिक मार्गदर्शन
//       के लिए विश्वसनीय पुरोहितों से सहज बुकिंग कर सकते हैं।
//     </p>

//     <p className="text-lg text-gray-700 leading-relaxed">
//       हमारा उद्देश्य महाकाल की नगरी की सनातन परंपराओं को आधुनिक सुविधा
//       के साथ प्रत्येक श्रद्धालु तक पहुँचाना है।
//     </p>

//     {/* Sanskrit accent */}
//     <p className="mt-8 text-orange-600/80 italic">
//       श्रद्धा–सेवा–संयोगः
//     </p>

//   </div>
// </section>
//     </div>
   
//   );
  
// };

// export default Index;
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  Users,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── data ─────────────────────────────────────────── */

const featuredPriests = [
  {
    id: 1,
    name: "Pandit Akshat Joshi",
    description:
      "Experienced priest specializing in Mahamrityunjay Jaap and Vedic rituals.",
    expertise: "Vedic Rituals · Mahamrityunjay Jaap",
    experience: "10+ Years",
    image: "/akshatjoshi.jpeg",
  },
  {
    id: 2,
    name: "Pandit Ayush Shukla",
    description:
      "Expert in Astrology and Muhurt calculations with deep knowledge of Shastras.",
    expertise: "Astrology · Muhurt",
    experience: "10+ Years",
    image: "/ayushshukla.jpeg",
  },
  {
    id: 3,
    name: "Pandit Animesh Pal",
    description:
      "Renowned for performing Kalsarp Dosh Nivaran and Grah Shanti poojas.",
    expertise: "Kalsarp Dosh · Grah Shanti",
    experience: "2+ Years",
    image: "/animeshpal.jpeg",
  },
];

const testimonials = [
  {
    text: "The entire experience was seamless and deeply moving. Pandit ji performed the Rudrabhishek with such devotion that I felt truly connected to Mahakal.",
    author: "Priya Sharma",
    city: "Indore",
    pooja: "Rudrabhishek",
  },
  {
    text: "Booking was effortless and the pandit arrived on time with all the required samagri. The Satyanarayan Katha felt authentic and sacred.",
    author: "Ramesh Gupta",
    city: "Bhopal",
    pooja: "Satyanarayan Katha",
  },
  {
    text: "I was skeptical about online bookings for something so personal, but Purohitam exceeded all expectations. Truly a blessed experience.",
    author: "Sneha Tiwari",
    city: "Mumbai",
    pooja: "Kalsarp Dosh Nivaran",
  },
];

const vedicQuotes = [
  {
    sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः",
    translation: "Where there is devotion, the divine resides.",
    source: "Manusmriti",
  },
  {
    sanskrit: "श्रद्धावान् लभते ज्ञानम्",
    translation: "The one with faith obtains wisdom.",
    source: "Bhagavad Gita 4.39",
  },
  {
    sanskrit: "ॐ नमः शिवाय",
    translation: "I bow to Shiva — the auspicious one.",
    source: "Shiva Panchakshara",
  },
];

/* ─── sub-components ────────────────────────────────── */

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-2">
    <div className="h-px w-16 bg-orange-300/40" />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
        fill="#f97316"
        opacity="0.6"
      />
    </svg>
    <div className="h-px w-16 bg-orange-300/40" />
  </div>
);

const SectionTitle = ({
  children,
  light = false,
  subtitle,
}: {
  children: React.ReactNode;
  light?: boolean;
  subtitle?: string;
}) => (
  <div className="text-center mb-16">
    <p
      className={cn(
        "text-xs tracking-[0.3em] mb-3 font-medium uppercase",
        light ? "text-orange-300/70" : "text-orange-500/70"
      )}
    >
      ॐ
    </p>
    <h2
      className={cn(
        "text-3xl md:text-[2.75rem] font-cinzel font-bold leading-tight mb-4",
        light ? "text-orange-100" : "text-stone-800"
      )}
    >
      {children}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "text-sm md:text-base max-w-xl mx-auto leading-relaxed",
          light ? "text-orange-200/60" : "text-stone-500"
        )}
      >
        {subtitle}
      </p>
    )}
    <OrnamentalDivider />
  </div>
);

/* ─── fade-in on scroll hook ───────────────────────── */

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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FadeIn = ({
  children,
  delay = 0,
  className,
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

/* ─── rotating quote in hero ───────────────────────── */

function useRotatingIndex(length: number, interval = 5000) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % length), interval);
    return () => clearInterval(t);
  }, [length, interval]);
  return idx;
}

/* ═══════════════════════════════════════════════════ */
/*  Main Component                                     */
/* ═══════════════════════════════════════════════════ */

const Index = () => {
  const quoteIdx = useRotatingIndex(vedicQuotes.length);
  const currentQuote = vedicQuotes[quoteIdx];

  return (
    <div className="flex flex-col font-sans antialiased">

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Background layers */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/mahakallok.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Top badge */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-orange-400/30 rounded-full px-5 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300/90 text-xs tracking-[0.25em] font-medium uppercase">
              Purohitam · Ujjain
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white leading-[1.12] mb-5">
            Seek the Divine
            <span className="block text-orange-400 mt-2">in Holy Ujjain</span>
          </h1>

          {/* Hindi tagline */}
          <p className="text-xl md:text-2xl text-orange-100/85 mb-2 font-light tracking-wide">
            महाकाल की नगरी में वैदिक पूजन सेवाओं का विश्वसनीय मंच
          </p>

          {/* Rotating Sanskrit quote */}
          <div className="mt-6 mb-10 min-h-[56px] flex flex-col items-center">
            <p
              key={quoteIdx}
              className="text-orange-300/75 italic text-sm md:text-base transition-all duration-700"
              style={{ animation: "fadeSlide 0.6s ease" }}
            >
              "{currentQuote.sanskrit}" — {currentQuote.source}
            </p>
            <p className="text-orange-200/50 text-xs mt-1">
              {currentQuote.translation}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/pooja-booking">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-500 text-white px-10 h-14 text-base font-cinzel tracking-widest shadow-none rounded-none border border-orange-500 transition-all hover:border-orange-400"
              >
                BOOK A POOJA
              </Button>
            </Link>
            <Link to="/city-guide">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300/40 text-orange-100 bg-transparent hover:bg-white/5 px-10 h-14 text-base font-cinzel tracking-widest rounded-none"
              >
                EXPLORE UJJAIN
              </Button>
            </Link>
          </div>

          {/* Stats strip */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 text-center">
            {[
              { num: "500+", label: "Poojas Performed" },
              { num: "3", label: "Learned Pandits" },
              { num: "12+", label: "Ritual Categories" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-cinzel font-bold text-orange-400">
                  {s.num}
                </p>
                <p className="text-orange-200/60 text-xs tracking-widest uppercase mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-orange-300/30 animate-pulse" />
          <span className="text-orange-300/40 text-[10px] tracking-[0.3em]">SCROLL</span>
        </div>
      </section>

      {/* ── VEDIC QUOTE BANNER ──────────────────────────── */}
      <section className="bg-orange-700 py-8 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-orange-100 text-lg md:text-xl italic font-light leading-relaxed">
            "Where the Shipra flows and Mahakal blesses — every prayer reaches the heavens."
          </p>
          <p className="text-orange-300/60 text-xs mt-2 tracking-widest uppercase">
            Ancient wisdom of Ujjain
          </p>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section className="py-28 bg-stone-50">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle
              subtitle="From sacred rituals to auspicious timings — we bridge your faith with tradition."
            >
              Our Spiritual Services
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Pooja Booking",
                desc: "Authentic Vedic rituals performed by learned, verified priests in the sacred city of Ujjain.",
                hint: "Rudrabhishek · Satyanarayan · Kalsarp Dosh",
                icon: Calendar,
                path: "/pooja-booking",
                accent: "#c2410c",
                bg: "#fff7ed",
              },
              {
                title: "Muhurt & Astrology",
                desc: "Consult expert astrologers for auspicious timings aligned with your kundali and celestial positions.",
                hint: "Marriage · Griha Pravesh · Namkaran",
                icon: Sparkles,
                path: "/muhurt",
                accent: "#a16207",
                bg: "#fefce8",
              },
              {
                title: "City Guide",
                desc: "Explore the sacred temples, ghats, and spiritual landmarks of Mahakal's divine city.",
                hint: "Mahakaleshwar · Kal Bhairav · Ram Ghat",
                icon: MapPin,
                path: "/city-guide",
                accent: "#7c3aed",
                bg: "#f5f3ff",
              },
            ].map((option, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <Link
                  to={option.path}
                  className="group block p-8 rounded-2xl bg-white border border-stone-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: option.bg }}
                  >
                    <option.icon
                      className="w-7 h-7"
                      style={{ color: option.accent }}
                    />
                  </div>

                  <h3 className="text-xl font-cinzel font-bold mb-2 text-stone-800">
                    {option.title}
                  </h3>

                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {option.desc}
                  </p>

                  <p className="text-xs text-orange-400/80 tracking-wide mb-6">
                    {option.hint}
                  </p>

                  <span
                    className="text-xs font-cinzel tracking-widest flex items-center gap-1 uppercase transition-colors group-hover:text-orange-600"
                    style={{ color: option.accent }}
                  >
                    Explore <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIESTS ─────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle
              subtitle="Our pandits carry forward generations of Vedic knowledge from the sacred land of Ujjain."
            >
              Learned Priests
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredPriests.map((priest, idx) => (
              <FadeIn key={priest.id} delay={idx * 120}>
                <div className="group overflow-hidden rounded-2xl border border-stone-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300 bg-white">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-stone-100">
                    <img
                      src={priest.image}
                      alt={priest.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-orange-600 text-white text-xs font-cinzel px-3 py-1 rounded-full">
                        {priest.experience}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-cinzel font-bold text-stone-800 mb-1">
                      {priest.name}
                    </h3>
                    <p className="text-[11px] text-orange-500 uppercase tracking-widest mb-3">
                      {priest.expertise}
                    </p>

                    {/* Quote */}
                    <div className="border-l-2 border-orange-200 pl-3 mb-5">
                      <p className="text-sm text-stone-500 leading-relaxed italic">
                        {priest.description}
                      </p>
                    </div>

                    {/* Rating + link */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                      <Link to="/pooja-booking">
                        <span className="text-orange-500 text-xs font-cinzel flex items-center gap-1 hover:text-orange-700 transition-colors uppercase tracking-wide">
                          Book <ChevronRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK BANNER — WHY PUROHITAM ─────────────────── */}
      <section className="py-28 bg-stone-900 relative overflow-hidden">
        {/* Decorative Sanskrit watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="text-[18rem] font-cinzel font-bold text-white/[0.02] leading-none"
          >
            ॐ
          </span>
        </div>

        <div className="container px-4 relative z-10">
          <FadeIn>
            <SectionTitle light subtitle="Built on trust, tradition, and technology.">
              Why Choose Purohitam
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Priests",
                desc: "Every pandit is background-checked and trained in authentic Vedic traditions.",
              },
              {
                icon: Users,
                title: "Custom Rituals",
                desc: "Poojas tailored to your family's tradition, language, and regional customs.",
              },
              {
                icon: Clock,
                title: "Auspicious Timings",
                desc: "Expert Muhurt calculated to align with your kundali and celestial positions.",
              },
              {
                icon: Star,
                title: "Divine Experience",
                desc: "Hundreds of satisfied devotees across India trust Purohitam for their sacred needs.",
              },
            ].map((badge, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="text-center group p-6 rounded-2xl border border-white/5 hover:border-orange-500/20 hover:bg-white/[0.03] transition-all">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-all">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel font-bold text-sm text-white mb-2">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="py-28 bg-orange-50">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle subtitle="Devotees from across India have experienced the grace of Mahakal through Purohitam.">
              Devotee Experiences
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl border border-orange-100 p-7 hover:shadow-md transition-shadow">
                  <Quote className="w-6 h-6 text-orange-200 mb-4" />
                  <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                    <div>
                      <p className="text-sm font-cinzel font-bold text-stone-800">
                        {t.author}
                      </p>
                      <p className="text-xs text-stone-400">{t.city}</p>
                    </div>
                    <span className="text-[10px] text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 tracking-wide font-medium">
                      {t.pooja}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT IN HINDI ───────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container px-6 max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-orange-500/70 text-xs tracking-[0.3em] mb-3 uppercase">ॐ</p>
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-stone-800 mb-4">
              पुरोहितम् क्या है?
            </h2>
            <OrnamentalDivider />

            <div className="mt-8 space-y-5 text-stone-600 text-lg leading-[1.9] text-left md:text-center">
              <p>
                पुरोहितम् एक आध्यात्मिक मंच है जो श्रद्धालुओं को उज्जैन की पावन
                परंपराओं से जुड़े अनुभवी पंडितों और वैदिक सेवाओं से जोड़ता है।
              </p>
              <p>
                यहाँ आप पूजा, अनुष्ठान, ज्योतिष परामर्श तथा धार्मिक मार्गदर्शन
                के लिए विश्वसनीय पुरोहितों से सहज बुकिंग कर सकते हैं।
              </p>
              <p>
                हमारा उद्देश्य महाकाल की नगरी की सनातन परंपराओं को आधुनिक सुविधा
                के साथ प्रत्येक श्रद्धालु तक पहुँचाना है।
              </p>
            </div>

            <div className="mt-10 inline-block border border-orange-200 rounded-full px-8 py-3">
              <p className="text-orange-600 italic text-lg font-cinzel tracking-wider">
                श्रद्धा–सेवा–संयोगः
              </p>
              <p className="text-stone-400 text-xs mt-1">
                Faith · Service · Connection
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA FOOTER STRIP ─────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="container px-4 relative z-10 text-center">
          <p className="text-orange-200/70 text-xs tracking-[0.3em] mb-3 uppercase">
            हर हर महादेव
          </p>
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-4">
            Begin Your Sacred Journey
          </h2>
          <p className="text-orange-100/70 text-base max-w-xl mx-auto mb-10">
            "The divine does not dwell in temples alone — it dwells in the sincerity of your prayer."
          </p>
          <Link to="/pooja-booking">
            <Button
              size="lg"
              className="bg-white text-orange-700 hover:bg-orange-50 px-12 h-14 text-base font-cinzel tracking-widest shadow-none rounded-none border border-white/30 transition-all"
            >
              BOOK YOUR POOJA
            </Button>
          </Link>
        </div>
      </section>

      {/* Keyframe for rotating quote */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Index;
