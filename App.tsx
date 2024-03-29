import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./src/store/store";
import { Main } from "./src/Main";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </Provider>
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
