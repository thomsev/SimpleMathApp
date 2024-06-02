import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import { setGoal, setPrize, setImage } from "../slices/progressionSlice";
import * as ImagePicker from "expo-image-picker";

export default function SetGoalScreen() {
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState("");
  const [newPrize, setNewPrize] = useState("");
  const [image, setImageState] = useState<string | null>(null);

  const handleSetGoal = () => {
    dispatch(setGoal(Number(newGoal)));
    dispatch(setPrize(newPrize));
    dispatch(setImage(image));
  };

  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImageState(pickerResult.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nytt mål</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new goal"
        value={newGoal}
        onChangeText={setNewGoal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter prize"
        value={newPrize}
        onChangeText={setNewPrize}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Set Goal" onPress={handleSetGoal} />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
});
