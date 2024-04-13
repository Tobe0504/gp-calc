"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type ThemeContextValues = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextValues);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  // States
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
