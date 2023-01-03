import "styled-components";
import { ITheme } from "../context/theme/interfacesTheme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
