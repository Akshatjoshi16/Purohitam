import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "@/services/api";

type User = {
  name: string;
  email: string;
  isVerified: boolean;
};

type AuthContextType = {
  user: User | null;
  loginUser: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  updateUser:(data: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile()
      .then((data) => {
        if (data) {
          setUser({
            name: data.name,
            email: data.email,
            isVerified:data.isVerified,
          });
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const loginUser = (userData: User) => {
    setUser(userData);
  };

  const updateUser=(updatedData:Partial<User>)=>{
    setUser((prev)=>prev?{ ...prev, ...updatedData }: prev);
  };

  const logout = async () => {
    await fetch("http://localhost:8080/api/v1.0/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        logout,
        isAuthenticated: !!user,
        loading,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;