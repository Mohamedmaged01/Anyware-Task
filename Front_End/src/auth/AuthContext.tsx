import { createContext, useContext } from "react";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { HomePage } from "../pages/HomePage";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  logout as reduxLogout,
} from "../slices/authSlice";
import { RootState } from "../store";

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
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (): Promise<boolean> => {
    dispatch(loginStart());
    setTimeout(() => {
      dispatch(loginSuccess({ id: "1", username: "maged" }));
    }, 300);
    return true;
  };

  const logout = () => {
    dispatch(reduxLogout());
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
