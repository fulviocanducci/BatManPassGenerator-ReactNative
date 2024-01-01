import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./Styles";
import Logo from "../../../assets/bat-logo.png";

export default function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Batman Password Generator</Text>
      <Image style={styles.image} source={Logo} />
    </View>
  );
}
