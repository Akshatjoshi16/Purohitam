// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Calendar,
//   MapPin,
//   User,
//   ChevronLeft,
//   CreditCard,
//   ShieldCheck,
// } from "lucide-react";
// import { toast } from "sonner";

// const poojas = [
//   { id: 1, name: "Mahamrityunjay Jaap", price: "₹5,100" },
//   { id: 2, name: "Kalsarp Dosh Nivaran", price: "₹3,500" },
//   { id: 3, name: "Grah Shanti Pooja", price: "₹4,200" },
//   { id: 4, name: "Rudra Abhishek", price: "₹2,100" },
//   { id: 5, name: "Vastu Pujan", price: "₹21,000" },
// ];

// const locationOptions: Record<string, string[]> = {
//   "Mahamrityunjay Jaap": ["Mahakal Mandir Parisar", "Custom Location"],
//   "Rudra Abhishek": [
//     "Mahakal Mandir",
//     "Kshipra Ghat",
//     "Mangalnath Mandir",
//     "Custom Location",
//   ],
//   "Kalsarp Dosh Nivaran": ["Ram Ghat", "Kshipra Ghat"],
//   "Grah Shanti Pooja": ["Custom Location"],
//   "Vastu Pujan": ["Custom Location"],
// };

// const poojaDetails: Record<string, any> = {
//   "Mahamrityunjay Jaap": {
//     en: "Mahamrityunjay Jaap is a powerful Vedic chant dedicated to Lord Shiva for health, protection, and longevity.",
//     hi: "महामृत्युंजय जाप भगवान शिव को समर्पित एक अत्यंत शक्तिशाली वैदिक मंत्र अनुष्ठान है, जो आरोग्य, आयु वृद्धि और रक्षा हेतु किया जाता है।",
//     benefits:
//       "Removes fear, illness, and negative influences while bringing divine protection and healing.",
//     myth:
//       "According to scriptures, this mantra saved Sage Markandeya from death when he was protected by Lord Shiva.",
//   },

//   "Rudra Abhishek": {
//     en: "Rudra Abhishek is the sacred bathing ritual of Lord Shiva performed with holy substances like milk, honey, and water.",
//     hi: "रुद्राभिषेक भगवान शिव का पवित्र अभिषेक अनुष्ठान है, जिसमें दुग्ध, जल, मधु आदि से शिवलिंग का स्नान कराया जाता है।",
//     benefits:
//       "Removes obstacles, grants wishes, and brings prosperity and spiritual peace.",
//     myth:
//       "Performing Rudrabhishek at Jyotirlinga sites like Mahakal is believed to grant immense spiritual merit.",
//   },

//   "Kalsarp Dosh Nivaran": {
//     en: "Kalsarp Dosh Nivaran is performed to neutralize planetary imbalance caused by Rahu and Ketu alignment in horoscope.",
//     hi: "कालसर्प दोष निवारण राहु-केतु की विशेष ग्रह स्थिति से उत्पन्न दोष को शांत करने हेतु किया जाने वाला वैदिक अनुष्ठान है।",
//     benefits:
//       "Reduces life obstacles, career stagnation, and recurring hardships.",
//     myth:
//       "Performing this ritual on sacred river banks like Kshipra is believed to reduce karmic burdens.",
//   },

//   "Grah Shanti Pooja": {
//     en: "Grah Shanti Pooja harmonizes planetary influences in one’s horoscope for peace and stability.",
//     hi: "ग्रह शांति पूजा जन्म कुंडली में ग्रहों के अशुभ प्रभाव को शांत कर जीवन में शांति और संतुलन लाने हेतु की जाती है।",
//     benefits:
//       "Brings mental peace, family harmony, and success in life.",
//     myth:
//       "Vedic astrology traditions recommend Grah Shanti before major life events for divine alignment.",
//   },

//   "Vastu Pujan": {
//     en: "Vastu Pujan sanctifies a new home or building and aligns it with cosmic energies for prosperity.",
//     hi: "वास्तु पूजन नए घर या भवन को शुद्ध कर सकारात्मक ऊर्जा और समृद्धि के लिए किया जाने वाला पवित्र अनुष्ठान है।",
//     benefits:
//       "Ensures harmony, prosperity, and protection in the dwelling.",
//     myth:
//       "Ancient Vastu scriptures describe Vastu Purush as the guardian of the home invoked through this ritual.",
//   },
// };

// const BookingForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const getToken = () => {
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     return user?.token;
//   };


// useEffect(() => {
//     const token = getToken();

//     if (!token) {
//       toast.error("Please login to book a pooja");
//       navigate("/auth");
//     }
//   }, [navigate]);

//   const pooja = poojas.find((p) => p.id === Number(id)) || poojas[0];

//   const locations = locationOptions[pooja.name];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     location: locations[0],
//     customLocation: "",
//     instructions: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const token = getToken();

//     if(!token){
//       toast.error("Please login first");
//       navigate("/auth");
//       return;
//     }

//   const finalLocation =
//     formData.location === "Custom Location"
//       ? formData.customLocation
//       : formData.location;

//   try {
//     const response = await fetch("http://localhost:8080/api/bookings", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         ...formData,
//         location: finalLocation,
//         pooja: pooja.name,
//       }),
//     });

//     if (response.ok) {
//       toast.success("Booking Request Sent!", {
//         description: `Your request for ${pooja.name} on ${formData.date} has been received.`,
//       });

//       setTimeout(() => navigate("/"), 2000);
//     } else {
//       toast.error("Booking Failed", {
//         description: "Please try again.",
//       });
//     }
//   } catch (error) {
//     toast.error("Error", {
//       description: "Something went wrong.",
//     });
//   }
// };


//   return (
//     <div className="flex flex-col pb-20">
//       <div className="container px-4 py-12 max-w-4xl mx-auto">
//         <Link
//           to="/pooja-booking"
//           className="inline-flex items-center text-primary font-cinzel text-sm tracking-widest mb-8"
//         >
//           <ChevronLeft className="w-4 h-4 mr-2" /> BACK TO RITUALS
//         </Link>

//         {/* PAGE TITLE */}
//         <div className="mb-10">
//           <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-accent mb-3">
//             Complete Your Booking
//           </h1>
//           <p className="text-lg text-foreground/60">
//             You are booking{" "}
//             <span className="text-primary font-bold">{pooja.name}</span> in
//             Ujjain.
//           </p>
//         </div>

//         {/* POOJA DETAILS */}
//         <div className="mb-12 bg-orange-50 border border-orange-200 rounded-2xl p-8">
//           <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-orange-700 mb-4">
//             {pooja.name}
//           </h2>

//           <p className="text-gray-700 mb-3">
//             {poojaDetails[pooja.name].en}
//           </p>

//           <p className="text-gray-800 font-medium mb-6">
//             {poojaDetails[pooja.name].hi}
//           </p>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white p-5 rounded-xl border">
//               <h4 className="font-cinzel font-bold text-orange-600 mb-2">
//                 Benefits
//               </h4>
//               <p className="text-sm text-gray-700">
//                 {poojaDetails[pooja.name].benefits}
//               </p>
//             </div>

//             <div className="bg-white p-5 rounded-xl border">
//               <h4 className="font-cinzel font-bold text-orange-600 mb-2">
//                 Spiritual Significance
//               </h4>
//               <p className="text-sm text-gray-700">
//                 {poojaDetails[pooja.name].myth}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FORM + SUMMARY */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* FORM */}
//           <div className="lg:col-span-2">
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border"
//             >
//               {/* DEVOTEE */}
//               <div>
//                 <h3 className="font-cinzel font-bold text-xl mb-6 flex items-center gap-2">
//                   <User className="w-5 h-5 text-primary" />
//                   Devotee Information
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//                   <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                   <Input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//                 </div>
//               </div>

//               {/* RITUAL */}
//               <div className="pt-6 border-t">
//                 <h3 className="font-cinzel font-bold text-xl mb-6 flex items-center gap-2">
//                   <Calendar className="w-5 h-5 text-primary" />
//                   Ritual Details
//                 </h3>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input type="date" name="date" value={formData.date} onChange={handleChange} required />

//                   <div>
//                     <select
//                       name="time"
//                       value={formData.time}
//                       onChange={handleChange}
//                       required
//                       className="w-full h-10 rounded-md border px-3"
//                     >
//                       <option value="">Select Time Slot</option>
//                       <option>Early Morning (4–8 AM)</option>
//                       <option>Morning (8–12 PM)</option>
//                       <option>Afternoon (12–4 PM)</option>
//                       <option>Evening (4–8 PM)</option>
//                     </select>

//                     <p className="text-xs text-muted-foreground mt-2">
//                       Note: In crowded temple areas, timing may adjust slightly
//                       according to priest availability and temple schedule.
//                     </p>
//                   </div>
//                 </div>

//                 {/* LOCATION */}
//                 <div className="mt-6">
//                   <label className="text-sm font-medium mb-2 block">
//                     Ritual Location
//                   </label>

//                   <select
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     className="w-full h-10 rounded-md border px-3"
//                   >
//                     {locations.map((loc) => (
//                       <option key={loc}>{loc}</option>
//                     ))}
//                   </select>

//                   {formData.location === "Custom Location" && (
//                     <Input
//                       name="customLocation"
//                       placeholder="Enter address / home / temple"
//                       value={formData.customLocation}
//                       onChange={handleChange}
//                       className="mt-3"
//                       required
//                     />
//                   )}
//                 </div>

//                 <Textarea
//                   name="instructions"
//                   placeholder="Gotra / special requirements"
//                   value={formData.instructions}
//                   onChange={handleChange}
//                   className="mt-6"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-cinzel"
//               >
//                 CONFIRM BOOKING REQUEST
//               </Button>

//               <p className="text-xs text-center text-muted-foreground">
//                 No payment required now. Our admin will contact you.
//               </p>
//             </form>
//           </div>

//           {/* SUMMARY */}
//           <div>
//             <div className="bg-accent text-white p-8 rounded-2xl shadow-xl">
//               <h3 className="font-cinzel font-bold text-xl mb-6">
//                 Booking Summary
//               </h3>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between">
//                   <span>Ritual</span>
//                   <span>{pooja.name}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Price</span>
//                   <span>{pooja.price}</span>
//                 </div>
//               </div>

//               <div className="border-t pt-4 flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span>{pooja.price}</span>
//               </div>

//               <div className="mt-6 text-xs space-y-2 text-white/70">
//                 <div className="flex gap-2">
//                   <ShieldCheck className="w-4 h-4" />
//                   Verified Ujjain priests only
//                 </div>
//                 <div className="flex gap-2">
//                   <CreditCard className="w-4 h-4" />
//                   Pay after confirmation
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  CreditCard,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

const poojas = [
  { id: 1, name: "Mahamrityunjay Jaap", price: "₹5,100" },
  { id: 2, name: "Kalsarp Dosh Nivaran", price: "₹3,500" },
  { id: 3, name: "Grah Shanti Pooja", price: "₹4,200" },
  { id: 4, name: "Rudra Abhishek", price: "₹2,100" },
  { id: 5, name: "Vastu Pujan", price: "₹21,000" },
];

const locationOptions: Record<string, string[]> = {
  "Mahamrityunjay Jaap": ["Mahakal Mandir Parisar", "Custom Location"],
  "Rudra Abhishek": [
    "Mahakal Mandir",
    "Kshipra Ghat",
    "Mangalnath Mandir",
    "Custom Location",
  ],
  "Kalsarp Dosh Nivaran": ["Ram Ghat", "Kshipra Ghat"],
  "Grah Shanti Pooja": ["Custom Location"],
  "Vastu Pujan": ["Custom Location"],
};

const poojaDetails: Record<string, any> = {
  "Mahamrityunjay Jaap": {
    en: "Mahamrityunjay Jaap is a powerful Vedic chant dedicated to Lord Shiva for health, protection, and longevity.",
    hi: "महामृत्युंजय जाप भगवान शिव को समर्पित एक अत्यंत शक्तिशाली वैदिक मंत्र अनुष्ठान है, जो आरोग्य, आयु वृद्धि और रक्षा हेतु किया जाता है।",
    benefits:
      "Removes fear, illness, and negative influences while bringing divine protection and healing.",
    myth: "According to scriptures, this mantra saved Sage Markandeya from death when he was protected by Lord Shiva.",
  },
  "Rudra Abhishek": {
    en: "Rudra Abhishek is the sacred bathing ritual of Lord Shiva performed with holy substances like milk, honey, and water.",
    hi: "रुद्राभिषेक भगवान शिव का पवित्र अभिषेक अनुष्ठान है, जिसमें दुग्ध, जल, मधु आदि से शिवलिंग का स्नान कराया जाता है।",
    benefits:
      "Removes obstacles, grants wishes, and brings prosperity and spiritual peace.",
    myth: "Performing Rudrabhishek at Jyotirlinga sites like Mahakal is believed to grant immense spiritual merit.",
  },
  "Kalsarp Dosh Nivaran": {
    en: "Kalsarp Dosh Nivaran is performed to neutralize planetary imbalance caused by Rahu and Ketu alignment in horoscope.",
    hi: "कालसर्प दोष निवारण राहु-केतु की विशेष ग्रह स्थिति से उत्पन्न दोष को शांत करने हेतु किया जाने वाला वैदिक अनुष्ठान है।",
    benefits: "Reduces life obstacles, career stagnation, and recurring hardships.",
    myth: "Performing this ritual on sacred river banks like Kshipra is believed to reduce karmic burdens.",
  },
  "Grah Shanti Pooja": {
    en: "Grah Shanti Pooja harmonizes planetary influences in one's horoscope for peace and stability.",
    hi: "ग्रह शांति पूजा जन्म कुंडली में ग्रहों के अशुभ प्रभाव को शांत कर जीवन में शांति और संतुलन लाने हेतु की जाती है।",
    benefits: "Brings mental peace, family harmony, and success in life.",
    myth: "Vedic astrology traditions recommend Grah Shanti before major life events for divine alignment.",
  },
  "Vastu Pujan": {
    en: "Vastu Pujan sanctifies a new home or building and aligns it with cosmic energies for prosperity.",
    hi: "वास्तु पूजन नए घर या भवन को शुद्ध कर सकारात्मक ऊर्जा और समृद्धि के लिए किया जाने वाला पवित्र अनुष्ठान है।",
    benefits: "Ensures harmony, prosperity, and protection in the dwelling.",
    myth: "Ancient Vastu scriptures describe Vastu Purush as the guardian of the home invoked through this ritual.",
  },
};

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Use the auth hook — DO NOT read localStorage, your backend uses cookies
  const { isAuthenticated, loading } = useAuth();

  const pooja = poojas.find((p) => p.id === Number(id)) || poojas[0];
  const locations = locationOptions[pooja.name];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: locations[0],
    customLocation: "",
    instructions: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Double-check auth at submit time using the hook, not localStorage
    if (!isAuthenticated) {
      toast.error("Please login to book a pooja");
      navigate("/auth");
      return;
    }

    const finalLocation =
      formData.location === "Custom Location"
        ? formData.customLocation
        : formData.location;

    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ✅ No Authorization header needed — cookie is sent automatically
        },
        credentials: "include", // 🔥 This sends the session cookie to Spring Boot
        body: JSON.stringify({
          ...formData,
          location: finalLocation,
          pooja: pooja.name,
        }),
      });

      if (response.ok) {
        toast.success("Booking Request Sent!", {
          description: `Your request for ${pooja.name} on ${formData.date} has been received.`,
        });
        setTimeout(() => navigate("/my-bookings"), 2000);
      } else {
        toast.error("Booking Failed", { description: "Please try again." });
      }
    } catch (error) {
      toast.error("Error", { description: "Something went wrong." });
    }
  };

  // ✅ Show spinner while auth state is being fetched from backend
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground font-cinzel tracking-widest">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // ✅ If not authenticated after loading, redirect (ProtectedRoute handles this
  //    but this is a safe fallback in case component is used elsewhere)
  if (!isAuthenticated) {
    navigate("/auth", { replace: true });
    return null;
  }

  return (
    <div className="flex flex-col pb-20">
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <Link
          to="/pooja-booking"
          className="inline-flex items-center text-primary font-cinzel text-sm tracking-widest mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> BACK TO RITUALS
        </Link>

        {/* PAGE TITLE */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-accent mb-3">
            Complete Your Booking
          </h1>
          <p className="text-lg text-foreground/60">
            You are booking{" "}
            <span className="text-primary font-bold">{pooja.name}</span> in
            Ujjain.
          </p>
        </div>

        {/* POOJA DETAILS */}
        <div className="mb-12 bg-orange-50 border border-orange-200 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-orange-700 mb-4">
            {pooja.name}
          </h2>
          <p className="text-gray-700 mb-3">{poojaDetails[pooja.name].en}</p>
          <p className="text-gray-800 font-medium mb-6">
            {poojaDetails[pooja.name].hi}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border">
              <h4 className="font-cinzel font-bold text-orange-600 mb-2">
                Benefits
              </h4>
              <p className="text-sm text-gray-700">
                {poojaDetails[pooja.name].benefits}
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border">
              <h4 className="font-cinzel font-bold text-orange-600 mb-2">
                Spiritual Significance
              </h4>
              <p className="text-sm text-gray-700">
                {poojaDetails[pooja.name].myth}
              </p>
            </div>
          </div>
        </div>

        {/* FORM + SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border"
            >
              {/* DEVOTEE */}
              <div>
                <h3 className="font-cinzel font-bold text-xl mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Devotee Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* RITUAL DETAILS */}
              <div className="pt-6 border-t">
                <h3 className="font-cinzel font-bold text-xl mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Ritual Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full h-10 rounded-md border px-3"
                    >
                      <option value="">Select Time Slot</option>
                      <option>Early Morning (4–8 AM)</option>
                      <option>Morning (8–12 PM)</option>
                      <option>Afternoon (12–4 PM)</option>
                      <option>Evening (4–8 PM)</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-2">
                      Note: In crowded temple areas, timing may adjust slightly
                      according to priest availability and temple schedule.
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="mt-6">
                  <label className="text-sm font-medium mb-2 block">
                    Ritual Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border px-3"
                  >
                    {locations.map((loc) => (
                      <option key={loc}>{loc}</option>
                    ))}
                  </select>
                  {formData.location === "Custom Location" && (
                    <Input
                      name="customLocation"
                      placeholder="Enter address / home / temple"
                      value={formData.customLocation}
                      onChange={handleChange}
                      className="mt-3"
                      required
                    />
                  )}
                </div>

                <Textarea
                  name="instructions"
                  placeholder="Gotra / special requirements"
                  value={formData.instructions}
                  onChange={handleChange}
                  className="mt-6"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-cinzel"
              >
                CONFIRM BOOKING REQUEST
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                No payment required now. Our admin will contact you.
              </p>
            </form>
          </div>

          {/* SUMMARY */}
          <div>
            <div className="bg-accent text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-cinzel font-bold text-xl mb-6">
                Booking Summary
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Ritual</span>
                  <span>{pooja.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>{pooja.price}</span>
                </div>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{pooja.price}</span>
              </div>
              <div className="mt-6 text-xs space-y-2 text-white/70">
                <div className="flex gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Ujjain priests only
                </div>
                <div className="flex gap-2">
                  <CreditCard className="w-4 h-4" />
                  Pay after confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;