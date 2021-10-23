/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Whatsapp from "./src/Whatsapp";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Navigator
        screenOptions={{
          title: "Whatsapp"
        }}
        initialRouteName="Whatsapp"
      >
        <Screen name="Whatsapp" component={Whatsapp} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
