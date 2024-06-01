import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { incrementProgress } from "../slices/progressionSlice";
import MathQuestion from "../components/MathQuestion";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const handleAnswerCorrect = () => {
    dispatch(incrementProgress());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Math App</Text>
      <MathQuestion onCorrectAnswer={handleAnswerCorrect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 60, // Add padding to ensure the progress bar doesn't overlap with the content
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
