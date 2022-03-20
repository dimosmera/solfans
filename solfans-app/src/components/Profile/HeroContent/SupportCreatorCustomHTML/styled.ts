import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 10px;
  position: relative;
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const LastRow = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
`;

export const Tag = styled.div`
  width: 81px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.DOWNY};
  margin: 7px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
  background-color: ${({ theme }) => theme.colors.TRADEWIND};
`;

export const ReviewButton = styled.button`
  border: none;
  width: 180px;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 15px;
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

export const Input = styled.input`
  width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.MIRAGE};
  background: white;
  border: ${({ theme }) => `1px solid ${theme.colors.MIRAGE}`};
  border-radius: 35px;
  padding: 5px 0px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizing.XLL};

  -moz-appearance: textfield;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
