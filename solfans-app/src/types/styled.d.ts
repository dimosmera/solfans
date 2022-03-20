import "styled-components";

// Extend the styled components typings. This is the recommended way of doing it as per:
// https://www.styled-components.com/docs/api#typescript
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      CLOUD_BURST: string;
      VIDA_LOCA: string;
      ELEPHANT: string;
      WHITE: string;
      BLACK: string;
      WILD_SAND: string;
      DOWNY: string;
      MYSTIC_TWO: string;
      MIRAGE: string;
      TRADEWIND: string;
    };
    typography: {
      colors: {
        WHITE: string;
        BLACK: string;
        ROCK_BLUE: string;
        PERIWINKLE_GRAY: string;
        HOKI: string;
        MULLED_WINE: string;
        CHETWODE_BLUE: string;
        MIRAGE: string;
      };
      fontWeights: {
        NORMAL: number;
        BOLD: number;
      };
      sizing: {
        XLL: string;
        XL: string;
        LARGE: string;
        MEDIUM: string;
        BASE: string;
        SMALL: string;
      };
    };
    screenSizes: {
      MOBILE: number;
      LARGE_MOBILE: number;
      TABLET_PORTRAIT: number;
      TABLET_LANDSCAPE: number;
      DESKTOP: number;
      LARGE_DESKTOP: number;
    };
    components: {
      header: {
        HEIGHT: number;
      };
    };
  }
}
