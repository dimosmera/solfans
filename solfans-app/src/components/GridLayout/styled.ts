import styled from "styled-components";

import { Columns } from "./GridLayout";

enum SizeIndex {
  MOBILE = 0,
  LARGE_MOBILE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
}

export const getColumns = (columns: Columns, sizeIndex: SizeIndex) => {
  // Makes it into an array if it's not already.
  if (!Array.isArray(columns)) {
    // eslint-disable-next-line no-param-reassign
    columns = [columns];
  }

  return `repeat(${columns[sizeIndex]}, 1fr)`;
};

export const Container = styled.div<{
  columns: Columns;
  itemGap?: number;
}>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ columns }) => getColumns(columns, SizeIndex.MOBILE)};
  grid-row-gap: ${({ itemGap }) => `${itemGap}rem`};
  grid-column-gap: ${({ itemGap }) => `${itemGap}rem`};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.screenSizes.LARGE_MOBILE - 25}px) {
    grid-template-columns: ${({ columns }) => getColumns(columns, SizeIndex.LARGE_MOBILE)};
  }

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_PORTRAIT - 2}px) {
    grid-template-columns: ${({ columns }) => getColumns(columns, SizeIndex.TABLET_PORTRAIT)};
  }

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_LANDSCAPE}px) {
    grid-template-columns: ${({ columns }) => getColumns(columns, SizeIndex.TABLET_LANDSCAPE)};
  }
`;
