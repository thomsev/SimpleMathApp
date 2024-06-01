import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native"; // Ensure StyleSheet is imported
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import ProgressionScreen from "./screens/ProgressionScreen";
import SetGoalScreen from "./screens/SetGoalScreen";
import GoalsScreen from "./screens/GoalsScreen";
import { Ionicons } from "@expo/vector-icons";
import AppProgressBar from "./components/ProgressBar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Progression") {
                  iconName = focused ? "stats-chart" : "stats-chart-outline";
                } else if (route.name === "Set Goals") {
                  iconName = focused ? "create" : "create-outline";
                } else if (route.name === "Goals") {
                  iconName = focused ? "list" : "list-outline";
                }

                return (
                  <Ionicons name={iconName as any} size={size} color={color} />
                );
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Progression" component={ProgressionScreen} />
            <Tab.Screen name="Set Goals" component={SetGoalScreen} />
            <Tab.Screen name="Goals" component={GoalsScreen} />
          </Tab.Navigator>
          <AppProgressBar />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
