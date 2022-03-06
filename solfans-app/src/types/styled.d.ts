import "styled-components";

// Extend the styled components typings. This is the recommended way of doing it as per:
// https://www.styled-components.com/docs/api#typescript
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      CLOUD_BURST: string;
      VIDA_LOCA: string;
    };
    typography: {
      colors: {
        WHITE: string;
        BLACK: string;
        ELEPHANT: string;
        ROCK_BLUE: string;
        PERIWINKLE_GRAY: string;
        HOKI: string;
      };
      fontWeights: {
        NORMAL: number;
        BOLD: number;
      };
      sizing: {
        LARGE: string;
        MEDIUM: string;
        BASE: string;
        SMALL: string;
      };
    };
  }
}
