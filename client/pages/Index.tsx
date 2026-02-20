
import React from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

const featuredPriests = [
  {
    id: 1,
    name: "Pandit Akshat Joshi",
    description:
      "Experienced priest specializing in Mahamrityunjay Jaap and Vedic rituals.",
    expertise: "Vedic Rituals, Mahamrityunjay Jaap",
    experience: "10+ Years",
    image: "/akshatjoshi.jpeg",
  },
  {
    id: 2,
    name: "Pandit Ayush Shukla",
    description:
      "Expert in Astrology and Muhurt calculations with deep knowledge of Shastras.",
    expertise: "Astrology, Muhurt",
    experience: "10+ Years",
    image: "/ayushshukla.jpeg",
  },
  {
    id: 3,
    name: "Pandit Animesh Pal",
    description:
      "Renowned for performing Kalsarp Dosh Nivaran and Grah Shanti poojas.",
    expertise: "Kalsarp Dosh, Grah Shanti",
    experience: "2+ Years",
    image: "/animeshpal.jpeg",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-accent mb-3">
      {children}
    </h2>
    <div className="w-16 h-[2px] bg-orange-400 mx-auto rounded-full" />
  </div>
);

const Index = () => {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/mahakallok.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          {/* Small label */}
          <p className="text-orange-300/90 tracking-[0.25em] text-sm mb-4 font-medium">
            PUROHITAM • UJJAIN
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white leading-tight mb-6">
            Connect with the Divine in
            <span className="block text-orange-400 mt-2">
              Holy Ujjain
            </span>
          </h1>

          {/* Hindi line */}
          <p className="text-lg md:text-2xl text-orange-200/95 mb-3">
            महाकाल की नगरी में वैदिक पूजन सेवाओं का विश्वसनीय मंच
          </p>

          {/* Sanskrit */}
          <p className="text-sm text-orange-300/70 italic mb-10">
            महाकालक्षेत्रे श्रद्धालूनां पुरोहितसेवासेतुः
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pooja-booking">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-14 text-lg font-cinzel tracking-wide shadow-lg"
              >
                BOOK POOJA
              </Button>
            </Link>

            <Link to="/city-guide">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300/50 text-orange-100 bg-black/20 hover:bg-black/30 px-8 h-14 text-lg font-cinzel"
              >
                EXPLORE UJJAIN
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-200/60 text-xs tracking-widest">
          SCROLL
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 container px-4">
        <SectionTitle>Our Spiritual Services</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Pooja Booking",
              desc: "Authentic Vedic rituals performed by learned priests.",
              icon: Calendar,
              path: "/pooja-booking",
              color: "bg-orange-50",
              accentColor: "text-orange-600",
            },
            {
              title: "Muhurt / Astrology",
              desc: "Consult expert astrologers for auspicious timings.",
              icon: Sparkles,
              path: "/muhurt",
              color: "bg-yellow-50",
              accentColor: "text-yellow-600",
            },
            {
              title: "City Guide",
              desc: "Explore sacred landmarks of Ujjain.",
              icon: MapPin,
              path: "/city-guide",
              color: "bg-red-50",
              accentColor: "text-red-600",
            },
          ].map((option, idx) => (
            <Link
              key={idx}
              to={option.path}
              className="group p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div
                className={cn(
                  "p-4 rounded-full mb-6 transition-colors group-hover:bg-orange-500 group-hover:text-white",
                  option.color,
                  option.accentColor
                )}
              >
                <option.icon className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-cinzel font-bold mb-3">
                {option.title}
              </h3>

              <p className="text-foreground/70 mb-6">{option.desc}</p>

              <span className="text-orange-500 font-cinzel tracking-wide flex items-center gap-1">
                LEARN MORE <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PRIESTS */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <SectionTitle>Learned Priests</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPriests.map((priest) => (
              <div
                key={priest.id}
                className="group overflow-hidden rounded-2xl bg-white border shadow-sm hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={priest.image}
                    alt={priest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />

                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold font-cinzel">
                    {priest.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-cinzel font-bold mb-1">
                    {priest.name}
                  </h3>

                  <p className="text-xs text-orange-500 mb-3 uppercase tracking-widest">
                    {priest.expertise}
                  </p>

                  <p className="text-sm text-foreground/70 mb-5 italic">
                    "{priest.description}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <Link to="/pooja-booking">
                      <span className="text-orange-500 text-xs font-cinzel flex items-center gap-1">
                        DETAILS <ChevronRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-white border-y">
        <div className="container px-4">
          <SectionTitle>Why Choose Purohitam</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Verified Priests", desc: "Background checked" },
              { icon: Users, title: "Custom Rituals", desc: "As per tradition" },
              { icon: Clock, title: "Auspicious Timings", desc: "Expert Muhurt" },
              { icon: Star, title: "Divine Experience", desc: "Satisfied devotees" },
            ].map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <badge.icon className="w-6 h-6" />
                </div>

                <h4 className="font-cinzel font-bold text-sm mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* ABOUT PUROHITAM (Hindi) */}
<section className="py-24 bg-orange-50">
  <div className="container px-6 max-w-4xl text-center">
    
    <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-orange-700 mb-4">
      पुरोहितम् क्या है ?
    </h2>

    <div className="w-16 h-[2px] bg-orange-400 mx-auto mb-8 rounded-full" />

    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      पुरोहितम् एक आध्यात्मिक मंच है जो श्रद्धालुओं को उज्जैन की पावन
      परंपराओं से जुड़े अनुभवी पंडितों और वैदिक सेवाओं से जोड़ता है।
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      यहाँ आप पूजा, अनुष्ठान, ज्योतिष परामर्श तथा धार्मिक मार्गदर्शन
      के लिए विश्वसनीय पुरोहितों से सहज बुकिंग कर सकते हैं।
    </p>

    <p className="text-lg text-gray-700 leading-relaxed">
      हमारा उद्देश्य महाकाल की नगरी की सनातन परंपराओं को आधुनिक सुविधा
      के साथ प्रत्येक श्रद्धालु तक पहुँचाना है।
    </p>

    {/* Sanskrit accent */}
    <p className="mt-8 text-orange-600/80 italic">
      श्रद्धा–सेवा–संयोगः
    </p>

  </div>
</section>
    </div>
   
  );
  
};

export default Index;
