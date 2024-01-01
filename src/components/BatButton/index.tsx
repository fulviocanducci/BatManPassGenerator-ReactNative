import React from "react";
import { Button, View, Text, Pressable } from "react-native";

import { styles } from "./Styles";

export default function BatButton() {
  return (
    <>
      <Pressable style={styles.button} onPress={() => console.log("Pressable Ok")}>
        <Text style={styles.text}>Generador</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => console.log("Pressable Ok")}>
        <Text style={styles.text}> Cópiar</Text>
      </Pressable>
    </>
  );
}
