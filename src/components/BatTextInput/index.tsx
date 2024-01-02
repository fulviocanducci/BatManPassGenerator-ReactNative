import React from "react";
import { TextInput } from "react-native";

import { styles } from "./Styles";
import { usePass } from "../../hooks";

export default function BatTextInput() {
  const pass = usePass();
  return <TextInput style={styles.inputer} placeholder="Pass" value={pass}></TextInput>;
}
