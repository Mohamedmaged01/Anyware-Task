import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quiz } from "../types";

interface QuizzesState {
  quizzes: Quiz[];
  isLoading: boolean;
}

const initialState: QuizzesState = {
  quizzes: [],
  isLoading: false,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes(state, action: PayloadAction<Quiz[]>) {
      state.quizzes = action.payload;
    },
    setQuizzesLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setQuizzes, setQuizzesLoading } = quizzesSlice.actions;
export default quizzesSlice.reducer;
