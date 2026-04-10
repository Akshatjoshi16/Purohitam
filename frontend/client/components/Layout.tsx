import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Calendar,
  MapPin,
  Sparkles,
  User,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import axios from "axios";

const navLinks = [
  { name: "Pooja Booking", path: "/pooja-booking", icon: Calendar },
  { name: "Muhurt / Astrology", path: "/muhurt", icon: Sparkles },
  { name: "City Guide", path: "/city-guide", icon: MapPin },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, logout, user } = useAuth();

  const isAdmin = user?.email === "admin@purohitam.com";

  const notifications = [
    "Your Rudrabhishek booking is approved.",
    "Satyanarayan Katha is pending approval.",
  ];

  // ✅ VERIFY FUNCTION
  const handleVerifyClick = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/v1.0/send-otp",
        {},
        { withCredentials: true }
      );

      navigate("/verify-otp");
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-cinzel font-bold text-lg">
              🔱
            </span>
          </div>
          <span className="font-cinzel font-bold text-xl tracking-wider text-accent hidden sm:inline-block">
            PUROHITAM
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}

          {isAuthenticated ? (
            <div className="flex items-center gap-6 ml-6 relative">
              
              {/* 🔥 VERIFY ACCOUNT BUTTON */}
              {user && !user.isVerified && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleVerifyClick}
                  className="text-xs border-yellow-500 text-yellow-600"
                >
                  Verify Account
                </Button>
              )}

              {/* Notification Bell */}
              <div
                className="relative cursor-pointer"
                onClick={() =>
                  setShowNotifications(!showNotifications)
                }
              >
                <Bell className="w-5 h-5 text-primary" />

                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    {notifications.length}
                  </span>
                )}
              </div>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-72 bg-white shadow-lg rounded-xl p-4 border z-50">
                  <p className="font-semibold mb-3">
                    Notifications
                  </p>

                  {notifications.length === 0 ? (
                    <p className="text-sm text-gray-500">
                      No new notifications
                    </p>
                  ) : (
                    <div className="space-y-3 text-sm">
                      {notifications.map((note, index) => (
                        <div
                          key={index}
                          className="p-2 bg-primary/5 rounded-md"
                        >
                          {note}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* My Bookings */}
              <Link
                to="/my-bookings"
                className="text-sm font-medium hover:text-primary"
              >
                My Bookings
              </Link>

              {/* Admin */}
              {isAdmin && (
                <Link
                  to="/admin"
                  className="text-sm font-bold text-primary hover:underline"
                >
                  Admin
                </Link>
              )}

              {/* Greeting */}
              <span className="text-sm font-cinzel text-primary">
                Namaste, {user?.name}
              </span>

              {/* Logout */}
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-xs font-cinzel tracking-widest text-foreground/50"
              >
                LOGOUT
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button
                variant="outline"
                className="ml-4 border-primary text-primary hover:bg-primary/10"
              >
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-b bg-background p-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70"
                )}
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                {/* 🔥 VERIFY BUTTON MOBILE */}
                {user && !user.isVerified && (
                  <Button
                    onClick={() => {
                      handleVerifyClick();
                      setIsOpen(false);
                    }}
                    className="w-full bg-yellow-500 text-white"
                  >
                    Verify Account
                  </Button>
                )}

                <Link
                  to="/my-bookings"
                  onClick={() => setIsOpen(false)}
                  className="text-primary font-medium"
                >
                  My Bookings
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="text-primary font-bold"
                  >
                    Admin Dashboard
                  </Link>
                )}

                <Button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
export const Footer = () => (
  <footer className="border-t bg-muted/30 py-12 text-center">
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} PUROHITAM. Divine Service Platform.
    </p>
  </footer>
);

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};