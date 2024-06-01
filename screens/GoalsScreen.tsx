import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function GoalsScreen() {
  const { goal, progress, prize, image } = useSelector(
    (state: RootState) => state.progression
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Goals</Text>
      <Text style={styles.text}>Goal: {goal}</Text>
      <Text style={styles.text}>Progress: {progress}</Text>
      <Text style={styles.text}>Prize: {prize}</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
