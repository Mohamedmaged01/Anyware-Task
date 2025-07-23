export interface User {
  id: string;
  username: string;
}

export interface Quiz {
  _id: string;
  title: string;
  questions?: Array<{
    question: string;
    options: string[];
    answer: string;
    _id: string;
  }>;
  semester?: string;
  createdAt?: string;
  course?: string;
  topic?: string;
  dueDate?: string;
  status?: "active" | "completed" | "overdue";
}

export interface Announcement {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  type: "general" | "quiz" | "assignment" | "event";
}
