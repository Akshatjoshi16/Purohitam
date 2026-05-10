import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2, XCircle, Clock, Trophy, LayoutDashboard,
  BookOpen, ChevronDown, ChevronUp, Search, RefreshCw,
  Phone, Mail, MapPin, Calendar, Loader2, AlertTriangle,
  Users, TrendingUp, Filter, LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";
import {
  getAllBookings, getBookingStats, updateBookingStatus,
  BookingResponse, BookingStatus,
} from "@/services/api";
import { ADMIN_EMAIL } from "@/App";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────
type StatsData = { pending: number; confirmed: number; completed: number; cancelled: number; total: number; };
type ActiveTab = "overview" | "bookings";
type FilterStatus = "ALL" | BookingStatus;

// ─── Status config ────────────────────────────────────────────────
const STATUS_CFG: Record<BookingStatus, {
  label: string; color: string; bg: string; border: string; dot: string; icon: React.ElementType;
}> = {
  PENDING:   { label: "Pending",   color: "text-amber-400",   bg: "bg-amber-400/10",   border: "border-amber-400/30",   dot: "bg-amber-400",   icon: Clock        },
  CONFIRMED: { label: "Confirmed", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", dot: "bg-emerald-400", icon: CheckCircle2  },
  COMPLETED: { label: "Completed", color: "text-blue-400",    bg: "bg-blue-400/10",    border: "border-blue-400/30",    dot: "bg-blue-400",    icon: Trophy        },
  CANCELLED: { label: "Cancelled", color: "text-red-400",     bg: "bg-red-400/10",     border: "border-red-400/30",     dot: "bg-red-400",     icon: XCircle       },
};

// ─── Status badge ─────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: BookingStatus }) => {
  const cfg = STATUS_CFG[status];
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-cinzel tracking-[1.5px] uppercase border font-semibold",
      cfg.color, cfg.bg, cfg.border
    )}>
      <cfg.icon className="w-3 h-3" />
      {cfg.label}
    </span>
  );
};

// ─── Stat card ────────────────────────────────────────────────────
const StatCard = ({ label, value, icon: Icon, color, border, onClick, active }: {
  label: string; value: number; icon: React.ElementType;
  color: string; border: string; onClick?: () => void; active?: boolean;
}) => (
  <button onClick={onClick} className={cn(
    "w-full text-left p-5 rounded-2xl border transition-all duration-200",
    "bg-white/5 hover:bg-white/8", active ? "ring-2 ring-[#C9952A]/50 " + border : border,
    onClick && "cursor-pointer hover:-translate-y-0.5"
  )}>
    <div className="flex items-start justify-between mb-4">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-white/5")}>
        <Icon className={cn("w-5 h-5", color)} />
      </div>
      {active && <div className="w-2 h-2 rounded-full bg-[#C9952A] animate-pulse" />}
    </div>
    <p className={cn("text-3xl font-cinzel font-bold mb-1", color)}>{value}</p>
    <p className="text-[10px] font-cinzel tracking-[2px] uppercase text-white/40">{label}</p>
  </button>
);

// ─── Action modal ─────────────────────────────────────────────────
const ActionModal = ({ booking, onClose, onConfirm, loading }: {
  booking: BookingResponse;
  onClose: () => void;
  onConfirm: (status: BookingStatus, notes: string) => void;
  loading: boolean;
}) => {
  const [notes, setNotes] = useState(booking.adminNotes || "");
  const [selectedStatus, setSelectedStatus] = useState<BookingStatus | null>(null);

  const actions: { status: BookingStatus; label: string; desc: string; style: string }[] = [
    {
      status: "CONFIRMED",
      label: "✅ Confirm Booking",
      desc: "Devotee gets email with payment instructions.",
      style: "border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10",
    },
    {
      status: "COMPLETED",
      label: "🏆 Mark as Completed",
      desc: "Devotee gets a completion blessing email.",
      style: "border-blue-400/30 text-blue-400 hover:bg-blue-400/10",
    },
    {
      status: "CANCELLED",
      label: "❌ Cancel / Reject",
      desc: "Devotee gets a cancellation email with reason.",
      style: "border-red-400/30 text-red-400 hover:bg-red-400/10",
    },
  ].filter(a => a.status !== booking.status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#140600] border border-[#C9952A]/20 rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#C9952A] via-[#F5C842] to-[#C9952A]" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] font-cinzel tracking-[3px] text-[#C9952A]/40 uppercase mb-1">
                Booking #{booking.id}
              </p>
              <h3 className="font-cinzel text-lg font-bold text-white">{booking.poojaName}</h3>
              <p className="text-sm text-white/40 mt-0.5">{booking.devoteeName}</p>
            </div>
            <StatusBadge status={booking.status} />
          </div>

          {/* Info strip */}
          <div className="grid grid-cols-2 gap-2 mb-5 p-4 bg-white/3 rounded-xl border border-white/5 text-xs text-white/40">
            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-[#C9952A]" />{booking.ritualDate}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-[#C9952A]" />{booking.timeSlot}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C9952A]" /><span className="truncate">{booking.location}</span></span>
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#C9952A]" />{booking.devoteePhone}</span>
          </div>

          {/* Action selector */}
          <p className="text-[10px] font-cinzel tracking-[2px] uppercase text-white/25 mb-3">Select Action</p>
          <div className="space-y-2 mb-5">
            {actions.map((a) => (
              <button
                key={a.status}
                onClick={() => setSelectedStatus(a.status)}
                className={cn(
                  "w-full px-4 py-3 rounded-xl border text-left transition-all",
                  a.style,
                  selectedStatus === a.status && "ring-2 ring-white/20 bg-white/5"
                )}
              >
                <p className="font-cinzel text-[11px] tracking-[1.5px] uppercase">{a.label}</p>
                <p className="text-[10px] opacity-60 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{a.desc}</p>
              </button>
            ))}
          </div>

          {/* Notes */}
          <div className="mb-5">
            <label className="text-[10px] font-cinzel tracking-[2px] uppercase text-white/25 mb-2 block">
              Message to Devotee <span className="text-white/20">(shown in My Bookings + email)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                selectedStatus === "CONFIRMED"
                  ? "e.g. Pandit Sharma will call you the evening before the ritual..."
                  : selectedStatus === "CANCELLED"
                  ? "e.g. The pandit is unavailable on this date. Please rebook..."
                  : "Optional message for the devotee..."
              }
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 placeholder:text-white/15 focus:outline-none focus:border-[#C9952A]/40 resize-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Footer */}
          <div className="flex gap-3">
            <button onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-white/10 text-white/30 font-cinzel text-[10px] tracking-[2px] uppercase hover:bg-white/5 transition-all">
              Cancel
            </button>
            <button
              onClick={() => selectedStatus && onConfirm(selectedStatus, notes)}
              disabled={!selectedStatus || loading}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#C9952A] to-[#E8B84B] disabled:from-white/10 disabled:to-white/10 disabled:text-white/20 text-[#1A0800] font-cinzel font-bold text-[10px] tracking-[2px] uppercase transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Apply Action"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Booking row ──────────────────────────────────────────────────
const BookingRow = ({ booking, onAction }: {
  booking: BookingResponse;
  onAction: (b: BookingResponse) => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const fmtDate = (d: string) => new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const fmtCreated = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short" });

  return (
    <div className="border border-white/8 hover:border-[#C9952A]/20 rounded-xl overflow-hidden bg-white/3 hover:bg-white/5 transition-all duration-200">
      {/* Row */}
      <div className="flex items-center gap-4 px-5 py-4">
        <div className={cn("w-2 h-2 rounded-full flex-shrink-0", STATUS_CFG[booking.status].dot)} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-cinzel font-semibold text-[13px] text-white/90">{booking.poojaName}</span>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="text-[11px] text-white/40 hidden sm:block">{booking.devoteeName}</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-white/30">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{fmtDate(booking.ritualDate)}</span>
            <span className="hidden sm:flex items-center gap-1"><MapPin className="w-3 h-3" /><span className="truncate max-w-[100px]">{booking.location}</span></span>
            <span className="hidden md:block">Booked {fmtCreated(booking.createdAt)}</span>
          </div>
        </div>

        <span className="font-cinzel font-bold text-[#C9952A] text-sm hidden sm:block flex-shrink-0">{booking.poojaPrice}</span>
        <div className="flex-shrink-0"><StatusBadge status={booking.status} /></div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={() => onAction(booking)}
            className="font-cinzel text-[9px] tracking-[2px] uppercase bg-[#C9952A]/10 hover:bg-[#C9952A]/20 border border-[#C9952A]/25 text-[#C9952A] px-3 py-1.5 rounded-full transition-all">
            Manage
          </button>
          <button onClick={() => setExpanded(!expanded)} className="text-white/20 hover:text-white/50 transition-colors p-1">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded */}
      <div className={cn("overflow-hidden transition-all duration-300", expanded ? "max-h-64" : "max-h-0")}>
        <div className="px-5 pb-5 pt-4 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Phone",    val: booking.devoteePhone, icon: Phone },
            { label: "Email",    val: booking.devoteeEmail, icon: Mail  },
            { label: "Time",     val: booking.timeSlot,     icon: Clock },
            { label: "Location", val: booking.location,     icon: MapPin},
          ].map(({ label, val, icon: Icon }) => (
            <div key={label}>
              <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-white/20 mb-1">{label}</p>
              <p className="text-xs text-white/60 flex items-center gap-1 truncate">
                <Icon className="w-3 h-3 text-[#C9952A] flex-shrink-0" />{val}
              </p>
            </div>
          ))}
          {booking.specialInstructions && (
            <div className="col-span-2">
              <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-white/20 mb-1">Special Instructions</p>
              <p className="text-xs text-white/50">{booking.specialInstructions}</p>
            </div>
          )}
          {booking.adminNotes && (
            <div className="col-span-2 md:col-span-4">
              <p className="text-[9px] font-cinzel tracking-[2px] uppercase text-[#C9952A]/40 mb-1">✦ Admin Note</p>
              <p className="text-xs text-[#C9952A]/60 bg-[#C9952A]/5 border border-[#C9952A]/15 rounded-lg px-3 py-2">{booking.adminNotes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
//  AdminDashboard
// ═══════════════════════════════════════════════════════════════════
const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab]         = useState<ActiveTab>("overview");
  const [bookings, setBookings]           = useState<BookingResponse[]>([]);
  const [stats, setStats]                 = useState<StatsData | null>(null);
  const [dataLoading, setDataLoading]     = useState(true);
  const [refreshing, setRefreshing]       = useState(false);
  const [filterStatus, setFilterStatus]   = useState<FilterStatus>("ALL");
  const [search, setSearch]               = useState("");
  const [modalBooking, setModalBooking]   = useState<BookingResponse | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  // ── Load data ────────────────────────────────────────────────────
  const loadData = useCallback(async (silent = false) => {
    if (!silent) setDataLoading(true);
    else setRefreshing(true);
    try {
      const [b, s] = await Promise.all([getAllBookings(), getBookingStats()]);
      setBookings(b);
      setStats(s);
    } catch (err: any) {
      toast.error("Failed to load data", { description: err.message });
    } finally {
      setDataLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  // ── Status update ────────────────────────────────────────────────
  const handleStatusUpdate = async (status: BookingStatus, notes: string) => {
    if (!modalBooking) return;
    setActionLoading(true);
    try {
      const updated = await updateBookingStatus(modalBooking.id, status, notes || undefined);
      setBookings(prev => prev.map(b => b.id === updated.id ? updated : b));
      const s = await getBookingStats();
      setStats(s);
      toast.success(`Booking ${status.toLowerCase()}! Email sent to devotee.`, {
        description: `${modalBooking.poojaName} for ${modalBooking.devoteeName}.`,
      });
      setModalBooking(null);
    } catch (err: any) {
      toast.error("Update failed", { description: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // ── Logout ───────────────────────────────────────────────────────
  const handleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  // ── Filtered list ────────────────────────────────────────────────
  const filtered = bookings
    .filter(b => filterStatus === "ALL" || b.status === filterStatus)
    .filter(b => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        b.devoteeName.toLowerCase().includes(q) ||
        b.poojaName.toLowerCase().includes(q) ||
        b.devoteeEmail.toLowerCase().includes(q) ||
        b.devoteePhone.includes(q)
      );
    });

  const pendingCount = stats?.pending || 0;
  const counts = bookings.reduce((acc, b) => { acc[b.status] = (acc[b.status] || 0) + 1; return acc; }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-[#080200] text-white">
      {/* Grain */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10">

        {/* ── HEADER ──────────────────────────────────────── */}
        <header className="sticky top-0 z-40 border-b border-[#C9952A]/15 bg-[#0D0400]/90 backdrop-blur-xl">
          <div className="container mx-auto px-6 flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔱</span>
              <div className="leading-none">
                <p className="font-cinzel font-bold text-[15px] tracking-[0.2em] text-white">PUROHITAM</p>
                <p className="text-[8px] font-cinzel tracking-[3px] text-[#C9952A]/40 uppercase">Admin Panel</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {pendingCount > 0 && (
                <div className="hidden sm:flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 text-amber-400 px-3 py-1.5 rounded-full">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span className="font-cinzel text-[10px] tracking-[2px]">{pendingCount} PENDING</span>
                </div>
              )}
              <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                <div className="w-7 h-7 rounded-full bg-[#C9952A]/15 border border-[#C9952A]/30 flex items-center justify-center">
                  <span className="text-[#C9952A] font-cinzel font-bold text-xs">A</span>
                </div>
                <button onClick={handleLogout}
                  className="flex items-center gap-1.5 text-[10px] font-cinzel tracking-[2px] uppercase text-white/25 hover:text-red-400 transition-colors">
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">

          {/* ── TABS ────────────────────────────────────────── */}
          <div className="flex items-center gap-1 mb-8 border-b border-white/8">
            {([
              { id: "overview", label: "Overview", icon: LayoutDashboard },
              { id: "bookings", label: "All Bookings", icon: BookOpen },
            ] as { id: ActiveTab; label: string; icon: React.ElementType }[]).map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 font-cinzel text-[11px] tracking-[2px] uppercase border-b-2 transition-all",
                  activeTab === tab.id ? "border-[#C9952A] text-[#F5C842]" : "border-transparent text-white/30 hover:text-white/60"
                )}>
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
                {tab.id === "bookings" && pendingCount > 0 && (
                  <span className="bg-amber-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full">{pendingCount}</span>
                )}
              </button>
            ))}
            <div className="ml-auto mb-1">
              <button onClick={() => loadData(true)} disabled={refreshing}
                className="flex items-center gap-2 text-[10px] font-cinzel tracking-[2px] uppercase text-white/20 hover:text-white/50 border border-white/8 hover:border-white/15 px-4 py-2 rounded-full transition-all">
                <RefreshCw className={cn("w-3 h-3", refreshing && "animate-spin")} />
                Refresh
              </button>
            </div>
          </div>

          {/* ── OVERVIEW ──────────────────────────────────── */}
          {activeTab === "overview" && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>

              {/* Stat cards */}
              {dataLoading ? (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
                  {Array.from({ length: 5 }).map((_, i) => <div key={i} className="h-28 rounded-2xl bg-white/5 animate-pulse border border-white/5" />)}
                </div>
              ) : stats && (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
                  <StatCard label="Total" value={stats.total} icon={Users} color="text-[#F5C842]" border="border-[#C9952A]/20" />
                  <StatCard label="Pending" value={stats.pending} icon={Clock} color="text-amber-400" border="border-amber-400/20"
                    onClick={() => { setActiveTab("bookings"); setFilterStatus("PENDING"); }} active={filterStatus === "PENDING"} />
                  <StatCard label="Confirmed" value={stats.confirmed} icon={CheckCircle2} color="text-emerald-400" border="border-emerald-400/20"
                    onClick={() => { setActiveTab("bookings"); setFilterStatus("CONFIRMED"); }} />
                  <StatCard label="Completed" value={stats.completed} icon={Trophy} color="text-blue-400" border="border-blue-400/20"
                    onClick={() => { setActiveTab("bookings"); setFilterStatus("COMPLETED"); }} />
                  <StatCard label="Cancelled" value={stats.cancelled} icon={XCircle} color="text-red-400" border="border-red-400/20"
                    onClick={() => { setActiveTab("bookings"); setFilterStatus("CANCELLED"); }} />
                </div>
              )}

              {/* Progress bar */}
              {stats && stats.total > 0 && (
                <div className="mb-10 p-6 rounded-2xl border border-white/8 bg-white/3">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[10px] font-cinzel tracking-[3px] uppercase text-[#C9952A]/40 mb-1">✦ Completion Rate</p>
                      <p className="text-2xl font-cinzel font-bold text-white">
                        {Math.round(((stats.confirmed + stats.completed) / stats.total) * 100)}%
                      </p>
                      <p className="text-[10px] text-white/25 mt-0.5" style={{ fontFamily: "Inter,sans-serif" }}>
                        confirmed + completed out of total
                      </p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-[#C9952A]/20" />
                  </div>
                  <div className="flex h-3 rounded-full overflow-hidden gap-px">
                    {[
                      { val: stats.confirmed, color: "bg-emerald-400" },
                      { val: stats.completed, color: "bg-blue-400"    },
                      { val: stats.pending,   color: "bg-amber-400"   },
                      { val: stats.cancelled, color: "bg-red-400"     },
                    ].filter(x => x.val > 0).map((x, i) => (
                      <div key={i} className={cn("transition-all", x.color)} style={{ width: `${(x.val / stats.total) * 100}%` }} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3">
                    {[
                      { label: "Confirmed", color: "bg-emerald-400", val: stats.confirmed },
                      { label: "Completed", color: "bg-blue-400",    val: stats.completed },
                      { label: "Pending",   color: "bg-amber-400",   val: stats.pending   },
                      { label: "Cancelled", color: "bg-red-400",     val: stats.cancelled },
                    ].map(x => (
                      <div key={x.label} className="flex items-center gap-1.5">
                        <div className={cn("w-2 h-2 rounded-full", x.color)} />
                        <span className="text-[10px] text-white/30 font-cinzel">{x.label} ({x.val})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pending — needs attention */}
              {!dataLoading && bookings.filter(b => b.status === "PENDING").length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-cinzel tracking-[3px] uppercase text-[#C9952A]/40">✦ Needs Attention</p>
                    <button onClick={() => { setActiveTab("bookings"); setFilterStatus("PENDING"); }}
                      className="text-[10px] font-cinzel tracking-[2px] uppercase text-[#C9952A]/60 hover:text-[#C9952A] transition-colors">
                      View All →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {bookings.filter(b => b.status === "PENDING").slice(0, 4).map(b => (
                      <BookingRow key={b.id} booking={b} onAction={setModalBooking} />
                    ))}
                  </div>
                </div>
              )}

              {!dataLoading && bookings.length === 0 && (
                <div className="text-center py-24">
                  <p className="text-6xl mb-4">🔱</p>
                  <p className="font-cinzel text-white/20 tracking-widest text-sm">
                    No bookings yet. Dashboard will populate as devotees book poojas.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── ALL BOOKINGS ─────────────────────────────── */}
          {activeTab === "bookings" && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>

              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input type="text" placeholder="Search name, pooja, email, phone..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    className="w-full h-11 pl-11 pr-4 bg-white/5 border border-white/8 rounded-xl text-sm text-white/70 placeholder:text-white/15 focus:outline-none focus:border-[#C9952A]/30"
                    style={{ fontFamily: "Inter,sans-serif" }} />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  <Filter className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />
                  {(["ALL", "PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"] as FilterStatus[]).map(f => (
                    <button key={f} onClick={() => setFilterStatus(f)}
                      className={cn(
                        "font-cinzel text-[9px] tracking-[2px] uppercase px-4 py-2 rounded-full border whitespace-nowrap transition-all",
                        filterStatus === f
                          ? "bg-[#C9952A] text-[#1A0800] border-[#C9952A] font-bold"
                          : "border-white/8 text-white/25 hover:text-white/50 hover:border-white/15"
                      )}>
                      {f === "ALL" ? `All (${bookings.length})` : `${f} (${counts[f] || 0})`}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[10px] font-cinzel tracking-[2px] uppercase text-white/15 mb-4">
                Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                {search && ` for "${search}"`}
              </p>

              {dataLoading && (
                <div className="space-y-3">
                  {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-16 rounded-xl bg-white/5 animate-pulse border border-white/5" />)}
                </div>
              )}

              {!dataLoading && filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="font-cinzel text-white/15 tracking-widest text-sm">
                    {search ? "No bookings match your search." : "No bookings in this category."}
                  </p>
                </div>
              )}

              {!dataLoading && (
                <div className="space-y-3">
                  {filtered.map((b, i) => (
                    <div key={b.id} style={{ animation: `fadeUp 0.3s ease ${i * 30}ms both` }}>
                      <BookingRow booking={b} onAction={setModalBooking} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalBooking && (
        <ActionModal
          booking={modalBooking}
          onClose={() => setModalBooking(null)}
          onConfirm={handleStatusUpdate}
          loading={actionLoading}
        />
      )}

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .no-scrollbar::-webkit-scrollbar { display:none; }
        .no-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
