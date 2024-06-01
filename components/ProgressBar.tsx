import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AppProgressBar() {
  const { goal, progress } = useSelector(
    (state: RootState) => state.progression
  );
  const progressPercent = goal ? progress / goal : 0;

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={progressPercent}
        width={null}
        color="tomato"
        unfilledColor="#ddd"
        borderWidth={0}
        height={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "100%",
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 60, // Adjust to be above the bottom tab navigator
    zIndex: 1000,
  },
});
