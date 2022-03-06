import styled, { DefaultTheme } from "styled-components";

import { Font, Color, Size } from "./types";

export const getFontSize = (theme: DefaultTheme, size?: Size) => {
  if (!size) return theme.typography.sizing.BASE;

  return theme.typography.sizing[size];
};

export const getFontWeight = (theme: DefaultTheme, font?: Font) => {
  if (!font || !theme.typography.fontWeights[font]) return theme.typography.fontWeights.NORMAL;

  return theme.typography.fontWeights[font];
};

const getColor = (theme: DefaultTheme, color?: Color) => {
  if (!color || !theme.typography.colors[color]) return theme.typography.colors.ROCK_BLUE;

  return theme.typography.colors[color];
};

const StyledComponent = styled.p<{ font?: Font; color?: Color; size?: Size }>`
  font-weight: ${({ theme, font }) => getFontWeight(theme, font)};
  color: ${({ theme, color }) => getColor(theme, color)};
  font-size: ${({ theme, size }) => getFontSize(theme, size)};
  margin: 0;
`;

export default StyledComponent;
