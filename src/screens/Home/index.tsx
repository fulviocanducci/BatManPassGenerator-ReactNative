import React from "react";
import { View, Text } from "react-native";
import Styles from "./Style";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={Styles.container}>
      <Text>Home Works</Text>
      <StatusBar style="auto" />
    </View>
  );
}
