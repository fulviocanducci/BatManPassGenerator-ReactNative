import React from "react";
import { PassContext } from "../contexts";
import { generatePassService } from "../services";
import * as Clipboard from "expo-clipboard";

export function usePass() {
  const { pass } = React.useContext(PassContext);
  return pass;
}

export function useSetPass() {
  const { setPass } = React.useContext(PassContext);
  return setPass;
}

export function useGeneratePass() {
  const setPass = useSetPass();
  const setGeneratePass = (): void => {
    setPass?.(generatePassService());
  };
  return { setGeneratePass };
}

export function useClipboard() {
  const setClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
  };

  const getClipboard = async () => {
    return await Clipboard.getStringAsync();
  };
  return { setClipboard, getClipboard };
}
