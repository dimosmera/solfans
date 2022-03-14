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
