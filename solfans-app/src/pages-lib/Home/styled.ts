import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const StreamsContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `2px solid ${theme.colors.CLOUD_BURST}`};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 18px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.CLOUD_BURST}`};
`;

export const Stream = styled.div`
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.CLOUD_BURST}; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const StreamContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 18px;
`;

export const ColorCode = styled.div`
  width: 10px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.VIDA_LOCA};
  margin-right: 24px;

  /* :last-child {
    border-radius: 0px 0px 0px 5px;
  } */
`;
