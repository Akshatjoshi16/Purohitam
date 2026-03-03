import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Star, Heart, CheckCircle2, ChevronRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const poojas = [
  {
    id: 1,
    name: "Mahamrityunjay Jaap",
    description: "A powerful Vedic chant dedicated to Lord Shiva for health and longevity.",
    duration: "2-4 Hours",
    purpose: "Health, Protection, Peace",
    benefits: "Heals physical and mental ailments, removes fear of death.",
    price: "₹5,100",
    image: "/mahamrit.jpg"
  },
  {
    id: 2,
    name: "Kalsarp Dosh Nivaran",
    description: "A special ritual performed in Ujjain to mitigate the effects of Rahu and Ketu.",
    duration: "3 Hours",
    purpose: "Success, Obstacle Removal",
    benefits: "Removes hurdles in career and marriage, brings stability.",
    price: "₹3,500",
    image: "/kalsarp.jpeg"
  },
  {
    id: 3,
    name: "Grah Shanti Pooja",
    description: "Ritual to balance the planetary influences in your horoscope.",
    duration: "4 Hours",
    purpose: "Prosperity, Balance",
    benefits: "Brings harmony at home and workplace, improves luck.",
    price: "₹4,200",
    image: "/grahshanti.jpg"
  },
  {
    id: 4,
    name: "Rudra Abhishek",
    description: "Ritual bathing of Lord Shiva's Lingam with sacred liquids while chanting mantras.",
    duration: "1.5 Hours",
    purpose: "Blessings, Purification",
    benefits: "Fulfills desires, purifies soul, brings divine grace.",
    price: "₹2,100",
    image: "/rudraabhishek.jpg"
  },
  {
    id: 5,
    name: "Vastu pujan",
    description: "sacred ritual performed to bring happiness, peace, prosperity, and remove negative energy from a new home.",
    duration: "7 Hours",
    purpose: "Blessings, Peace, Happiness",
    benefits: "Removal of Vastu defects, happiness and prosperity in the family, freedom from conflicts and health benefits.",
    price: "₹21,000",
    image: "/vastu.jpg"
  }
];

const PoojaBooking = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-accent text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 spiritual-pattern opacity-10" />
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-4">Vedic Pooja Booking</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose from a wide range of authentic Vedic rituals performed by learned priests at sacred locations in Ujjain.
          </p>
        </div>
      </section>

      {/* Filter & Search Placeholder */}
      <section className="py-8 border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="container px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {["All", "Popular", "Dosh Nivaran", "Shanti Pooja", "Abhishek"].map((cat) => (
              <Button key={cat} variant="outline" className={cn("rounded-full border-primary/20 text-xs font-cinzel tracking-widest h-9 px-6 whitespace-nowrap", cat === "All" && "bg-primary text-white border-primary")}>
                {cat}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="font-cinzel tracking-widest text-xs gap-2">
              <Filter className="w-4 h-4" /> FILTERS
            </Button>
            <div className="h-4 w-[1px] bg-border mx-2" />
            <p className="text-xs text-foreground/40 font-cinzel uppercase tracking-tighter">
              Showing {poojas.length} rituals
            </p>
          </div>
        </div>
      </section>

      {/* Pooja Grid */}
      <section className="py-16 container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poojas.map((pooja) => (
            <div key={pooja.id} className="group glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:border-primary/50 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pooja.image} 
                  alt={pooja.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold font-cinzel shadow-lg">
                  {pooja.price}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {pooja.duration}
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-cinzel font-bold mb-3 group-hover:text-primary transition-colors">{pooja.name}</h3>
                <p className="text-sm text-foreground/60 mb-6 line-clamp-2">
                  {pooja.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent/50 mb-1">Purpose</p>
                      <p className="text-sm text-foreground/80">{pooja.purpose}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent/50 mb-1">Benefits</p>
                      <p className="text-sm text-foreground/80">{pooja.benefits}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t flex items-center justify-between">
                  <Button variant="ghost" className="p-0 h-auto font-cinzel tracking-widest text-xs hover:text-primary">
                    VIEW DETAILS <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                  <Link to={`/booking/${pooja.id}`}>
                    <Button className="bg-primary text-white hover:bg-primary/90 px-6 font-cinzel tracking-widest glow-saffron transition-all hover:scale-105">
                      BOOK NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Ritual Request */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-6 shadow-sm border border-border">
            <Star className="w-6 h-6 text-primary fill-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent mb-6">Need a Specific Ritual?</h2>
          <p className="text-lg text-foreground/60 mb-10">
            If you're looking for a specific pooja or have special requirements, our experienced priests can help design a custom ritual according to your traditions.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 h-14 text-lg font-cinzel tracking-widest transition-all">
            CONSULT A PANDIT
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PoojaBooking;
