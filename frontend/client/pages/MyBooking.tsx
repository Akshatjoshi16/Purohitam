import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  ScrollText,
  X,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Hourglass,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";
import { getMyBookings, cancelBooking, BookingResponse, BookingStatus } from "@/services/api";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

// ─── Status config ────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  BookingStatus,
  { label: string; color: string; bg: string; border: string; icon: React.ElementType }
> = {
  PENDING: {
    label: "Pending",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: Hourglass,
  },
  CONFIRMED: {
    label: "Confirmed",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: CheckCircle2,
  },
  COMPLETED: {
    label: "Completed",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: Trophy,
  },
  CANCELLED: {
    label: "Cancelled",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    icon: X,
  },
};

// ─── Status badge ─────────────────────────────────────────────────

const StatusBadge = ({ status }: { status: BookingStatus }) => {
  const cfg = STATUS_CONFIG[status];
  const Icon = cfg.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10px] font-cinzel tracking-[1.5px] uppercase px-3 py-1 rounded-full border font-semibold",
        cfg.color,
        cfg.bg,
        cfg.border
      )}
    >
      <Icon className="w-3 h-3" />
      {cfg.label}
    </span>
  );
};

// ─── Empty state ──────────────────────────────────────────────────

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <div className="w-20 h-20 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-6">
      <ScrollText className="w-8 h-8 text-orange-300" />
    </div>
    <h3 className="font-cinzel text-xl font-bold text-stone-700 mb-2">
      No Bookings Yet
    </h3>
    <p className="text-stone-400 text-sm max-w-xs leading-relaxed mb-8">
      You haven't booked any poojas yet. Begin your spiritual journey with a
      sacred ritual at Ujjain.
    </p>
    <Link to="/pooja-booking">
      <button className="font-cinzel text-[11px] tracking-[2.5px] uppercase bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-all">
        BOOK YOUR FIRST POOJA
      </button>
    </Link>
  </div>
);

// ─── Booking card ─────────────────────────────────────────────────

const BookingCard = ({
  booking,
  onCancel,
  cancelling,
}: {
  booking: BookingResponse;
  onCancel: (id: number) => void;
  cancelling: number | null;
}) => {
  const [expanded, setExpanded] = useState(false);

  const formattedDate = new Date(booking.ritualDate + "T00:00:00").toLocaleDateString(
    "en-IN",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  const formattedCreated = new Date(booking.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={cn(
        "group bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
        booking.status === "CANCELLED"
          ? "border-stone-200 opacity-70"
          : "border-[rgba(212,104,42,0.2)] hover:border-[#D4682A]/40 hover:shadow-lg"
      )}
    >
      {/* Top accent line */}
      <div
        className={cn(
          "h-[3px] w-full",
          booking.status === "PENDING" && "bg-gradient-to-r from-amber-400 to-amber-300",
          booking.status === "CONFIRMED" && "bg-gradient-to-r from-emerald-500 to-emerald-400",
          booking.status === "COMPLETED" && "bg-gradient-to-r from-blue-500 to-blue-400",
          booking.status === "CANCELLED" && "bg-stone-200"
        )}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-orange-400 text-xs">🔱</span>
              <h3 className="font-cinzel font-bold text-[17px] text-[#1A0A00] truncate">
                {booking.poojaName}
              </h3>
            </div>
            <p className="text-[11px] text-stone-400 font-cinzel tracking-widest">
              Booked on {formattedCreated} · #{booking.id}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <StatusBadge status={booking.status} />
            <span className="font-cinzel font-bold text-[#D4682A] text-sm">
              {booking.poojaPrice}
            </span>
          </div>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-full">
            <Calendar className="w-3 h-3 text-orange-400" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-full">
            <Clock className="w-3 h-3 text-orange-400" />
            {booking.timeSlot}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-full">
            <MapPin className="w-3 h-3 text-orange-400" />
            {booking.location}
          </span>
        </div>

        {/* Admin notes — show when present */}
        {booking.adminNotes && (
          <div className="mb-5 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
            <p className="text-[10px] font-cinzel tracking-[2px] uppercase text-orange-600 mb-1">
              ✦ Message from Admin
            </p>
            <p className="text-sm text-stone-700 leading-relaxed">
              {booking.adminNotes}
            </p>
          </div>
        )}

        {/* Expandable details */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            expanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="border-t border-stone-100 pt-4 mb-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-stone-400 mb-1">
                Devotee Name
              </p>
              <p className="text-sm text-stone-700">{booking.devoteeName}</p>
            </div>
            <div>
              <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-stone-400 mb-1">
                Phone
              </p>
              <p className="text-sm text-stone-700">{booking.devoteePhone}</p>
            </div>
            <div>
              <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-stone-400 mb-1">
                Email
              </p>
              <p className="text-sm text-stone-700 truncate">{booking.devoteeEmail}</p>
            </div>
            {booking.specialInstructions && (
              <div>
                <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-stone-400 mb-1">
                  Instructions
                </p>
                <p className="text-sm text-stone-700">{booking.specialInstructions}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-cinzel text-[10px] tracking-[2px] uppercase text-stone-400 hover:text-orange-600 flex items-center gap-1 transition-colors"
          >
            {expanded ? "HIDE DETAILS" : "VIEW DETAILS"}
            <ChevronRight
              className={cn(
                "w-3 h-3 transition-transform duration-200",
                expanded && "rotate-90"
              )}
            />
          </button>

          {booking.status === "PENDING" && (
            <button
              onClick={() => onCancel(booking.id)}
              disabled={cancelling === booking.id}
              className="font-cinzel text-[10px] tracking-[2px] uppercase text-red-500 hover:text-red-700 border border-red-200 hover:border-red-400 px-4 py-1.5 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              {cancelling === booking.id ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <X className="w-3 h-3" />
              )}
              CANCEL
            </button>
          )}

          {booking.status === "CONFIRMED" && (
            <span className="font-cinzel text-[10px] tracking-[2px] text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              PANDIT WILL CONTACT YOU
            </span>
          )}

          {booking.status === "COMPLETED" && (
            <span className="font-cinzel text-[10px] tracking-[2px] text-blue-500 flex items-center gap-1">
              <Trophy className="w-3 h-3" />
              JAY MAHAKAL 🙏
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Filter tabs ──────────────────────────────────────────────────

const FILTERS: { label: string; value: BookingStatus | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Cancelled", value: "CANCELLED" },
];

// ─── Main component ───────────────────────────────────────────────

const MyBookings = () => {
  const { user } = useAuth();

  const [bookings, setBookings] = useState<BookingResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<BookingStatus | "ALL">("ALL");
  const [cancelling, setCancelling] = useState<number | null>(null);

  // ── Fetch bookings on mount ──────────────────────────────────
  useEffect(() => {
    setLoading(true);
    getMyBookings()
      .then(setBookings)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // ── Cancel handler ───────────────────────────────────────────
  const handleCancel = async (id: number) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    setCancelling(id);
    try {
      const updated = await cancelBooking(id);
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? updated : b))
      );
      toast.success("Booking cancelled.", {
        description: "We're sorry to see you cancel. Book again anytime.",
      });
    } catch (err: any) {
      toast.error("Could not cancel", { description: err.message });
    } finally {
      setCancelling(null);
    }
  };

  // ── Filtered list ────────────────────────────────────────────
  const filtered =
    filter === "ALL" ? bookings : bookings.filter((b) => b.status === filter);

  // ── Status counts for filter tabs ───────────────────────────
  const counts = bookings.reduce(
    (acc, b) => {
      acc[b.status] = (acc[b.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="min-h-screen bg-[#FDF6EC]">

      {/* ── HERO HEADER ──────────────────────────────────── */}
      <div
        className="relative overflow-hidden py-14 px-6 text-center"
        style={{
          background: "linear-gradient(160deg,#2D0E00 0%,#6B2800 60%,#3D1500 100%)",
        }}
      >
        {/* Mandala watermark */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.05] pointer-events-none"
          viewBox="0 0 300 300"
          fill="none"
        >
          {[130, 100, 70, 40].map((r) => (
            <circle key={r} cx="150" cy="150" r={r} stroke="white" strokeWidth="0.6" />
          ))}
          {[0, 45, 90, 135].map((a) => (
            <line
              key={a}
              x1="150" y1="20" x2="150" y2="280"
              stroke="white" strokeWidth="0.4"
              transform={`rotate(${a} 150 150)`}
            />
          ))}
        </svg>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 border border-[rgba(245,168,85,0.35)] bg-[rgba(245,168,85,0.1)] text-[#F5A855] font-cinzel text-[10px] tracking-[3px] px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A855] animate-pulse" />
            MY BOOKINGS
          </div>

          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-2">
            Your Sacred <span className="text-[#F5A855]">Journey</span>
          </h1>

          <p className="text-white/50 text-sm max-w-md mx-auto">
            Namaste, <span className="text-[#F5A855]/80">{user?.name}</span>. Track
            and manage all your pooja bookings from here.
          </p>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="container max-w-4xl mx-auto px-4 py-10">

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-10 h-10 border-4 border-[#D4682A] border-t-transparent rounded-full animate-spin" />
            <p className="font-cinzel text-[11px] tracking-[3px] text-stone-400 uppercase">
              Loading your bookings...
            </p>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <AlertCircle className="w-10 h-10 text-red-400" />
            <p className="font-cinzel text-lg font-bold text-stone-700">
              Failed to load bookings
            </p>
            <p className="text-stone-400 text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 font-cinzel text-[10px] tracking-[2px] uppercase border border-orange-300 text-orange-600 px-6 py-2 rounded-full hover:bg-orange-50 transition-all"
            >
              TRY AGAIN
            </button>
          </div>
        )}

        {/* Main content */}
        {!loading && !error && (
          <>
            {/* Stats strip */}
            {bookings.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {(["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"] as BookingStatus[]).map(
                  (s) => {
                    const cfg = STATUS_CONFIG[s];
                    const Icon = cfg.icon;
                    return (
                      <div
                        key={s}
                        className={cn(
                          "rounded-xl border p-4 text-center cursor-pointer transition-all",
                          cfg.bg,
                          cfg.border,
                          filter === s && "ring-2 ring-offset-1 ring-orange-400"
                        )}
                        onClick={() => setFilter(filter === s ? "ALL" : s)}
                      >
                        <Icon className={cn("w-5 h-5 mx-auto mb-1", cfg.color)} />
                        <p className={cn("font-cinzel font-bold text-xl", cfg.color)}>
                          {counts[s] || 0}
                        </p>
                        <p className={cn("text-[9px] font-cinzel tracking-[1.5px] uppercase", cfg.color)}>
                          {cfg.label}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            )}

            {/* Filter tabs */}
            {bookings.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
                {FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={cn(
                      "font-cinzel text-[10px] tracking-[2px] uppercase px-4 py-2 rounded-full border whitespace-nowrap transition-all",
                      filter === f.value
                        ? "bg-[#D4682A] text-white border-[#D4682A]"
                        : "border-[rgba(212,104,42,0.25)] text-stone-500 hover:border-[#D4682A] hover:text-[#D4682A]"
                    )}
                  >
                    {f.label}
                    {f.value !== "ALL" && counts[f.value] !== undefined && (
                      <span className="ml-1.5 opacity-70">({counts[f.value]})</span>
                    )}
                    {f.value === "ALL" && (
                      <span className="ml-1.5 opacity-70">({bookings.length})</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Empty state */}
            {bookings.length === 0 && <EmptyState />}

            {/* Filtered empty */}
            {bookings.length > 0 && filtered.length === 0 && (
              <div className="text-center py-16 text-stone-400 font-cinzel tracking-widest text-sm">
                No {filter.toLowerCase()} bookings found.
              </div>
            )}

            {/* Booking cards */}
            <div className="space-y-4">
              {filtered.map((booking, i) => (
                <div
                  key={booking.id}
                  style={{
                    animationDelay: `${i * 60}ms`,
                    animation: "fadeUp 0.5s ease both",
                  }}
                >
                  <BookingCard
                    booking={booking}
                    onCancel={handleCancel}
                    cancelling={cancelling}
                  />
                </div>
              ))}
            </div>

            {/* Book more CTA */}
            {bookings.length > 0 && (
              <div className="mt-10 text-center">
                <Link to="/pooja-booking">
                  <button className="font-cinzel text-[11px] tracking-[2.5px] uppercase border border-[#D4682A]/40 text-[#D4682A] hover:bg-[#D4682A] hover:text-white px-8 py-3 rounded-full transition-all duration-200 flex items-center gap-2 mx-auto">
                    BOOK ANOTHER POOJA
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default MyBookings;