import { createContext, useContext, useState } from "react";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { HomePage } from "../pages/HomePage";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: () => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  logout: () => {},
  isLoading: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (): Promise<boolean> => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({ id: "1", username: "maged" });
      setIsLoading(false);
    }, 300);
    return true;
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export function requireAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return function AuthenticatedComponent(props: P) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (!user) {
      return <HomePage />;
    }
    return <Component {...props} />;
  };
}
