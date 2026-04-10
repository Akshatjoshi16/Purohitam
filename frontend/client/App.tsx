import "./global.css";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoojaBooking from "./pages/PoojaBooking";
import Muhurt from "./pages/Muhurt";
import CityGuide from "./pages/CityGuide";
import Auth from "./pages/Auth";
import BookingForm from "./pages/BookingForm";
import MyBookings from "./pages/MyBooking";
import VerifyOtp from "./pages/VerifyOtp";


import { AuthProvider, useAuth } from "./hooks/use-auth";

// ADMIN
//import AdminDashboard from "./pages/AdminDashboard";


const queryClient = new QueryClient();

/* -------------------- AUTH GUARD -------------------- */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading, user} = useAuth();

  if (loading) return <div>Loading...</div>; // ✅ ADD THIS

  if (!isAuthenticated) return <Navigate to="/auth" replace />;
   

  return <>{children}</>;
};

/* -------------------- USER ROUTES -------------------- */
const UserRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/verify-otp" element={<VerifyOtp/>}/>
      <Route
  path="/pooja-booking"
  element={
    <ProtectedRoute>
      <PoojaBooking />
    </ProtectedRoute>
  }
/>
      <Route
  path="/booking/:id"
  element={
    <ProtectedRoute>
      <BookingForm />
    </ProtectedRoute>
  }
/>
      <Route path="/muhurt" element={<Muhurt />} />
      <Route path="/city-guide" element={<CityGuide />} />
      <Route path="*" element={<NotFound />} />
      <Route
  // path="/admin"
  // element={
  //   <ProtectedRoute>
  //     <AdminDashboard />
  //   </ProtectedRoute>
  // }
/>
      <Route path="/my-bookings" element={
        <ProtectedRoute><MyBookings/></ProtectedRoute>
      }/>
    </Routes>
  </Layout>
);



/* -------------------- APP -------------------- */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <UserRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;