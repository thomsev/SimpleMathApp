import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProgressionState {
  goal: number;
  progress: number;
  prize: string;
  image: string | null; // Add image field
}

const initialState: ProgressionState = {
  goal: 10,
  progress: 0,
  prize: "",
  image: null, // Initialize image field
};

const progressionSlice = createSlice({
  name: "progression",
  initialState,
  reducers: {
    setGoal(state, action: PayloadAction<number>) {
      state.goal = action.payload;
    },
    incrementProgress(state) {
      state.progress += 1;
    },
    setPrize(state, action: PayloadAction<string>) {
      state.prize = action.payload;
    },
    resetProgress(state) {
      state.progress = 0;
    },
    setImage(state, action: PayloadAction<string | null>) {
      state.image = action.payload;
    },
  },
});

export const { setGoal, incrementProgress, setPrize, resetProgress, setImage } =
  progressionSlice.actions;

export default progressionSlice.reducer;

export const selectProgression = (state: RootState) => state.progression;
