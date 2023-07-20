import { View } from "react-native";

import { useAppSelector } from "./store/hooks";
import RecipeView from "./recipe/Recipe";

export function Main() {
  const recipes = useAppSelector((state) => state.recipes);

  return (
    <View>
      {recipes.map((recipe) => (
        <RecipeView recipe={recipe} />
      ))}
    </View>
  );
}
