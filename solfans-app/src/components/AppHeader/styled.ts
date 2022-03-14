import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: ${({ theme }) => `${theme.components.header.HEIGHT}px`};
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0.98);
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: ${({ theme }) => theme.screenSizes.TABLET_PORTRAIT}px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const LogoContainer = styled.a`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
