import Text from "components/UI/Text";
import DangerousText from "components/UI/DangerousText";
import GridLayout from "components/GridLayout";
import numberWithCommas from "utils/numberWithCommas";

import * as Style from "./styled";

const data = [
  {
    id: "1",
    from: "dimos851",
    pledge: 6,
    duration: 10,
    lastClaimed: "Never",
    nextClaim: "Available Now",
    status: "Claim", // claim now. This is a button
  },
  {
    id: "2",
    from: "8931xb2c2...",
    pledge: 2,
    duration: 3,
    lastClaimed: "10 days ago",
    nextClaim: "In 20 days",
    status: "Active", // claim now. This is a button
  },
];

const Streams = () => {
  return (
    <Style.Container>
      <Style.Header>
        <Style.Column>
          <Text color="MULLED_WINE">From</Text>
        </Style.Column>

        <Style.Column>
          <Text color="MULLED_WINE">Pledge / month</Text>
        </Style.Column>

        {/* <Style.Column>
          <Text color="MULLED_WINE">Duration</Text>
        </Style.Column>

        <Style.Column>
          <Text color="MULLED_WINE">Next Claim</Text>
        </Style.Column> */}

        <Style.Column>
          <Text color="MULLED_WINE">Status</Text>
        </Style.Column>

        {/* <Style.Column></Style.Column> */}
      </Style.Header>
      {data.map((stream) => (
        <Style.Stream key={stream.id}>
          <Style.Column>
            <Text font="BOLD" color="MIRAGE">
              {stream.from}
            </Text>
          </Style.Column>

          <Style.Column>
            <Text size="MEDIUM" color="MIRAGE">{`${stream.pledge} SOL`}</Text>
          </Style.Column>
          {/* 
          <Style.Column>
            <Text color="MIRAGE">{`${stream.duration} months`}</Text>
          </Style.Column>

          <Style.Column>
            <Text color="MIRAGE">{stream.nextClaim}</Text>
          </Style.Column> */}

          <Style.Column>
            {stream.status === "Claim" ? (
              <Style.Button>
                <Text font="BOLD" color="MIRAGE">
                  {stream.status}
                </Text>
              </Style.Button>
            ) : (
              <Style.ActiveButton>
                <Text font="BOLD" color="MULLED_WINE">
                  {stream.status}
                </Text>
              </Style.ActiveButton>
            )}
          </Style.Column>

          {/* <Style.Column>
            <Style.Arrow open={false} />
          </Style.Column> */}
        </Style.Stream>
      ))}
    </Style.Container>
  );
};

export default Streams;
