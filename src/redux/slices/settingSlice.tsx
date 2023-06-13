// slices/settingSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  difficulty: string;
  traits: string[];
}

const initialState: SettingsState = {
  difficulty: "beginner",
  traits: [],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    addTrait: (state, action: PayloadAction<string>) => {
      state.traits.push(action.payload);
    },
    removeTrait: (state, action: PayloadAction<string>) => {
      state.traits = state.traits.filter((trait) => trait !== action.payload);
    },
  },
});

export const { setDifficulty, addTrait, removeTrait } = settingsSlice.actions;

export default settingsSlice.reducer;
