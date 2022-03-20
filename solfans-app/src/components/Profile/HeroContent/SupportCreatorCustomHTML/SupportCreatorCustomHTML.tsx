import { ThemeProvider } from "styled-components";

import Text from "components/UI/Text";
import DangerousText from "components/UI/DangerousText";
import theme from "config/theme";

import * as Style from "./styled";
import { ChangeEvent, useState } from "react";

interface Props {
  onTransaction: (solAmount: number, months: number) => void;
}

const SupportCreatorCustomHTML = ({ onTransaction }: Props) => {
  const [solPerMonth, setSolPerMonth] = useState(5);
  const [months, setMonths] = useState(1);

  const handleOnBlurForSol = () => {
    if (!solPerMonth || solPerMonth === 0) setSolPerMonth(0.1);
  };

  const handleOnBlurForMonths = () => {
    if (months === 0) setMonths(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Style.Container>
        <Style.TopRow>
          <Text color="MIRAGE" size="SMALL" style={{ marginBottom: "10px" }}>
            SOL per month
          </Text>
          <Style.InputContainer>
            <DangerousText
              size={"BASE"}
              color="MIRAGE"
              text={`◎/MO`}
              style={{ position: "absolute", right: "15px" }}
            />

            <Style.Input
              value={solPerMonth}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSolPerMonth(parseFloat(e.target.value))
              }
              onBlur={handleOnBlurForSol}
              required
              type="number"
              step="any"
              min={0.1}
            />
          </Style.InputContainer>
        </Style.TopRow>

        <Style.TagsContainer>
          <Style.Tag onClick={() => setSolPerMonth(5)}>
            <Text color="WHITE" size="BASE">
              ◎5
            </Text>
          </Style.Tag>
          <Style.Tag onClick={() => setSolPerMonth(10)}>
            <Text color="WHITE" size="BASE">
              ◎10
            </Text>
          </Style.Tag>
          <Style.Tag onClick={() => setSolPerMonth(50)}>
            <Text color="WHITE" size="BASE">
              ◎50
            </Text>
          </Style.Tag>
          <Style.Tag onClick={() => setSolPerMonth(100)}>
            <Text color="WHITE" size="BASE">
              ◎100
            </Text>
          </Style.Tag>
        </Style.TagsContainer>

        <Style.TopRow>
          <Text color="MIRAGE" size="SMALL" style={{ marginBottom: "10px" }}>
            Months
          </Text>
          <Style.InputContainer>
            <DangerousText
              size={"BASE"}
              color="MIRAGE"
              text={`MO`}
              style={{ position: "absolute", right: "15px" }}
            />

            <Style.Input
              value={months}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMonths(parseInt(e.target.value || "0", 10))
              }
              onBlur={handleOnBlurForMonths}
              required
              type="text"
              inputMode="numeric"
            />
          </Style.InputContainer>
        </Style.TopRow>

        <Style.LastRow>
          <Text color="MIRAGE">TOTAL</Text>

          <Text color="MIRAGE" font="BOLD" size="LARGE">
            {`${!solPerMonth ? 0 : solPerMonth * months} SOL`}
          </Text>
        </Style.LastRow>

        <Style.ReviewButton onClick={() => onTransaction(solPerMonth, months)}>
          <Text color="WHITE" font="BOLD">
            Review
          </Text>
        </Style.ReviewButton>
      </Style.Container>
    </ThemeProvider>
  );
};

export default SupportCreatorCustomHTML;
