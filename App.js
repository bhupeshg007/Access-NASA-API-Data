// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IdProps from "./src/Screens/HomeScreen";
import SubmitScreen from "./src/Screens/SubmitScreen";
import RandomAsteroidScreen from "./src/Screens/RandomAsteroidScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={IdProps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Submit"
          component={SubmitScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RandomAsteroid"
          component={RandomAsteroidScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
