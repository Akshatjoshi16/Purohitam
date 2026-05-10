
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, CheckCircle2, ChevronRight, Star, Flame, ShieldCheck, MapPin, Phone, CalendarCheck, ScrollText, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const poojas = [
  {
    id: 1,
    name: "Mahamrityunjay Jaap",
    description: "A powerful Vedic chant dedicated to Lord Shiva for health and longevity, invoking divine protection against disease and untimely death.",
    duration: "2–4 Hours",
    purpose: "Health · Protection · Peace",
    benefits: "Heals ailments, removes fear, brings longevity",
    price: "₹5,100",
    image: "/mahamrityunjay.jpg",
    badge: "Most Booked",
    category: "Popular",
    featured: true,
    chants: "1,25,000 Jaaps",
    location: "Mahakaleshwar, Ujjain",
    priests: "2 Vedic Pandits",
  },
  {
    id: 2,
    name: "Kalsarp Dosh Nivaran",
    description: "A special ritual performed at the sacred ghats of Ujjain to mitigate the malefic effects of Rahu and Ketu in your horoscope.",
    duration: "3 Hours",
    purpose: "Success · Obstacle Removal",
    benefits: "Removes hurdles in career and marriage, brings stability",
    price: "₹3,500",
    image: "/kalsarp.png",
    category: "Dosh Nivaran",
    chants: "Rahu-Ketu Stotra",
    location: "Ram Ghat, Ujjain",
    priests: "1 Vedic Pandit",
  },
  {
    id: 3,
    name: "Grah Shanti Pooja",
    description: "Ritual to balance all nine planetary influences in your horoscope, bringing cosmic harmony to your personal and professional life.",
    duration: "4 Hours",
    purpose: "Prosperity · Harmony · Balance",
    benefits: "Harmony at home and workplace, improves fortune",
    price: "₹4,200",
    image: "/grahshanti.jpg",
    category: "Shanti Pooja",
    chants: "Navagraha Mantra",
    location: "Mangalnath Temple, Ujjain",
    priests: "2 Vedic Pandits",
  },
  {
    id: 4,
    name: "Rudra Abhishek",
    description: "Sacred bathing of Lord Shiva's Lingam with panchamrit — milk, curd, honey, ghee and sugar — while chanting the Sri Rudram.",
    duration: "1.5 Hours",
    purpose: "Blessings · Purification",
    benefits: "Fulfills desires, purifies soul, divine grace",
    price: "₹2,100",
    image: "/rudraabhishek.jpg",
    category: "Abhishek",
    chants: "Sri Rudram & Chamakam",
    location: "Mahakaleshwar, Ujjain",
    priests: "1 Vedic Pandit",
  },
  {
    id: 5,
    name: "Vastu Pujan",
    description: "Sacred griha pravesh ceremony to purify your new home, invoke the blessings of Vastu Purush, and remove all negative energies before you move in.",
    duration: "7 Hours",
    purpose: "Blessings · Peace · Happiness",
    benefits: "Removes Vastu defects, family prosperity, health",
    price: "₹21,000",
    image: "/vastu.jpg",
    badge: "Premium",
    category: "Pujan",
    chants: "Vastu Sukta & Griha Shanti",
    location: "At Your Home",
    priests: "3 Vedic Pandits",
  },
  {
    id: 6,
    name: "Pitru Dosh Nivaran",
    description: "A deeply sacred ritual performed to seek forgiveness from ancestors and resolve karmic debts that may be causing obstacles across generations.",
    duration: "3–4 Hours",
    purpose: "Ancestral Peace · Karma Cleansing",
    benefits: "Removes ancestral curses, brings family harmony",
    price: "₹3,100",
    image: "/pitradosh.jpg",
    category: "Dosh Nivaran",
    chants: "Pitru Tarpan & Gayatri",
    location: "Shipra Ghat, Ujjain",
    priests: "2 Vedic Pandits",
  },
  {
    id: 7,
    name: "Lakshmi Puja",
    description: "An auspicious ritual to invoke Goddess Lakshmi for wealth, prosperity and abundance. Especially powerful when performed on Fridays or Diwali.",
    duration: "2 Hours",
    purpose: "Wealth · Prosperity · Abundance",
    benefits: "Financial growth, removes poverty, attracts luck",
    price: "₹2,500",
    image: "/grahshanti.jpg",
    badge: "Trending",
    category: "Popular",
    chants: "Shri Suktam & Lakshmi Stotra",
    location: "At Your Home / Temple",
    priests: "1 Vedic Pandit",
  },
  {
    id: 8,
    name: "Satyanarayan Katha",
    description: "A beloved Vaishnav ritual narrating the glory of Lord Vishnu, performed during housewarmings, marriages, and other auspicious occasions.",
    duration: "2–3 Hours",
    purpose: "Gratitude · Blessings · Family Harmony",
    benefits: "Brings joy, fulfills wishes, family bonding",
    price: "₹1,800",
    image: "/rudraabhishek.jpg",
    category: "Pujan",
    chants: "Satyanarayan Vrat Katha",
    location: "At Your Home",
    priests: "1 Vedic Pandit",
  },
];

const CATEGORIES = ["All", "Popular", "Dosh Nivaran", "Shanti Pooja", "Abhishek", "Pujan"];

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Indore",
    text: "The Kalsarp Dosh Nivaran changed our lives. Within months of the pooja, my husband got a promotion and we found the house we had been searching for years.",
    pooja: "Kalsarp Dosh Nivaran",
    rating: 5,
  },
  {
    name: "Ramesh Agarwal",
    city: "Bhopal",
    text: "Very professional pandits. They explained every ritual step by step and made us feel deeply connected to the ceremony. Truly divine experience at Ujjain.",
    pooja: "Mahamrityunjay Jaap",
    rating: 5,
  },
  {
    name: "Sunita Joshi",
    city: "Mumbai",
    text: "Booked Vastu Pujan for our new flat. The pandits arrived on time, performed the pooja with full dedication. Our home feels peaceful and positive now.",
    pooja: "Vastu Pujan",
    rating: 5,
  },
];

const howItWorks = [
  { icon: ScrollText, step: "01", title: "Choose Your Ritual", desc: "Browse and select the pooja that aligns with your spiritual goals and needs." },
  { icon: CalendarCheck, step: "02", title: "Book a Date", desc: "Pick an auspicious date — we'll suggest muhurts based on your horoscope." },
  { icon: Phone, step: "03", title: "Pandit Confirms", desc: "A learned pandit calls you to discuss details, samagri, and preparation." },
  { icon: Sparkles, step: "04", title: "Divine Ceremony", desc: "Experience the pooja live or have it performed on your behalf at the sacred site." },
];

const MandalaSVG = () => (
  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.07] pointer-events-none" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="110" stroke="white" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="50" stroke="white" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="20" stroke="white" strokeWidth="0.5" />
    <g stroke="white" strokeWidth="0.4" opacity="0.8">
      <line x1="150" y1="10" x2="150" y2="290" /><line x1="10" y1="150" x2="290" y2="150" />
      <line x1="50" y1="50" x2="250" y2="250" /><line x1="250" y1="50" x2="50" y2="250" />
      <line x1="10" y1="100" x2="290" y2="200" /><line x1="10" y1="200" x2="290" y2="100" />
      <line x1="100" y1="10" x2="200" y2="290" /><line x1="200" y1="10" x2="100" y2="290" />
    </g>
    <polygon points="150,30 170,90 140,90" stroke="white" strokeWidth="0.4" fill="none" />
    <polygon points="150,270 170,210 140,210" stroke="white" strokeWidth="0.4" fill="none" />
    <polygon points="30,150 90,130 90,170" stroke="white" strokeWidth="0.4" fill="none" />
    <polygon points="270,150 210,130 210,170" stroke="white" strokeWidth="0.4" fill="none" />
  </svg>
);

const StarRating = ({ n }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} className="w-3 h-3 fill-[#F5A855] text-[#F5A855]" />
    ))}
  </div>
);

const PoojaCard = ({ pooja }) => (
  <div className={cn(
    "group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300",
    "hover:-translate-y-1 hover:shadow-2xl hover:border-[#D4682A]/40",
    pooja.featured ? "border-[#C9952A]/40 bg-gradient-to-b from-white to-[#FDF8F0]" : "border-[#D4682A]/18 bg-white"
  )}>
    <div className="relative h-52 overflow-hidden flex-shrink-0 bg-[#e8d5c0]">
      <img src={pooja.image} alt={pooja.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,10,0,0.6)] to-transparent" />
      <div className="absolute top-3 right-3 bg-white/95 text-[#8B3A0F] font-bold text-xs px-3 py-1 rounded-full font-cinzel shadow">
        {pooja.price}
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/90 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-cinzel">
        <Clock className="w-3 h-3" />{pooja.duration}
      </div>
      {pooja.badge && (
        <div className="absolute bottom-3 right-3 bg-[#D4682A] text-white text-[9px] tracking-[1.5px] uppercase px-3 py-1 rounded-full font-cinzel">
          {pooja.badge}
        </div>
      )}
    </div>

    <div className="flex flex-col flex-1 p-5">
      <h3 className={cn("font-cinzel text-[17px] font-semibold mb-2 leading-snug transition-colors group-hover:text-[#D4682A]", pooja.featured ? "text-[#8B3A0F]" : "text-[#1A0A00]")}>
        {pooja.name}
      </h3>
      <p className="text-[13px] text-[rgba(26,10,0,0.55)] leading-relaxed mb-4">{pooja.description}</p>

      {/* Detail pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-[10px] font-cinzel tracking-wide bg-[rgba(212,104,42,0.08)] text-[#8B3A0F] px-2.5 py-1 rounded-full border border-[rgba(212,104,42,0.15)]">
          <MapPin className="w-3 h-3" />{pooja.location}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-cinzel tracking-wide bg-[rgba(34,120,80,0.07)] text-green-800 px-2.5 py-1 rounded-full border border-[rgba(34,120,80,0.15)]">
          <ShieldCheck className="w-3 h-3" />{pooja.priests}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-cinzel tracking-wide bg-[rgba(201,149,42,0.08)] text-[#7A5A00] px-2.5 py-1 rounded-full border border-[rgba(201,149,42,0.18)]">
          <ScrollText className="w-3 h-3" />{pooja.chants}
        </span>
      </div>

      {/* Meta */}
      <div className="space-y-2.5 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-md bg-[rgba(212,104,42,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Flame className="w-3 h-3 text-[#D4682A]" />
          </div>
          <div>
            <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-[rgba(26,10,0,0.35)] mb-0.5">Purpose</p>
            <p className="text-[12px] text-[#1A0A00]">{pooja.purpose}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-md bg-[rgba(34,120,80,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-3 h-3 text-green-700" />
          </div>
          <div>
            <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-[rgba(26,10,0,0.35)] mb-0.5">Benefits</p>
            <p className="text-[12px] text-[#1A0A00]">{pooja.benefits}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-[rgba(212,104,42,0.12)] pt-4 flex items-center justify-between">
        <Link to={`/pooja/${pooja.id}`} className="font-cinzel text-[10px] tracking-[2px] text-[rgba(26,10,0,0.45)] hover:text-[#D4682A] flex items-center gap-1 transition-colors">
          DETAILS <ChevronRight className="w-3 h-3" />
        </Link>
        <Link to={`/booking/${pooja.id}`}>
          <button className="font-cinzel text-[10px] tracking-[2px] font-semibold bg-[#D4682A] hover:bg-[#8B3A0F] text-white px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const PoojaBooking = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? poojas : poojas.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col animate-in fade-in duration-700 bg-[#FDF6EC] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden py-16 px-6 text-center" style={{ background: "linear-gradient(160deg,#2D0E00 0%,#6B2800 55%,#3D1500 100%)" }}>
        <MandalaSVG />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 border border-[rgba(245,168,85,0.35)] bg-[rgba(245,168,85,0.1)] text-[#F5A855] font-cinzel text-[10px] tracking-[3px] px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A855]" />PUROHITAM<span className="w-1.5 h-1.5 rounded-full bg-[#F5A855]" />
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Sacred <span className="text-[#F5A855]">Vedic</span><br />Rituals & Pooja
          </h1>
          <p className="text-white/60 text-[15px] max-w-lg mx-auto leading-relaxed mb-8">
            Authentic spiritual ceremonies performed by learned Vedic pandits at the holy city of Ujjain — one of the twelve Jyotirlinga sites of India.
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-[rgba(245,168,85,0.3)]" />
            <Star className="w-4 h-4 fill-[#F5A855] text-[#F5A855] opacity-60" />
            <span className="h-px w-12 bg-[rgba(245,168,85,0.3)]" />
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { num: "500+", label: "Rituals Performed" },
              { num: "50+", label: "Learned Pandits" },
              { num: "15+", label: "Years of Tradition" },
              { num: "4.9★", label: "Devotee Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-cinzel text-2xl font-semibold text-[#F5A855]">{s.num}</div>
                <div className="text-[10px] text-white/45 tracking-[2px] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-[rgba(212,104,42,0.12)]">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: ShieldCheck, text: "Verified Vedic Pandits" },
            { icon: MapPin, text: "Performed at Sacred Ujjain" },
            { icon: CalendarCheck, text: "Auspicious Muhurt Guidance" },
            { icon: Star, text: "Prasad Delivered to Your Home" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[rgba(26,10,0,0.6)]">
              <Icon className="w-4 h-4 text-[#D4682A]" />
              <span className="font-cinzel text-[10px] tracking-[1.5px] uppercase">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-16 z-40 bg-white border-b border-[rgba(212,104,42,0.15)] shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={cn(
              "font-cinzel text-[10px] tracking-[2px] px-5 py-2 rounded-full border whitespace-nowrap transition-all duration-200 cursor-pointer",
              activeFilter === cat
                ? "bg-[#D4682A] text-white border-[#D4682A]"
                : "border-[rgba(212,104,42,0.25)] text-[rgba(26,10,0,0.55)] hover:border-[#D4682A] hover:text-[#D4682A]"
            )}>
              {cat === "All" ? "All Rituals" : cat}
            </button>
          ))}
          <div className="flex-1" />
          <p className="font-cinzel text-[10px] tracking-[1px] text-[rgba(26,10,0,0.4)] whitespace-nowrap">
            Showing {filtered.length} ritual{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* POOJA GRID */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pooja) => <PoojaCard key={pooja.id} pooja={pooja} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[rgba(26,10,0,0.35)] font-cinzel tracking-widest text-sm">
            No rituals found in this category.
          </div>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white border-y border-[rgba(212,104,42,0.12)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-cinzel text-[10px] tracking-[3px] text-[#D4682A] mb-3">✦ SIMPLE PROCESS ✦</p>
            <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-[#1A0A00]">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(212,104,42,0.08)] border border-[rgba(212,104,42,0.2)] mb-4 mx-auto group-hover:bg-[#D4682A] transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#D4682A] group-hover:text-white transition-colors duration-300" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#D4682A] text-white font-cinzel text-[9px] flex items-center justify-center font-bold">{step}</span>
                </div>
                <h3 className="font-cinzel text-[15px] font-semibold text-[#1A0A00] mb-2">{title}</h3>
                <p className="text-[13px] text-[rgba(26,10,0,0.55)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-cinzel text-[10px] tracking-[3px] text-[#D4682A] mb-3">✦ DEVOTEE EXPERIENCES ✦</p>
          <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-[#1A0A00]">Blessings Received</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-[rgba(212,104,42,0.15)] p-6 flex flex-col gap-4 hover:shadow-lg hover:border-[#D4682A]/30 transition-all duration-300">
              <StarRating n={t.rating} />
              <p className="text-[13.5px] text-[rgba(26,10,0,0.65)] leading-relaxed italic">"{t.text}"</p>
              <div className="mt-auto pt-4 border-t border-[rgba(212,104,42,0.1)] flex items-center justify-between">
                <div>
                  <p className="font-cinzel text-[13px] font-semibold text-[#1A0A00]">{t.name}</p>
                  <p className="text-[11px] text-[rgba(26,10,0,0.4)] font-cinzel tracking-wide">{t.city}</p>
                </div>
                <span className="text-[10px] font-cinzel tracking-wide bg-[rgba(212,104,42,0.08)] text-[#8B3A0F] px-3 py-1 rounded-full border border-[rgba(212,104,42,0.15)]">
                  {t.pooja}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-2xl px-8 py-14 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg,#2D0E00,#6B2800)" }}>
          <MandalaSVG />
          <div className="relative z-10">
            <p className="font-cinzel text-[10px] tracking-[3px] text-[rgba(245,168,85,0.6)] mb-4">✦ CUSTOM CEREMONY ✦</p>
            <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-white mb-3">Need a Specific Ritual?</h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed mb-8">
              Can't find the pooja you're looking for? Our pandits can design a fully customised ceremony according to your gotra, tradition, and spiritual requirement — performed at the muhurt of your choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="font-cinzel text-[11px] tracking-[3px] border border-[rgba(245,168,85,0.6)] text-[#F5A855] bg-transparent hover:bg-[#D4682A] hover:border-[#D4682A] hover:text-white px-8 py-3 rounded-full transition-all duration-200 cursor-pointer">
                CONSULT A PANDIT
              </button>
              <button className="font-cinzel text-[11px] tracking-[3px] bg-[rgba(245,168,85,0.15)] text-[#F5A855] hover:bg-[rgba(245,168,85,0.25)] px-8 py-3 rounded-full border border-[rgba(245,168,85,0.2)] transition-all duration-200 cursor-pointer">
                CALL US NOW
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PoojaBooking;
