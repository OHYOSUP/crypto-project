import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    titleColor: string;
    bgColor: string;
    accentColor: string;
    brightBg: string;
    darkBg: string;
  }
}
