import { useState, useEffect } from "react";
import { Sidebar } from "../layout/Sidebar";
import { Header } from "../layout/Header";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { ApiService } from "../services/ApiService";
import { ExamBanner } from "../components/ExamBanner";
import { AnnouncementsSection } from "../components/AnnouncementsSection";
import { QuizzesSection } from "../components/QuizzesSection";
import { useAuth } from "../auth/AuthContext";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

export function DashboardPage() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          ApiService.getQuizzes(),
          ApiService.getAnnouncements(),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1">
        <div className="flex justify-end items-center gap-2 p-4">
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
        </div>
        <Header user={user ?? undefined} onLogout={logout} />
        <main className="p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <ExamBanner />
              <div className="grid lg:grid-cols-3 gap-8">
                <AnnouncementsSection />
                <QuizzesSection />
              </div>
            </div>
          )}

          {activeTab !== "dashboard" && (
            <UnderDevelopment
              tabName={t(
                activeTab,
                activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
              )}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function UnderDevelopment({ tabName }: { tabName: string }) {
  const { t } = useTranslation();
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{tabName}</h2>
      <p className="text-gray-600">
        {t("under_development", "This section is under development.")}
      </p>
    </div>
  );
}
