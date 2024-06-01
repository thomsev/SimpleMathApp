import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import Modal from "react-native-modal";
import { resetProgress } from "../slices/progressionSlice";

export default function AppProgressBar() {
  const { goal, progress } = useSelector(
    (state: RootState) => state.progression
  );
  const progressPercent = goal ? progress / goal : 0;
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (progressPercent >= 1) {
      setModalVisible(true);
    }
  }, [progressPercent]);

  const handleCloseModal = () => {
    setModalVisible(false);
    dispatch(resetProgress()); // Optionally reset progress after showing the message
  };

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
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.congratsText}>Congratulations!</Text>
          <Text style={styles.congratsMessage}>You've reached your goal!</Text>
          <Button title="Close" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: "100%",
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 60, // Adjust to be above the bottom tab navigator
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  congratsText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  congratsMessage: {
    fontSize: 18,
    marginVertical: 10,
  },
});
