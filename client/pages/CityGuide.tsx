import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Info, Star, Compass, Clock, ChevronRight, Image as ImageIcon } from "lucide-react";

const landmarks = [
  {
    id: 1,
    name: "Mahakaleshwar Jyotirlinga",
    description: "One of the twelve Jyotirlingas, the Mahakaleshwar temple is famous for its Bhasma Aarti.",
    location: "Ujjain Central",
    importance: "Primary Spiritual Center",
    image: "https://images.pexels.com/photos/18405155/pexels-photo-18405155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Ram Ghat",
    description: "The most ancient bathing ghat in Ujjain, located on the banks of the Shipra river.",
    location: "Shipra River Bank",
    importance: "Holy Rituals & Snan",
    image: "https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Kal Bhairav Temple",
    description: "A unique temple where the deity is offered liquor as part of the ritual offerings.",
    location: "Northern Ujjain",
    importance: "Protector Deity",
    image: "https://images.pexels.com/photos/29329247/pexels-photo-29329247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Harsiddhi Temple",
    description: "One of the 51 Shaktipeeths, famous for its two massive lamp towers (Deep Stambhas).",
    location: "Near Mahakal Temple",
    importance: "Shakti Worship",
    image: "https://images.pexels.com/photos/18405155/pexels-photo-18405155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const CityGuide = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-accent text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 spiritual-pattern opacity-10" />
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium tracking-widest uppercase">
            Spiritual Tourism Guide
          </div>
          <h1 className="text-4xl md:text-7xl font-cinzel font-bold mb-6">Explore Sacred Ujjain</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto italic font-playfair">
            "Walk through the timeless streets where Mahakaal resides and the holy Shipra flows."
          </p>
        </div>
      </section>

      {/* Main Map/Intro Section */}
      <section className="py-20 container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">The City of Mahakaal</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
              <p className="text-lg text-foreground/60 leading-relaxed italic">
                Ujjain, also known as Avantika, is one of the seven sacred cities (Sapta Puri) of India. It hosts the Kumbh Mela (Simhastha) every 12 years and is the center of the world's time-keeping according to ancient Vedic astronomy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Best Time to Visit", desc: "October to March (Pleasant Weather)", icon: Clock },
                { title: "Key Festival", desc: "Kumbh Mela, Mahashivratri", icon: Star },
                { title: "Must Experience", desc: "Bhasma Aarti at Mahakal", icon: Info },
                { title: "Holy River", desc: "Shipra (Purifying Waters)", icon: Compass },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-xs uppercase tracking-widest text-accent mb-1">{item.title}</h4>
                    <p className="text-xs text-foreground/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-white hover:bg-primary/90 px-10 h-14 text-sm font-cinzel tracking-widest glow-saffron transition-all">
              DOWNLOAD PDF GUIDE
            </Button>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-6 duration-500" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src="https://images.pexels.com/photos/18405155/pexels-photo-18405155.jpeg" 
                alt="Ujjain Temple View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white/60 text-xs font-cinzel tracking-widest uppercase mb-2">Aerial View</p>
                <h3 className="text-white text-2xl font-cinzel font-bold">Mahakal Temple Complex</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">Sacred Landmarks</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Explore the most significant temples and spiritual locations in the holy city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {landmarks.map((landmark) => (
              <div key={landmark.id} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-border shadow-md hover:shadow-xl transition-all group">
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-2xl relative">
                  <img 
                    src={landmark.image} 
                    alt={landmark.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold font-cinzel tracking-widest uppercase backdrop-blur-sm">
                    {landmark.importance}
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2 text-primary font-cinzel text-[10px] tracking-[0.2em] uppercase font-bold">
                    <MapPin className="w-3 h-3" /> {landmark.location}
                  </div>
                  <h3 className="text-2xl font-cinzel font-bold text-accent group-hover:text-primary transition-colors uppercase tracking-widest">{landmark.name}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed italic line-clamp-3">"{landmark.description}"</p>
                  <Button variant="ghost" className="p-0 h-auto font-cinzel tracking-widest text-xs hover:text-primary gap-2 mt-4 self-start">
                    READ MORE <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 spiritual-pattern opacity-10" />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">Plan Your Spiritual Journey</h2>
            <p className="text-lg text-white/70 max-w-2xl mb-10 italic font-playfair">
              Whether you are here for a single day or a week-long retreat, we can help you navigate the spiritual landscape of Ujjain efficiently and with devotion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 h-14 text-sm font-cinzel tracking-widest glow-saffron rounded-xl">
                BOOK A GUIDE
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/10 hover:bg-white/20 px-8 h-14 text-sm font-cinzel tracking-widest rounded-xl">
                VIEW ITINERARIES
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center space-y-6">
              <div className="h-16 w-16 bg-primary mx-auto rounded-full flex items-center justify-center glow-saffron">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-cinzel font-bold tracking-widest uppercase">Photo Gallery</h3>
              <p className="text-xs text-white/50 italic">See the divine beauty of Ujjain through our curated gallery.</p>
              <Button variant="link" className="text-primary font-cinzel font-bold text-xs tracking-widest uppercase p-0 h-auto">
                VIEW GALLERY
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityGuide;
