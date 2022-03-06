import { DefaultTheme } from "styled-components";

export type Font = keyof DefaultTheme["typography"]["fontWeights"];
export type Color = keyof DefaultTheme["typography"]["colors"];
export type Size = keyof DefaultTheme["typography"]["sizing"];

export interface TypographyProps {
  style?: React.CSSProperties;
  font?: Font;
  size?: Size | Size[];
  color?: Color;
  children: React.ReactNode;
}
