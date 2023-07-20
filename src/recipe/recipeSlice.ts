import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../domain/types";
import { createRecipe } from "../domain/recipe";

const recipes: Recipe[] = [
  createRecipe({
    roastery: "Kaffa Roastery",
    coffee: [
      {
        name: "Sweet & Funky Colombia",
        weight: 12,
      },
    ],
    grinder: "Comandante C40 MK4",
    grindSize: 13,
    waterWeight: 200,
    waterTemperature: 90,
    grade: 2,
    commentsTaste:
      "Hiukan kirpeämpää kuin ylempi, johtunee pienemmästä grindista\nHieman vetistä ja kovaa mut maku ihan jees",
    comments: "Ei-Preheat",
    steps: [
      {
        startTimeSeconds: 0,
        duration: 45,
        water: 200,
        actionDescription: null,
      },
      {
        startTimeSeconds: 45,
        duration: 45,
        water: 0,
        actionDescription: "Pyöräytä",
      },
      {
        startTimeSeconds: 90,
        duration: 30,
        water: 0,
        actionDescription: "Paina",
      },
    ],
    totalTimeSeconds: 120,
  }),
];

export type RecipesState = Recipe[];

const initialState: RecipesState = recipes;

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    clearRecipes: (state) => {
      state = [];
    },
  },
});

export default recipeSlice.reducer;
