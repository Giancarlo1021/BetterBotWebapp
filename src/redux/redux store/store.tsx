// store.ts

import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../slices/settingSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    // other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
