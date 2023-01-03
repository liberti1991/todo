// -----Theme-----
export interface ITheme {
  title: string;
  border: string;
  colors: {
    primary: string;
    bottom: string;
    header: string;
    opacityHeader: string;
  };
}

// -----ThemeContext-----
export interface IThemeContext {
  toggleTheme(title: string): void;
  theme: ITheme;
}
