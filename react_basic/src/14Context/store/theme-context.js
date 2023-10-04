import { createContext, useState } from "react";

const ThemeContext = createContext({
  language: "",
  theme: "",
  setLanguage: () => {},
  setTheme: () => {},
});

export function ThemeProvider(children) {
  const [language, setLanguage] = useState("ko");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={(language, setLanguage, theme, setTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
