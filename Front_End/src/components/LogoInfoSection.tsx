import { BookOpen, Sparkles, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LogoInfoSection() {
  const { t } = useTranslation();
  const features = [
    { icon: BookOpen, text: t("feature_courses", "Interactive courses") },
    { icon: Users, text: t("feature_groups", "Study groups") },
    {
      icon: Sparkles,
      text: t("feature_personalized", "Personalized learning"),
    },
  ];
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-8 lg:p-16 relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      </div>
      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl backdrop-blur-sm mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Coligo</h1>
          <p className="text-xl text-blue-100 max-w-md">
            {t(
              "welcome_message",
              "Transform your learning experience with our modern, interactive platform"
            )}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-100">
            {t("why_choose", "Why choose Coligo?")}
          </h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-blue-100"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-4 h-4" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
