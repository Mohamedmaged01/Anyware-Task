import { Megaphone } from "lucide-react";
import { AnnouncementCard } from "./AnnouncementCard";
import { ApiService } from "../services/ApiService";
import { useEffect, useState } from "react";
import { Announcement } from "../types";
import { useTranslation } from "react-i18next";

export function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const { t } = useTranslation();
  useEffect(() => {
    ApiService.getAnnouncements().then(setAnnouncements);
  }, []);

  return (
    <div className="lg:col-span-2 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">
          {t("announcements", "Announcements")}
        </h3>
        <button className="text-teal-500 font-medium hover:text-teal-600">
          {t("all", "All")}
        </button>
      </div>

      <div className="space-y-4">
        {announcements.length === 0 && (
          <div className="text-gray-500 text-center">
            {t("no_announcements", "No announcements.")}
          </div>
        )}
        {announcements.slice(0, 4).map((a) => (
          <AnnouncementCard
            key={a._id}
            icon={<Megaphone className="w-5 h-5" />}
            title={a.title}
            content={a.content || ""}
            author={a.author || ""}
            date={a.createdAt ? new Date(a.createdAt).toLocaleDateString() : ""}
          />
        ))}
      </div>
    </div>
  );
}
