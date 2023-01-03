import { useState } from "react";

import { UseTheme } from "../../context/theme";

import { ToggleBtn } from "./interfacesToggle";

export const Toggle = () => {
  const { toggleTheme, theme } = UseTheme();

  const [darkTheme, darkThemeSet] = useState(() => (theme.title === "dark" ? true : false));
  const handleChangeTheme = () => {
    darkThemeSet(!darkTheme);

    let Temp: string = "";
    if (darkTheme === true) {
      Temp = "dark";
    } else Temp = "light";

    toggleTheme(Temp);
  };

  return (
    <ToggleBtn>
      <input type="checkbox" id="toggle" onChange={handleChangeTheme} checked={darkTheme} />
      <label htmlFor="toggle" data-label-on="Dark" data-label-off="Light"></label>
    </ToggleBtn>
  );
};
