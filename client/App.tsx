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

import { AuthProvider, useAuth } from "./hooks/use-auth";

// ADMIN
import AdminDashboard from "./admin/AdminDashboard";
import AdminBookings from "./admin/AdminBookings";

const queryClient = new QueryClient();

/* -------------------- AUTH GUARD -------------------- */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return <>{children}</>;
};

/* -------------------- USER ROUTES -------------------- */
const UserRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/pooja-booking" element={<PoojaBooking />} />
      <Route path="/booking/:id" element={<BookingForm />} />
      <Route path="/muhurt" element={<Muhurt />} />
      <Route path="/city-guide" element={<CityGuide />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

/* -------------------- ADMIN ROUTES -------------------- */
const AdminRoutes = () => (
  <ProtectedRoute>
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
    </Routes>
  </ProtectedRoute>
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
          <AdminRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;