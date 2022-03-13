import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 15px;
  margin-top: 5rem;
  padding: 25px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_PORTRAIT}px) {
    padding: 25px;
  }

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_LANDSCAPE}px) {
    width: 90%;
  }
`;

export const MainStatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PictureContainer = styled.picture`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `4px solid ${theme.colors.WHITE}`};

  margin-top: -5rem;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto !important;
`;

export const NameContainer = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0px;
  background-color: transparent;
`;

export const SupportButton = styled.button`
  border: none;
  width: 180px;
  height: 48px;
  margin-top: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216)) 0%
    center / 400% 100%;
  box-shadow: 4px 7px 12px 0 rgb(97 93 250 / 20%);

  &:hover {
    background-image: linear-gradient(to right, #e052a0, #f15c41);
  }
`;

export const SnapshotContainer = styled.div`
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

export const StreamsContainer = styled.div`
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.WILD_SAND}`};
`;

export const Column = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 42px;

  :last-child {
    padding: 24px 22px;
    width: 5%;
  }
`;

export const Stream = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.WILD_SAND}`};
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }
`;

export const StreamContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  width: 112px;
  background-image: linear-gradient(to right, #e052a0, #f15c41);
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    background: linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))
      0% center / 400% 100%;
  }
`;

export const ActiveButton = styled.div`
  width: 112px;
  background-color: ${({ theme }) => theme.colors.WILD_SAND};
  border-radius: 5px;
  padding: 10px 0px;
`;

export const Arrow = styled.div<{ open: boolean }>`
  margin-top: ${({ open }) => open && "5px"};
  display: inline-block;
  width: 9px;
  height: 9px;
  transform: ${({ open }) => (open ? "rotate(315deg)" : "rotate(135deg)")};
  border-top: ${({ theme }) => `2px solid ${theme.colors.MIRAGE}`};
  border-right: ${({ theme }) => `2px solid ${theme.colors.MIRAGE}`};
`;
