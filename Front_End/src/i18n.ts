import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      logout: "Logout",
      dashboard: "Dashboard",
      schedule: "Schedule",
      courses: "Courses",
      gradebook: "Gradebook",
      performance: "Performance",
      announcements: "Announcements",
      under_development: "This section is under development.",
      whats_due: "What's due",
      all: "All",
      no_quizzes: "No quizzes due.",
      no_announcements: "No announcements.",
    },
  },
  ar: {
    translation: {
      welcome: "مرحبا",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج",
      dashboard: "لوحة التحكم",
      schedule: "الجدول",
      courses: "الدورات",
      gradebook: "دفتر الدرجات",
      performance: "الأداء",
      announcements: "الإعلانات",
      under_development: "هذا القسم قيد التطوير.",
      whats_due: "المهام المستحقة",
      all: "الكل",
      no_quizzes: "لا توجد اختبارات مستحقة.",
      no_announcements: "لا توجد إعلانات.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
