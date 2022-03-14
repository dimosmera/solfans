import Text from "components/UI/Text";
import DangerousText from "components/UI/DangerousText";
import GridLayout from "components/GridLayout";
import numberWithCommas from "utils/numberWithCommas";

import * as Style from "./styled";

const Snapshot = () => {
  return (
    <Style.Container>
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
    </Style.Container>
  );
};

export default Snapshot;
