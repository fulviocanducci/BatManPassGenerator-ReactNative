import React from "react";
import { Text, Pressable, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./Styles";
import { useClipboard, useGeneratePass, usePass } from "../../hooks";

export default function BatButton() {
  const pass = usePass();
  const { setGeneratePass } = useGeneratePass();
  const { setClipboard } = useClipboard();
  const handleSetClipboard = () => {
    if (!pass) {
      Alert.alert("Clipboard", "Não foi gerado nenhuma senha.");
    } else {
      setClipboard(!pass ? "" : pass).then((result) => {
        Alert.alert("Clipboard", "Dados copiados para área de transferencia");
      });
    }
  };
  return (
    <>
      <Pressable style={styles.button} onPress={setGeneratePass}>
        <Text style={styles.text}>
          <Icon name="refresh-circle-outline" size={18}></Icon> Gerador
        </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSetClipboard}>
        <Text style={styles.text}>
          <Icon name="clipboard-outline" size={18}></Icon> Cópiar
        </Text>
      </Pressable>
    </>
  );
}
