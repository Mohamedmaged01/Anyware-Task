import { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";
import { AuthActionButton } from "../ui/AuthActionButton";
import { ApiService } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";

function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await login(credentials.username, credentials.password);
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err: any) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-200 rounded-2xl mb-4">
          <LogIn className="w-8 h-8 text-blue-700" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-700">
          Sign in to continue your learning journey
        </p>
      </div>
      <div className="space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black"
          />
        </div>
        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}
        <AuthActionButton
          icon={LogIn}
          onClick={handleLogin}
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </AuthActionButton>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-blue-100"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-blue-400">or</span>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={onSwitch}
          className="text-black bg-white font-medium hover:underline transition-colors duration-200"
        >
          Don't have an account? <span className="font-semibold">Sign up</span>
        </button>
      </div>
    </div>
  );
}

function SignupForm({ onSwitch }: { onSwitch: () => void }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSignup = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await ApiService.signup(credentials.username, credentials.password);
      const success = await login(credentials.username, credentials.password);
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Signup succeeded but login failed. Please try logging in.");
      }
    } catch (err: any) {
      setError("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-200 rounded-2xl mb-4">
          <UserPlus className="w-8 h-8 text-blue-700" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Join Coligo</h2>
        <p className="text-gray-700">
          Create your account and start learning today
        </p>
      </div>
      <div className="space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">
            Username
          </label>
          <input
            type="text"
            placeholder="Choose a username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 block">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a secure password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black"
          />
        </div>
        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}
        <AuthActionButton
          icon={UserPlus}
          onClick={handleSignup}
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </AuthActionButton>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-blue-100"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-blue-400">or</span>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={onSwitch}
          className="text-blue-700 bg-white font-medium hover:underline transition-colors duration-200"
        >
          Already have an account?{" "}
          <span className="font-semibold">Sign in</span>
        </button>
      </div>
    </div>
  );
}

export function AuthFormSection({
  showLogin,
  setShowLogin,
}: {
  showLogin: boolean;
  setShowLogin: (v: boolean) => void;
}) {
  return (
    <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
      <div className="w-full max-w-md">
        {showLogin ? (
          <LoginForm onSwitch={() => setShowLogin(false)} />
        ) : (
          <SignupForm onSwitch={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
}
