import theme from "./";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
