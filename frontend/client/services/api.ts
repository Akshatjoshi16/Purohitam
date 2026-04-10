const API_URL = "http://localhost:8080/api/v1.0";

export const login = async (data: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // 🔥 MUST
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Invalid email or password");
  }

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
    credentials: "include", // 🔥 MUST
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Signup failed");
  }

  return res.json();
};

export const getProfile = async () => {
  const res = await fetch(`${API_URL}/profile`, {
    credentials: "include",
  });

  if (!res.ok) return null;

  return res.json();
};