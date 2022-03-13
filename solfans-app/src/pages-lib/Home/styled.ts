import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WILD_SAND};
`;

export const PageContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => `${theme.components.header.HEIGHT}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: ${({ theme }) => `${theme.screenSizes.LARGE_DESKTOP}px`};
`;
