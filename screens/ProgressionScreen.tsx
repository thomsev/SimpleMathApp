import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ProgressionScreen() {
  const { goal, progress, prize } = useSelector(
    (state: RootState) => state.progression
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progression</Text>
      <Text style={styles.text}>Current Goal: {goal}</Text>
      <Text style={styles.text}>Current Progress: {progress}</Text>
      <Text style={styles.text}>Prize: {prize}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
  },
});
