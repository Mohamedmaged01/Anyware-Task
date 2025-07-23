import { Card } from "../ui/Card";

export function QuizCard({
  icon,
  title,
  course,
  topic,
  dueDate,
  status,
  actions,
  className = "",
}: {
  icon?: React.ReactNode;
  title: string;
  course: string;
  topic: string;
  dueDate: string;
  status?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  const isOverdue = new Date(dueDate) < new Date();
  return (
    <Card
      className={`rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">
              {course}: {topic}
            </p>
          </div>
        </div>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            isOverdue
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {isOverdue ? "Overdue" : "Active"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Due {new Date(dueDate).toLocaleDateString()}</span>
        </div>
        {actions}
      </div>
    </Card>
  );
}
