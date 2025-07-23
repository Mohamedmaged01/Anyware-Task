import { useEffect } from "react";
import { LogoInfoSection } from "../components/LogoInfoSection";
import Button from "@mui/material/Button";
import { useAuth } from "../auth/AuthContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const { user, login, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <Button
          variant="outlined"
          size="small"
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => i18n.changeLanguage("ar")}
        >
          AR
        </Button>
        {user ? (
          <Button variant="contained" color="secondary" onClick={logout}>
            {t("logout")}
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={login}>
            {t("login")}
          </Button>
        )}
      </div>
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden backdrop-blur-sm">
        <LogoInfoSection />
      </div>
    </div>
  );
}
