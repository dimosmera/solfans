import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    CLOUD_BURST: "#20354D",
    ELEPHANT: "#0E2339",
    VIDA_LOCA: "#59A219",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    WILD_SAND: "#F6F6F6",
    DOWNY: "#5CCEC5",
    MYSTIC_TWO: "#DFE4ED",
    MIRAGE: "#1D243C",
  },
  typography: {
    colors: {
      WHITE: "#FFFFFF",
      BLACK: "#000000",
      ROCK_BLUE: "#9CB3C9",
      PERIWINKLE_GRAY: "#B6CCE2",
      HOKI: "#63809C",
      MULLED_WINE: "#514D6A",
      CHETWODE_BLUE: "#8884D8",
      MIRAGE: "#1D243C",
    },
    fontWeights: {
      NORMAL: 400,
      BOLD: 700,
    },
    sizing: {
      XL: "24px",
      LARGE: "20px",
      MEDIUM: "18px",
      BASE: "16px",
      SMALL: "14px",
    },
  },
  screenSizes: {
    MOBILE: 360,
    LARGE_MOBILE: 450,
    TABLET_PORTRAIT: 770,
    TABLET_LANDSCAPE: 1080,
    DESKTOP: 1284,
    LARGE_DESKTOP: 1920,
  },
  components: {
    header: {
      HEIGHT: 90,
    },
  },
};

export default theme;
