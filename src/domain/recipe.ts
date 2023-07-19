import _ from "lodash";

import { Recipe, RecipeCreate } from "./types";

export function createRecipe(recipeParams: RecipeCreate): Recipe {
  // TODO Validate that steps are consecutive and there are no gaps
  return {
    ...recipeParams,
    coffeeWeight: _.sumBy(recipeParams.coffee, "weight"),
    steps: recipeParams.steps.map((step) => ({
      ...step,
      endTimeSeconds: step.startTimeSeconds + step.duration,
    })),
  };
}
