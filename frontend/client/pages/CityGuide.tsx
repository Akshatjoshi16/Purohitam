// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { MapPin, Info, Star, Compass, Clock, ChevronRight, Image as ImageIcon } from "lucide-react";

// const landmarks = [
//   {
//     id: 1,
//     name: "Mahakaleshwar Jyotirlinga",
//     description: "One of the twelve Jyotirlingas, the Mahakaleshwar temple is famous for its Bhasma Aarti.",
//     location: "Ujjain Central",
//     importance: "Primary Spiritual Center",
//     image: "/mahakal.jpeg"
//   },
//   {
//     id: 2,
//     name: "Ram Ghat",
//     description: "The most ancient bathing ghat in Ujjain, located on the banks of the Shipra river.",
//     location: "Shipra River Bank",
//     importance: "Holy Rituals & Snan",
//     image: "https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 3,
//     name: "Kal Bhairav Temple",
//     description: "A unique temple where the deity is offered liquor as part of the ritual offerings.",
//     location: "Northern Ujjain",
//     importance: "Protector Deity",
//     image: "https://images.pexels.com/photos/29329247/pexels-photo-29329247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 4,
//     name: "Harsiddhi Temple",
//     description: "One of the 51 Shaktipeeths, famous for its two massive lamp towers (Deep Stambhas).",
//     location: "Near Mahakal Temple",
//     importance: "Shakti Worship",
//     image: "https://images.pexels.com/photos/18405155/pexels-photo-18405155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   }
// ];

// const CityGuide = () => {
//   return (
//     <div className="flex flex-col animate-in fade-in duration-700">
//       {/* Page Header */}
//       <section className="bg-accent text-white py-24 relative overflow-hidden">
//         <div className="absolute inset-0 spiritual-pattern opacity-10" />
//         <div className="container relative z-10 text-center px-4">
//           <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium tracking-widest uppercase">
//             Spiritual Tourism Guide
//           </div>
//           <h1 className="text-4xl md:text-7xl font-cinzel font-bold mb-6">Explore Sacred Ujjain</h1>
//           <p className="text-lg text-white/70 max-w-2xl mx-auto italic font-playfair">
//             "Walk through the timeless streets where Mahakaal resides and the holy Shipra flows."
//           </p>
//         </div>
//       </section>

//       {/* Main Map/Intro Section */}
//       <section className="py-20 container px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">The City of Mahakaal</h2>
//               <div className="w-20 h-1 bg-primary rounded-full" />
//               <p className="text-lg text-foreground/60 leading-relaxed italic">
//                 Ujjain, also known as Avantika, is one of the seven sacred cities (Sapta Puri) of India. It hosts the Kumbh Mela (Simhastha) every 12 years and is the center of the world's time-keeping according to ancient Vedic astronomy.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { title: "Best Time to Visit", desc: "October to March (Pleasant Weather)", icon: Clock },
//                 { title: "Key Festival", desc: "Kumbh Mela, Mahashivratri", icon: Star },
//                 { title: "Must Experience", desc: "Bhasma Aarti at Mahakal", icon: Info },
//                 { title: "Holy River", desc: "Shipra (Purifying Waters)", icon: Compass },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
//                   <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
//                     <item.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-cinzel font-bold text-xs uppercase tracking-widest text-accent mb-1">{item.title}</h4>
//                     <p className="text-xs text-foreground/60">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-14 text-sm font-cinzel tracking-widest glow-saffron transition-all">
//               DOWNLOAD PDF GUIDE
//             </Button>
//           </div>
          
//           <div className="relative group">
//             <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-6 duration-500" />
//             <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white aspect-[4/5]">
//               <img 
//                 src="https://images.pexels.com/photos/18405155/pexels-photo-18405155.jpeg" 
//                 alt="Ujjain Temple View" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               <div className="absolute bottom-8 left-8">
//                 <p className="text-white/60 text-xs font-cinzel tracking-widest uppercase mb-2">Aerial View</p>
//                 <h3 className="text-white text-2xl font-cinzel font-bold">Mahakal Temple Complex</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Landmarks Grid */}
//       <section className="py-24 bg-muted/30">
//         <div className="container px-4">
//           <div className="text-center mb-16 space-y-4">
//             <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">Sacred Landmarks</h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
//             <p className="text-foreground/60 max-w-2xl mx-auto">
//               Explore the most significant temples and spiritual locations in the holy city.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {landmarks.map((landmark) => (
//               <div key={landmark.id} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-border shadow-md hover:shadow-xl transition-all group">
//                 <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-2xl relative">
//                   <img 
//                     src={landmark.image} 
//                     alt={landmark.name} 
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold font-cinzel tracking-widest uppercase backdrop-blur-sm">
//                     {landmark.importance}
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
//                   <div className="flex items-center gap-2 text-primary font-cinzel text-[10px] tracking-[0.2em] uppercase font-bold">
//                     <MapPin className="w-3 h-3" /> {landmark.location}
//                   </div>
//                   <h3 className="text-2xl font-cinzel font-bold text-accent group-hover:text-primary transition-colors uppercase tracking-widest">{landmark.name}</h3>
//                   <p className="text-sm text-foreground/70 leading-relaxed italic line-clamp-3">"{landmark.description}"</p>
//                   <Button variant="ghost" className="p-0 h-auto font-cinzel tracking-widest text-xs hover:text-primary gap-2 mt-4 self-start">
//                     READ MORE <ChevronRight className="w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="py-24 bg-accent text-white relative overflow-hidden">
//         <div className="absolute inset-0 spiritual-pattern opacity-10" />
//         <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
//           <div className="lg:col-span-8">
//             <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">Plan Your Spiritual Journey</h2>
//             <p className="text-lg text-white/70 max-w-2xl mb-10 italic font-playfair">
//               Whether you are here for a single day or a week-long retreat, we can help you navigate the spiritual landscape of Ujjain efficiently and with devotion.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 h-14 text-sm font-cinzel tracking-widest glow-saffron rounded-xl">
//                 BOOK A GUIDE
//               </Button>
//               <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 px-8 h-14 text-sm font-cinzel tracking-widest rounded-xl">
//                 VIEW ITINERARIES
//               </Button>
//             </div>
//           </div>
//           <div className="lg:col-span-4 hidden lg:block">
//             <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center space-y-6">
//               <div className="h-16 w-16 bg-primary mx-auto rounded-full flex items-center justify-center glow-saffron">
//                 <ImageIcon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-cinzel font-bold tracking-widest uppercase">Photo Gallery</h3>
//               <p className="text-xs text-white/50 italic">See the divine beauty of Ujjain through our curated gallery.</p>
//               <Button variant="link" className="text-primary font-cinzel font-bold text-xs tracking-widest uppercase p-0 h-auto">
//                 VIEW GALLERY
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CityGuide;
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Compass,
  Clock,
  ChevronRight,
  Calendar,
  Droplets,
  Sun,
  Moon,
  Flame,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────── */

const landmarks = [
  {
    id: 1,
    name: "Mahakaleshwar Jyotirlinga",
    category: "Jyotirlinga",
    location: "Ujjain Central",
    tagline: "Where Time Bows to the Eternal",
    description:
      "One of the twelve Jyotirlingas, Mahakaleshwar is the presiding deity of Ujjain. The unique south-facing (Dakshinamurti) Shivalinga is considered Swayambhu — self-manifested. The pre-dawn Bhasma Aarti, performed with sacred ash, is unlike any ritual on earth.",
    highlight: "Bhasma Aarti at 4 AM — a once-in-a-lifetime experience",
    timing: "4:00 AM – 11:00 PM",
    bestFor: "Darshan, Bhasma Aarti",
    image: "/mahakal.jpeg",
    badge: "Must Visit",
  },
  {
    id: 2,
    name: "Ram Ghat",
    category: "Sacred Ghat",
    location: "Shipra River Bank",
    tagline: "Where the Holy Shipra Purifies the Soul",
    description:
      "The most ancient and revered bathing ghat of Ujjain, Ram Ghat is the epicenter of the Kumbh Mela (Simhastha). Evening Shipra Aarti here rivals that of Varanasi in its devotional intensity — lamps, chants, and the timeless river create an unforgettable atmosphere.",
    highlight: "Evening Shipra Aarti — spiritually equivalent to Ganga Aarti",
    timing: "Open 24 hours",
    bestFor: "Holy Snan, Evening Aarti",
    image:
      "ramghat.png",
    badge: "Iconic",
  },
  {
    id: 3,
    name: "Kal Bhairav Temple",
    category: "Tantric Shrine",
    location: "Northern Ujjain",
    tagline: "The Guardian Who Accepts What Others Refuse",
    description:
      "One of India's most extraordinary temples — Kal Bhairav, the fierce guardian of Ujjain, is ritually offered liquor (prasad) which is believed to be consumed by the deity. The temple's tantric energy is palpable and draws seekers of raw, unfiltered divinity.",
    highlight: "Witness the deity drink liquor — a rare tantric tradition",
    timing: "5:00 AM – 10:30 PM",
    bestFor: "Tantra, Protection Blessings",
    image:
      "kalbhairav.jpg",
    badge: "Unique",
  },
  {
    id: 4,
    name: "Harsiddhi Temple",
    category: "Shaktipeeth",
    location: "Near Mahakal Temple",
    tagline: "One of the 51 Shaktipeeths of the Divine Mother",
    description:
      "Harsiddhi Mata is Ujjain's presiding Shakti — one of 51 sacred Shaktipeeths across India. The temple's most arresting feature are two massive Deep Stambhas (lamp towers) with 1,001 diyas each, lit during Navratri, creating a sight of overwhelming beauty and devotion.",
    highlight: "1,001 diyas on twin towers during Navratri — breathtaking",
    timing: "5:00 AM – 9:00 PM",
    bestFor: "Shakti Worship, Navratri",
    image:
      "harsiddhimata.jpg",
    badge: "Shaktipeeth",
  },
  {
    id: 5,
    name: "Sandipani Ashram",
    category: "Sacred Ashram",
    location: "Ankpat Colony",
    tagline: "Where Lord Krishna Received His Education",
    description:
      "This ancient ashram is where Lord Krishna, Balarama, and Sudama studied under the sage Sandipani. A stone slab bearing ancient numerals 1–100 (said to be inscribed by Krishna himself) still exists. A profound site connecting devotees directly to the childhood of the divine.",
    highlight: "The stone slate of Krishna — ancient numerals still visible",
    timing: "7:00 AM – 6:00 PM",
    bestFor: "Krishna Devotees, History",
    image:
      "https://images.pexels.com/photos/7320227/pexels-photo-7320227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badge: "Historic",
  },
  {
    id: 6,
    name: "Gopal Mandir",
    category: "Hindu Temple",
    location: "Patel Bridge Corner,Ujjain",
    tagline: "The Marble Marvel of Ujjain",
    description:
      "Gopal Mandir, also known as Dwarka Dhish Temple, is the second largest temple in Ujjain. Built in the 19th century by Bayajibai Shinde, the queen of Maratha ruler Daulat Rao Scindia, this magnificent temple is dedicated to Lord Krishna. The temple is renowned for its stunning marble architecture and the silver-plated doors believed to have been brought from Ghazni by Mahadji Scindia.",
    highlight: "The silver-plated doors of this temple were once taken to Ghazni, Afghanistan",
    timing: "5:00 AM - 12:00 PM & 4:00 PM - 10:00 PM",
    bestFor: "Krishna Devotees & Architecture lovers",
    image:
      "gopalmandir.jpg",
    badge: "Maratha Heritage",
  },
];

const travelTips = [
  {
    icon: Clock,
    title: "Best time to visit",
    body: "October – March. Pleasant weather, major festivals. Avoid April–June (extreme heat, 42°C+).",
  },
  {
    icon: Star,
    title: "Key festivals",
    body: "Mahashivratri (Feb/Mar), Navratri (Oct), Kumbh Mela / Simhastha every 12 years.",
  },
  {
    icon: Flame,
    title: "Don't miss",
    body: "Bhasma Aarti at Mahakal (4 AM). Book 2–3 days in advance through the official temple portal.",
  },
  {
    icon: Droplets,
    title: "Holy river",
    body: "Take a dip in the Shipra at Ram Ghat at sunrise. Considered as purifying as the Ganga.",
  },
  {
    icon: Compass,
    title: "Getting around",
    body: "Auto-rickshaws and e-rickshaws are the best way. Most major temples are within 5 km of each other.",
  },
  {
    icon: Moon,
    title: "Sacred timing",
    body: "Pradosh (13th lunar day), Amavasya, and Purnima are especially powerful days to visit temples.",
  },
];

const itinerary = [
  { time: "3:30 AM", act: "Arrive at Mahakaleshwar for Bhasma Aarti", tag: "Spiritual" },
  { time: "6:30 AM", act: "Sunrise snan at Ram Ghat + Shipra aarti", tag: "Sacred" },
  { time: "8:30 AM", act: "Prasad breakfast near temple market", tag: "Local" },
  { time: "10:00 AM", act: "Harsiddhi Temple darshan", tag: "Shakti" },
  { time: "11:30 AM", act: "Sandipani Ashram — Krishna's school", tag: "History" },
  { time: "2:00 PM", act: "Vedh Shala observatory visit", tag: "Astronomy" },
  { time: "4:30 PM", act: "Kal Bhairav Temple", tag: "Tantric" },
  { time: "7:00 PM", act: "Evening Shipra Aarti at Ram Ghat", tag: "Divine" },
];

/* ─── fade-in hook ──────────────────────────────── */
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
        transform: "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── ornamental divider ────────────────────────── */
const OrnamentalDivider = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center justify-center gap-4 my-3">
    <div className={`h-px w-14 ${light ? "bg-orange-300/30" : "bg-orange-300/50"}`} />
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
        fill="#f97316"
        opacity="0.55"
      />
    </svg>
    <div className={`h-px w-14 ${light ? "bg-orange-300/30" : "bg-orange-300/50"}`} />
  </div>
);

/* ─── section title ──────────────────────────────── */
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
      <p className={`text-sm max-w-xl mx-auto leading-relaxed mt-3 ${light ? "text-orange-100/55" : "text-stone-500"}`}>
        {subtitle}
      </p>
    )}
    <OrnamentalDivider light={light} />
  </div>
);

/* ─── badge colors ───────────────────────────────── */
const badgeColor: Record<string, string> = {
  "Must Visit": "bg-orange-600 text-white",
  Iconic: "bg-amber-500 text-white",
  Unique: "bg-purple-700 text-white",
  Shaktipeeth: "bg-pink-600 text-white",
  Historic: "bg-stone-700 text-white",
  "Rare Knowledge": "bg-teal-700 text-white",
};

const tagColor: Record<string, string> = {
  Spiritual: "bg-orange-100 text-orange-700",
  Sacred: "bg-amber-100 text-amber-700",
  Local: "bg-stone-100 text-stone-600",
  Shakti: "bg-pink-100 text-pink-700",
  History: "bg-blue-100 text-blue-700",
  Astronomy: "bg-indigo-100 text-indigo-700",
  Tantric: "bg-purple-100 text-purple-700",
  Divine: "bg-yellow-100 text-yellow-700",
};

/* ═══════════════════════════════════════════════════ */

const CityGuide = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex flex-col antialiased">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/18405155/pexels-photo-18405155.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

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
              Spiritual Tourism Guide
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white leading-[1.1] mb-5">
            Explore Sacred
            <span className="block text-orange-400 mt-2">Ujjain</span>
          </h1>

          <p className="text-orange-100/70 text-lg italic mb-3">
            "Walk through the timeless streets where Mahakaal resides and the holy Shipra flows."
          </p>
          <p className="text-orange-300/50 text-xs tracking-widest mb-12">
            Avantika · Sapta Puri · Mahakaal Kshetra
          </p>

          {/* Quick stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            {[
              { num: "6", label: "Sacred landmarks" },
              { num: "4000+", label: "Years of history" },
              { num: "12", label: "Jyotirlingas — one here" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-cinzel font-bold text-orange-400">{s.num}</p>
                <p className="text-orange-200/50 text-[10px] tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-orange-300/25 animate-pulse" />
          <span className="text-orange-300/35 text-[9px] tracking-[0.35em]">SCROLL</span>
        </div>
      </section>

      {/* ── ABOUT UJJAIN ─────────────────────────────── */}
      <section className="py-28 bg-stone-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

            {/* Left — text */}
            <FadeIn>
              <div>
                <p className="text-[10px] text-orange-500/70 tracking-[0.35em] uppercase mb-4">ॐ</p>
                <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-stone-800 mb-4 leading-tight">
                  The City of Mahakaal
                </h2>
                <OrnamentalDivider />
                <div className="space-y-4 mt-6 text-stone-500 text-[15px] leading-[1.85]">
                  <p>
                    Ujjain — also known as <span className="text-orange-600 font-medium">Avantika</span> — is one of India's seven sacred cities (Sapta Puri), believed to grant moksha to those who die here. It is the abode of Mahakaal, the Lord of Time — the only deity who rules over time itself.
                  </p>
                  <p>
                    Ancient Vedic astronomers placed Ujjain on the <span className="text-orange-600 font-medium">Karka Rekha</span> — the prime meridian of the ancient world. Time, divinity, and cosmic order all converge in this extraordinary city on the banks of the Shipra.
                  </p>
                  <p>
                    Every 12 years, the city hosts the <span className="text-orange-600 font-medium">Kumbh Mela (Simhastha)</span>, one of the largest human gatherings on earth — a testament to Ujjain's eternal pull on the human soul.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  {travelTips.slice(0, 4).map((tip, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-4 bg-white rounded-xl border border-stone-200 hover:border-orange-200 transition-colors"
                    >
                      <div className="w-9 h-9 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center shrink-0">
                        <tip.icon className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-[11px] font-cinzel font-bold text-stone-700 uppercase tracking-wide mb-0.5">
                          {tip.title}
                        </p>
                        <p className="text-[11px] text-stone-400 leading-snug">{tip.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right — image */}
            <FadeIn delay={150}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border border-orange-200 rounded-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-lg aspect-[4/5]">
                  <img
                    src="/mahakal.jpeg"
                    alt="Mahakal Temple"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-orange-300/70 text-[10px] font-cinzel tracking-widest uppercase mb-1">
                      Sacred Complex
                    </p>
                    <h3 className="text-white text-xl font-cinzel font-bold">
                      Mahakaleshwar Temple
                    </h3>
                    <p className="text-white/50 text-xs mt-1">
                      Ujjain, Madhya Pradesh
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-6 -left-5 bg-white border border-orange-100 rounded-2xl shadow-sm px-4 py-3">
                  <p className="text-xs font-cinzel font-bold text-stone-700">One of 12</p>
                  <p className="text-[10px] text-orange-500">Jyotirlingas</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── LANDMARKS ────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle
              subtitle="The most significant temples, ghats, and spiritual sites of the holy city — each with a story older than memory."
            >
              Sacred Landmarks
            </SectionTitle>
          </FadeIn>

          <div className="max-w-6xl mx-auto space-y-10">
            {landmarks.map((lm, idx) => (
              <FadeIn key={lm.id} delay={idx * 60}>
                <div
                  className={`group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-orange-200 ${activeId === lm.id ? "border-orange-300 shadow-lg" : "border-stone-200"}`}
                  style={{ flexDirection: idx % 2 === 0 ? "row" : "row-reverse" }}
                >
                  {/* Image — alternating sides via order */}
                  <div
                    className={`relative h-72 md:h-auto overflow-hidden ${idx % 2 !== 0 ? "md:order-2" : ""}`}
                  >
                    <img
                      src={lm.image}
                      alt={lm.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Badge */}
                    <div
                      className={`absolute top-5 left-5 text-[10px] font-cinzel font-bold px-3 py-1 rounded-full ${badgeColor[lm.badge] || "bg-stone-700 text-white"}`}
                    >
                      {lm.badge}
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-5 left-5">
                      <span className="text-white/60 text-[10px] tracking-widest uppercase">
                        {lm.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`bg-white p-8 md:p-10 flex flex-col justify-center ${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-1.5 text-orange-500 text-[10px] font-cinzel tracking-[0.2em] uppercase font-bold mb-3">
                      <MapPin className="w-3 h-3" />
                      {lm.location}
                    </div>

                    <h3 className="text-2xl font-cinzel font-bold text-stone-800 mb-1 leading-tight">
                      {lm.name}
                    </h3>

                    <p className="text-orange-500/70 text-xs italic mb-4">"{lm.tagline}"</p>

                    <div className="border-l-2 border-orange-100 pl-4 mb-5">
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {lm.description}
                      </p>
                    </div>

                    {/* Highlight box */}
                    <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-5">
                      <p className="text-[11px] text-orange-700 flex items-start gap-2">
                        <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400 shrink-0 mt-0.5" />
                        {lm.highlight}
                      </p>
                    </div>

                    {/* Meta row */}
                    <div className="flex items-center gap-4 text-[10px] text-stone-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {lm.timing}
                      </span>
                      <span className="flex items-center gap-1">
                        <Compass className="w-3 h-3" /> {lm.bestFor}
                      </span>
                    </div>

                    <div className="mt-6 pt-5 border-t border-stone-100">
                      <Link
                        to="/pooja-booking"
                        className="inline-flex items-center gap-1.5 text-[11px] font-cinzel tracking-widest text-orange-500 hover:text-orange-700 uppercase transition-colors group/link"
                      >
                        Book a Pooja Here
                        <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE-DAY ITINERARY ────────────────────────── */}
      <section className="py-28 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span className="text-[18rem] font-cinzel font-bold text-white/[0.025] leading-none">ॐ</span>
        </div>

        <div className="container px-4 relative z-10">
          <FadeIn>
            <SectionTitle light subtitle="Squeeze the sacred essence of Ujjain into a single blessed day.">
              One-Day Sacred Itinerary
            </SectionTitle>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            {itinerary.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 60}>
                <div className="flex gap-5 mb-0 group">
                  {/* Timeline spine */}
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                    {idx < itinerary.length - 1 && (
                      <div className="w-px flex-1 bg-stone-700 my-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-7 flex-1">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className="text-orange-400 font-cinzel text-xs tracking-widest mr-3">
                          {item.time}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagColor[item.tag] || "bg-stone-700 text-stone-300"}`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-stone-300 text-sm mt-1.5 group-hover:text-white transition-colors">
                      {item.act}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL TIPS ──────────────────────────────── */}
      <section className="py-28 bg-orange-50">
        <div className="container px-4">
          <FadeIn>
            <SectionTitle subtitle="Practical guidance to make your pilgrimage to Ujjain safe, fulfilling, and deeply spiritual.">
              Traveller's Guide
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {travelTips.map((tip, idx) => (
              <FadeIn key={idx} delay={idx * 70}>
                <div className="bg-white rounded-2xl border border-orange-100 p-6 hover:shadow-md hover:border-orange-200 transition-all group">
                  <div className="w-11 h-11 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <tip.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="font-cinzel font-bold text-stone-800 text-sm mb-2 uppercase tracking-wide">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{tip.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0px,#fff 1px,transparent 1px,transparent 12px)",
          }}
        />
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-200/60 text-[10px] tracking-[0.35em] uppercase mb-3">
                हर हर महादेव
              </p>
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4 leading-tight">
                Experience Ujjain<br />Through Sacred Poojas
              </h2>
              <p className="text-orange-100/60 text-sm leading-relaxed mb-8">
                "To perform a ritual in Ujjain is to speak directly to the divine — for this is the city where Mahakaal listens."
              </p>
              <Link to="/pooja-booking">
                <button className="bg-white text-orange-700 hover:bg-orange-50 px-10 h-12 text-sm font-cinzel tracking-widest rounded-none border border-white/30 transition-all flex items-center gap-2 group">
                  BOOK A POOJA
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Quick fact card */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-8">
              <p className="text-orange-200/60 text-[10px] tracking-widest uppercase mb-5">
                Did you know?
              </p>
              <div className="space-y-5">
                {[
                  { q: "Ancient name", a: "Avantika — mentioned in the Mahabharata" },
                  { q: "Prime meridian", a: "Ujjain was 0° longitude in ancient Vedic astronomy" },
                  { q: "Jyotirlinga", a: "Mahakaleshwar is the only south-facing Jyotirlinga" },
                  { q: "Kumbh Mela", a: "Held every 12 years — next Simhastha in 2028" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-orange-300/70 text-[10px] uppercase tracking-wide">{f.q} — </span>
                      <span className="text-white/80 text-xs">{f.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CityGuide;
