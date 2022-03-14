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

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.WILD_SAND}`};
`;

export const Column = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 42px;

  /* :last-child {
    padding: 24px 22px;
    width: 5%;
  } */
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
