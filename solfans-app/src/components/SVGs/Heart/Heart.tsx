import styled from "styled-components";

const Container = styled.svg<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "25px"};
  height: ${({ height }) => height || "25px"};
`;

interface Props {
  width?: string;
  height?: string;
  color?: string;
  style?: React.CSSProperties;
}

const Heart = ({ color = "#FF4033", ...props }: Props) => {
  return (
    <Container xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512 512" {...props}>
      <path
        fill={color}
        d="M471.4 44.6A137.7 137.7 0 00369 0c-29.6 0-56.6 9.3-80.5 27.8-12 9.3-22.9 20.6-32.5 34a164.5 164.5 0 00-32.5-34A128.8 128.8 0 00143 0C103.5 0 67.1 15.8 40.6 44.6A160 160 0 000 153.9c0 43.3 16.1 83 50.8 124.7C81.8 316 126.3 354 177.9 398c17.6 15 37.6 32 58.3 50.2a30 30 0 0039.6 0c20.7-18.1 40.7-35.2 58.3-50.2 51.6-44 96.1-81.9 127.1-119.3C496 236.8 512 197.2 512 154a160 160 0 00-40.6-109.3zm0 0"
      />
    </Container>
  );
};

export default Heart;
