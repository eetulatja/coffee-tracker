import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Recipe } from "./src/domain/types";
import { createRecipe } from "./src/domain/recipe";

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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tähän tulee kahvihommia</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
