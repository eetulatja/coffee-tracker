import { Text } from "react-native";

import { Recipe } from "../domain/types";

interface RecipeProps {
  recipe: Recipe;
}

export default function RecipeView(props: RecipeProps) {
  return (
    <Text>{props.recipe.coffee.map((coffee) => coffee.name).join(", ")}</Text>
  );
}
