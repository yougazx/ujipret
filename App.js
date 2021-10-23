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

import Menu from "./src/Menu";
import VirtualRoom from "./src/VirtualRoom";
import ImageRoom from "./src/ImageRoom";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <View>
      <Text>Hello :*</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
