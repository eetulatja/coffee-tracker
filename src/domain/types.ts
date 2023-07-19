export interface Step {
  startTimeSeconds: number;
  endTimeSeconds: number;
  duration: number; // Must be endTime - startTime
  water: number;
  actionDescription: string | null;
}

export interface StepCreate extends Omit<Step, "endTimeSeconds"> {}

export interface Recipe {
  roastery: string;
  coffee: {
    name: string;
    weight: number;
  }[];
  coffeeWeight: number; // Must be the sum of all coffees
  grinder: string;
  grindSize: number;
  waterWeight: number;
  waterTemperature: number;
  grade: number;
  commentsTaste: string;
  comments: string;
  steps: Step[];
  totalTimeSeconds: number;
}

export interface RecipeCreate extends Omit<Recipe, "steps" | "coffeeWeight"> {
  steps: StepCreate[];
}

export interface V60Recipe extends Recipe {
  equipment: "v60";
  model: string;
  filter: string;
}

export interface AeropressRecipe extends Recipe {
  equipment: "aeropress";
}
