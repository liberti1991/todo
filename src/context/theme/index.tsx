import { createContext, useContext, useState } from "react";

import { IChildren } from "../loading/interfacesLoading";
import { dark, light } from "./colors";
import { ITheme, IThemeContext } from "./interfacesTheme";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: IChildren) => {
  const [theme, themeSet] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem("@MyTask:theme");
    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });

  const toggleTheme = (title: string) => {
    if (title === "dark") {
      themeSet(light);
      localStorage.setItem("@MyTask:theme", JSON.stringify(light));
    } else {
      themeSet(dark);
      localStorage.setItem("@MyTask:theme", JSON.stringify(dark));
    }
  };

  return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
};

function UseTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, UseTheme };
