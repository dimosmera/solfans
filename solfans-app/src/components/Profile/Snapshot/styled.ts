import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 15px;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_LANDSCAPE}px) {
    width: 90%;
  }
`;

export const SnapshotCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-right: none;

  @media (min-width: ${({ theme }) => theme.screenSizes.LARGE_MOBILE - 25}px) {
    border-right: ${({ theme }) => `1px solid ${theme.colors.MYSTIC_TWO}`};
  }

  :last-child {
    border-right: none;
  }
  :nth-last-child(3) {
    border-right: none;

    @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_LANDSCAPE}px) {
      border-right: ${({ theme }) => `1px solid ${theme.colors.MYSTIC_TWO}`};
    }
  }
`;
