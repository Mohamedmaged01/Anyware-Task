import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, requireAuth } from "./auth/AuthContext";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";

const AuthenticatedDashboard = requireAuth(DashboardPage);

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<AuthenticatedDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
