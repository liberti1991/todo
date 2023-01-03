// -----Theme-----
export interface ITheme {
  title: string;
  colors: {
    primary: string;
    color: string;
    header: string;
    background: string;
  };
}

// -----ThemeContext-----
export interface IThemeContext {
  toggleTheme(title: string): void;
  theme: ITheme;
}
