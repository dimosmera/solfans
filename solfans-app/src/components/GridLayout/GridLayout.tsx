import React from "react";

import * as Style from "./styled";

export type Columns = number | number[];

interface Props {
  children: React.ReactNode;
  columns: Columns;
  itemGap?: number;
  style?: React.CSSProperties;
}

const GridLayout = ({ children, itemGap = 1, ...props }: Props) => (
  <Style.Container itemGap={itemGap} {...props}>
    {children}
  </Style.Container>
);

export default GridLayout;
