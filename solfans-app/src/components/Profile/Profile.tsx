import Text from "components/UI/Text";
import DangerousText from "components/UI/DangerousText";
import Heart from "components/SVGs/Heart";
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

const Profile = () => {
  return (
    <Style.Container>
      <Style.HeroContainer>
        <Style.MainStatsContainer>
          <Style.PictureContainer>
            <Style.Img
              src={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/8fae67df-cd16-465b-bff9-4f7edfd5ca74-profile_image-300x300.png"
              }
              alt="Profile Image"
            />
          </Style.PictureContainer>
          <Style.NameContainer>
            <Text font="BOLD" size="XL">
              dimos851
            </Text>
          </Style.NameContainer>
        </Style.MainStatsContainer>

        <Text color="MULLED_WINE" size="BASE">
          is creating Solfans and Dragon Pets
        </Text>

        <Style.SupportButton>
          <Heart color="#FFFFFF" style={{ marginRight: "10px", width: "18px", height: "18px" }} />

          <Text color="WHITE" font="BOLD">
            Support
          </Text>
        </Style.SupportButton>
      </Style.HeroContainer>

      <Style.SnapshotContainer>
        <GridLayout columns={[1, 2, 2, 4]} itemGap={2} style={{ padding: "25px" }}>
          <Style.SnapshotCell>
            <Text
              color="MULLED_WINE"
              size={["SMALL", "BASE"]}
              style={{ margin: 0, marginBottom: "5px" }}
            >
              In every month
            </Text>

            <DangerousText
              size={["LARGE", "XL"]}
              font="BOLD"
              color="MIRAGE"
              text={`<em style='font-style: normal; font-size: large; margin-bottom: 5px;'>◎</em>${numberWithCommas(
                234
              )}`}
            />
          </Style.SnapshotCell>

          <Style.SnapshotCell>
            <Text
              color="MULLED_WINE"
              size={["SMALL", "BASE"]}
              style={{ margin: 0, marginBottom: "5px" }}
            >
              Out every month
            </Text>

            <DangerousText
              size={["LARGE", "XL"]}
              font="BOLD"
              color="MIRAGE"
              text={`<em style='font-style: normal; font-size: large; margin-bottom: 5px;'>◎</em>${numberWithCommas(
                0
              )}`}
            />
          </Style.SnapshotCell>

          <Style.SnapshotCell>
            <Text
              color="MULLED_WINE"
              size={["SMALL", "BASE"]}
              style={{ margin: 0, marginBottom: "5px" }}
            >
              Patreons
            </Text>

            <Text size={["LARGE", "XL"]} font="BOLD" color="MIRAGE" style={{ margin: 0 }}>
              {numberWithCommas(0)}
            </Text>
          </Style.SnapshotCell>

          <Style.SnapshotCell>
            <Text
              color="MULLED_WINE"
              size={["SMALL", "BASE"]}
              style={{ margin: 0, marginBottom: "5px" }}
            >
              Total claimed
            </Text>

            <DangerousText
              size={["LARGE", "XL"]}
              font="BOLD"
              color="MIRAGE"
              text={`<em style='font-style: normal; font-size: large; margin-bottom: 5px;'>◎</em>${numberWithCommas(
                0
              )}`}
            />
          </Style.SnapshotCell>
        </GridLayout>
      </Style.SnapshotContainer>

      <Style.StreamsContainer>
        <Style.Header>
          <Style.Column>
            <Text color="MULLED_WINE">From</Text>
          </Style.Column>

          <Style.Column>
            <Text color="MULLED_WINE">Pledge / month</Text>
          </Style.Column>

          <Style.Column>
            <Text color="MULLED_WINE">Duration</Text>
          </Style.Column>

          <Style.Column>
            <Text color="MULLED_WINE">Next Claim</Text>
          </Style.Column>

          <Style.Column>
            <Text color="MULLED_WINE">Status</Text>
          </Style.Column>

          <Style.Column></Style.Column>
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

            <Style.Column>
              <Text color="MIRAGE">{`${stream.duration} months`}</Text>
            </Style.Column>

            <Style.Column>
              <Text color="MIRAGE">{stream.nextClaim}</Text>
            </Style.Column>

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

            <Style.Column>
              <Style.Arrow open={false} />
            </Style.Column>
          </Style.Stream>
        ))}
      </Style.StreamsContainer>
    </Style.Container>
  );
};

export default Profile;
