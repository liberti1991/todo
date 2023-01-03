import { useState } from "react";
import styled from "styled-components";

import { UseTheme } from "../../context/theme";

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

  console.log("toggleTheme", toggleTheme);
  console.log("theme", theme);

  console.log("darkTheme", darkTheme);

  return (
    <ToggleBtn>
      <input type="checkbox" id="toggle" onChange={handleChangeTheme} checked={darkTheme} />
      <label htmlFor="toggle" data-label-on="Dark" data-label-off="Light"></label>
    </ToggleBtn>
  );
};

const ToggleBtn = styled.div`
  margin-top: 5px;

  input {
    display: none;
  }

  label {
    font-weight: bold;
    font-size: 10px;
    display: inline-block;
    width: 70px;
    height: 25px;
    background-color: #e7e2cd;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }

  label::after {
    content: attr(data-label-off);
    width: 30px;
    height: 30px;
    color: #e7e2cd;
    background-color: #166729;
    border: 2px solid #e7e2cd;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: -5px;
    left: 0;
    line-height: 0;
    display: grid;
    place-content: center;
    transition: all 0.5s;
    transform: 1s ease-in;
  }

  input:checked + label::after {
    content: attr(data-label-on);
    background-color: #2d4064;
    transform: translateX(35px) rotate(360deg);
  }
`;
