// const API_URL = "http://localhost:8080/api/v1.0";

// export const login = async (data: {
//   email: string;
//   password: string;
// }) => {
//   const res = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include", // 🔥 MUST
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) {
//     throw new Error("Invalid email or password");
//   }

//   return res.json();
// };

// export const signup = async (data: {
//   name: string;
//   email: string;
//   password: string;
// }) => {
//   const res = await fetch(`${API_URL}/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include", // 🔥 MUST
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) {
//     throw new Error("Signup failed");
//   }

//   return res.json();
// };

// export const getProfile = async () => {
//   const res = await fetch(`${API_URL}/profile`, {
//     credentials: "include",
//   });
//    if (res.status === 401) {
//     // 🔥 TOKEN EXPIRED
//     console.log("Session expired");
//     return null;
//    }

//   if (!res.ok) return null;

//   return res.json();
// };
const API_URL = "http://localhost:8080/api/v1.0";

// ─────────────────────────────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────────────────────────────

export const login = async (data: { email: string; password: string }) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Invalid email or password");
  return res.json();
};

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Signup failed");
  return res.json();
};

export const getProfile = async () => {
  const res = await fetch(`${API_URL}/profile`, {
    credentials: "include",
  });
  if (res.status === 401) {
    console.log("Session expired");
    return null;
  }
  if (!res.ok) return null;
  return res.json();
};

// ─────────────────────────────────────────────────────────────────
//  BOOKING TYPES
// ─────────────────────────────────────────────────────────────────

export type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";

export interface BookingResponse {
  id: number;
  poojaName: string;
  poojaPrice: string;
  devoteeName: string;
  devoteeEmail: string;
  devoteePhone: string;
  ritualDate: string;       // "YYYY-MM-DD"
  timeSlot: string;
  location: string;
  specialInstructions: string | null;
  status: BookingStatus;
  adminNotes: string | null; // message from admin shown on My Bookings
  createdAt: string;         // ISO datetime
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  date: string;              // "YYYY-MM-DD" — matches LocalDate on backend
  time: string;
  location: string;          // already resolved (never "Custom Location")
  instructions: string;
  pooja: string;             // must match a known pooja name
}

// ─────────────────────────────────────────────────────────────────
//  USER BOOKING ENDPOINTS
// ─────────────────────────────────────────────────────────────────

/** POST /api/v1.0/bookings — submit booking form */
export const createBooking = async (data: BookingRequest): Promise<BookingResponse> => {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",  // JWT cookie sent automatically
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Booking failed. Please try again.");
  }
  return res.json();
};

/** GET /api/v1.0/bookings/my — fetch logged-in user's bookings */
export const getMyBookings = async (): Promise<BookingResponse[]> => {
  const res = await fetch(`${API_URL}/bookings/my`, {
    credentials: "include",
  });
  if (res.status === 401) throw new Error("Please login to view your bookings.");
  if (!res.ok) throw new Error("Failed to fetch bookings.");
  return res.json();
};

/** GET /api/v1.0/bookings/:id — single booking detail */
export const getBookingById = async (id: number): Promise<BookingResponse> => {
  const res = await fetch(`${API_URL}/bookings/${id}`, {
    credentials: "include",
  });
  if (res.status === 404) throw new Error("Booking not found.");
  if (res.status === 403) throw new Error("Access denied.");
  if (!res.ok) throw new Error("Failed to fetch booking.");
  return res.json();
};

/** PATCH /api/v1.0/bookings/:id/cancel — cancel a PENDING booking */
export const cancelBooking = async (id: number): Promise<BookingResponse> => {
  const res = await fetch(`${API_URL}/bookings/${id}/cancel`, {
    method: "PATCH",
    credentials: "include",
  });
  if (res.status === 409) throw new Error("Only pending bookings can be cancelled.");
  if (!res.ok) throw new Error("Failed to cancel booking.");
  return res.json();
};

// ─────────────────────────────────────────────────────────────────
//  ADMIN ENDPOINTS
// ─────────────────────────────────────────────────────────────────

/** GET /api/v1.0/bookings/admin/all — all bookings (admin) */
export const getAllBookings = async (): Promise<BookingResponse[]> => {
  const res = await fetch(`${API_URL}/bookings/admin/all`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch all bookings.");
  return res.json();
};

/** GET /api/v1.0/bookings/admin/filter?status=PENDING */
export const getBookingsByStatus = async (
  status: BookingStatus
): Promise<BookingResponse[]> => {
  const res = await fetch(`${API_URL}/bookings/admin/filter?status=${status}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to filter bookings.");
  return res.json();
};

/** PATCH /api/v1.0/bookings/admin/:id/status — update booking status (admin) */
export const updateBookingStatus = async (
  id: number,
  status: BookingStatus,
  adminNotes?: string
): Promise<BookingResponse> => {
  const res = await fetch(`${API_URL}/bookings/admin/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ status, adminNotes }),
  });
  if (!res.ok) throw new Error("Failed to update booking status.");
  return res.json();
};

/** GET /api/v1.0/bookings/admin/stats — dashboard counts */
export const getBookingStats = async (): Promise<{
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
  total: number;
}> => {
  const res = await fetch(`${API_URL}/bookings/admin/stats`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch stats.");
  return res.json();
};