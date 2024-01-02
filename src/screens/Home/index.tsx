import React from "react";
import { View, Text } from "react-native";
import Styles from "./Style";
import { StatusBar } from "expo-status-bar";
import { BatButton, BatLogo, BatTextInput } from "../../components";
import { usePass } from "../../hooks";

export default function Home() {
  return (
    <View style={Styles.appContainer}>
      <View style={Styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={Styles.inputContainer}>
        <BatTextInput />
        <BatButton />
      </View>
      <View></View>
      <StatusBar style="light" />
    </View>
  );
}
