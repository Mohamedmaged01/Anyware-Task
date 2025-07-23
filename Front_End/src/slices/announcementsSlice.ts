import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Announcement } from "../types";

interface AnnouncementsState {
  announcements: Announcement[];
  isLoading: boolean;
}

const initialState: AnnouncementsState = {
  announcements: [],
  isLoading: false,
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    setAnnouncements(state, action: PayloadAction<Announcement[]>) {
      state.announcements = action.payload;
    },
    setAnnouncementsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setAnnouncements, setAnnouncementsLoading } =
  announcementsSlice.actions;
export default announcementsSlice.reducer;
