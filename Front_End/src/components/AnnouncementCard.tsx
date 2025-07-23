import { Card } from "../ui/Card";
import { Megaphone, GraduationCap, FileText, Calendar } from "lucide-react";

export function AnnouncementCard({
  icon,
  title,
  content,
  author,
  date,
  className = "",
}: {
  icon?: React.ReactNode;
  title: string;
  content: string;
  author: string;
  date: string;
  className?: string;
}) {
  return (
    <Card className={`flex items-start gap-3 p-4 ${className}`}>
      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{content}</p>
        <p className="text-xs text-gray-500">By {author}</p>
      </div>
    </Card>
  );
}

const getIcon = (type: string) => {
  switch (type) {
    case "quiz":
      return <GraduationCap className="w-5 h-5" />;
    case "assignment":
      return <FileText className="w-5 h-5" />;
    case "event":
      return <Calendar className="w-5 h-5" />;
    default:
      return <Megaphone className="w-5 h-5" />;
  }
};

export function AnnouncementCardWithType({
  announcement,
  className = "",
}: {
  announcement: {
    type: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
  };
  className?: string;
}) {
  return (
    <AnnouncementCard
      icon={getIcon(announcement.type)}
      title={announcement.title}
      content={announcement.content}
      author={announcement.author}
      date={new Date(announcement.createdAt).toLocaleDateString()}
      className={className}
    />
  );
}
