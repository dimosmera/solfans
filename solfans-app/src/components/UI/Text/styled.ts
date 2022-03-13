import styled, { DefaultTheme } from "styled-components";

import { Font, Color, Size } from "./types";

enum SizeIndex {
  MOBILE = 0,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
}

export const getFontSize = (theme: DefaultTheme, sizeIndex: SizeIndex, size?: Size | Size[]) => {
  if (!size) return theme.typography.sizing.BASE;

  // Makes it into an array if it's not already.
  if (!Array.isArray(size)) {
    // eslint-disable-next-line no-param-reassign
    size = [size];
  }

  return theme.typography.sizing[size[sizeIndex]];
};

export const getFontWeight = (theme: DefaultTheme, font?: Font) => {
  if (!font || !theme.typography.fontWeights[font]) return theme.typography.fontWeights.NORMAL;

  return theme.typography.fontWeights[font];
};

const getColor = (theme: DefaultTheme, color?: Color) => {
  if (!color || !theme.typography.colors[color]) return theme.typography.colors.BLACK;

  return theme.typography.colors[color];
};

const StyledComponent = styled.p<{ font?: Font; color?: Color; size?: Size | Size[] }>`
  font-weight: ${({ theme, font }) => getFontWeight(theme, font)};
  color: ${({ theme, color }) => getColor(theme, color)};

  font-size: ${({ theme, size }) => getFontSize(theme, SizeIndex.MOBILE, size)};

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_PORTRAIT}px) {
    font-size: ${({ theme, size }) => getFontSize(theme, SizeIndex.TABLET_PORTRAIT, size)};
  }

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_LANDSCAPE}px) {
    font-size: ${({ theme, size }) => getFontSize(theme, SizeIndex.TABLET_LANDSCAPE, size)};
  }
  margin: 0;
`;

export default StyledComponent;
