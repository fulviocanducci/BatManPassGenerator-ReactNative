import React from "react";

interface IPassContextProps {
  pass: string;
  setPass: React.Dispatch<React.SetStateAction<string>>;
}

const PASSCONTEXTPROPS = { pass: "", setPass: () => {} };

interface IPassProviderProps {
  children: React.ReactNode;
}

export const PassContext = React.createContext<Partial<IPassContextProps>>(PASSCONTEXTPROPS);

export const PassProvider = ({ children }: IPassProviderProps) => {
  const [pass, setPass] = React.useState<string>("");
  return <PassContext.Provider value={{ pass, setPass }}>{children}</PassContext.Provider>;
};
