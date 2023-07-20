import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import recipeSlice from "../recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
