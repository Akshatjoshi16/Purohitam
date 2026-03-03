import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, Sun, Moon, Clock, ChevronRight, Info, Users } from "lucide-react";

const Muhurt = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-accent text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 spiritual-pattern opacity-10" />
        <div className="container relative z-10 text-center px-4">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium tracking-widest uppercase">
            Vedic Astrology & Time
          </div>
          <h1 className="text-4xl md:text-7xl font-cinzel font-bold mb-6">Muhurt & Astrology</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto italic font-playfair">
            "Timing is everything. Align your actions with the cosmic vibrations of the universe."
          </p>
        </div>
      </section>

      {/* Daily Panchang Section */}
      <section className="py-20 container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">Daily Panchang</h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
                <p className="text-lg text-foreground/60">
                  Stay updated with the daily Vedic calendar. Ujjain, being the city of the Tropic of Cancer, has deep astronomical significance.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Tithi", value: "Ekadashi", icon: Moon },
                  { label: "Nakshatra", value: "Rohini", icon: Sparkles },
                  { label: "Yog", value: "Siddhi", icon: Sun },
                  { label: "Karan", value: "Bav", icon: Clock },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent/50">{item.label}</p>
                      <p className="text-sm font-bold text-accent">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-cinzel font-bold text-accent mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" /> Today's Auspicious Times
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-primary/10">
                      <span className="text-sm font-medium text-foreground/70 font-cinzel tracking-widest uppercase">Abhijit Muhurt</span>
                      <span className="text-sm font-bold text-primary">11:45 AM - 12:35 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-primary/10">
                      <span className="text-sm font-medium text-foreground/70 font-cinzel tracking-widest uppercase">Amrit Kaal</span>
                      <span className="text-sm font-bold text-primary">04:20 PM - 05:50 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-medium text-foreground/70 font-cinzel tracking-widest uppercase text-red-500">Rahu Kaal (Avoid)</span>
                      <span className="text-sm font-bold text-red-500">01:30 PM - 03:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-border">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="h-20 w-20 bg-accent rounded-full flex items-center justify-center glow-gold mb-4">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-cinzel font-bold text-accent uppercase tracking-widest">Personal Horoscope</h3>
                  <p className="text-sm text-foreground/60 italic">
                    Get detailed insights into your life, career, and relationships based on your birth chart.
                  </p>
                  <div className="w-full space-y-4 pt-6 border-t border-border">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-sm font-cinzel tracking-widest glow-saffron rounded-xl">
                      CONSULT ASTROLOGER
                    </Button>
                    <p className="text-[10px] text-foreground/40 font-cinzel tracking-widest uppercase">
                      STARTING FROM ₹501 PER SESSION
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent">Our Astrology Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-foreground/60 max-w-2xl mx-auto">
              We offer a variety of specialized astrology services tailored to your specific needs and questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kundali Matching", desc: "Ensure marital harmony with traditional Guna Milan and deep chart analysis.", icon: Users },
              { title: "Career Guidance", desc: "Find the right path and timing for your business or job transitions.", icon: ChevronRight },
              { title: "Property Muhurt", desc: "Auspicious timing for buying or entering a new home (Griha Pravesh).", icon: Calendar },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-md hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-accent mb-4 group-hover:text-primary transition-colors uppercase tracking-widest">{service.title}</h3>
                <p className="text-sm text-foreground/70 mb-8 leading-relaxed italic">{service.desc}</p>
                <Button variant="ghost" className="p-0 h-auto font-cinzel tracking-widest text-xs hover:text-primary gap-2">
                  LEARN MORE <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Muhurt;
