import { FileText } from "lucide-react";
import { QuizCard } from "./QuizCard";
import { ApiService } from "../services/ApiService";
import { useEffect } from "react";
import { Quiz } from "../types";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes, setQuizzesLoading } from "../slices/quizzesSlice";
import { RootState } from "../store";

export function QuizzesSection() {
  const dispatch = useDispatch();
  const quizzes = useSelector(
    (state: RootState) => (state.quizzes as any).quizzes
  );
  const isLoading = useSelector(
    (state: RootState) => (state.quizzes as any).isLoading
  );
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(setQuizzesLoading(true));
    ApiService.getQuizzes().then((data) => {
      dispatch(setQuizzes(data));
      dispatch(setQuizzesLoading(false));
    });
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">
          {t("whats_due", "What's due")}
        </h3>
        <button className="text-teal-500 font-medium hover:text-teal-600">
          {t("all", "All")}
        </button>
      </div>

      <div className="space-y-4">
        {isLoading && (
          <div className="text-gray-500 text-center">Loading...</div>
        )}
        {!isLoading && quizzes.length === 0 && (
          <div className="text-gray-500 text-center">
            {t("no_quizzes", "No quizzes due.")}
          </div>
        )}
        {quizzes.slice(0, 3).map((quiz: any) => (
          <QuizCard
            key={quiz._id}
            title={quiz.title}
            course={quiz.semester || quiz.course || ""}
            topic={
              quiz.questions && quiz.questions.length > 0
                ? quiz.questions[0].question
                : quiz.topic || ""
            }
            dueDate={quiz.createdAt || quiz.dueDate || ""}
            status={quiz.status}
            icon={<FileText className="w-5 h-5" />}
          />
        ))}
      </div>
    </div>
  );
}
