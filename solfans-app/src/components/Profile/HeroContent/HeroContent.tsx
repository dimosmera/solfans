import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

import { fireSweetAlert } from "components/UI/SweetAlerts";
import Text from "components/UI/Text";
import Heart from "components/SVGs/Heart";

import SupportCreatorCustomHTML from "./SupportCreatorCustomHTML";
import * as Style from "./styled";

const HeroContent = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connected } = useWallet();
  const { setVisible } = useWalletModal();

  const handleTransaction = (solAmount: number, months: number) => {
    // send transaction
    console.log("solAmount: ", solAmount);
    console.log("months: ", months);
  };

  const handleSupportCreator = () => {
    if (!connected) {
      setVisible(true);
      return;
    }

    fireSweetAlert({
      html: <SupportCreatorCustomHTML onTransaction={handleTransaction} />,
      showConfirmButton: false,
    });
  };

  return (
    <Style.Container>
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

      <Style.SupportButton onClick={handleSupportCreator}>
        <Heart color="#FFFFFF" style={{ marginRight: "10px", width: "18px", height: "18px" }} />

        <Text color="WHITE" font="BOLD">
          Support
        </Text>
      </Style.SupportButton>
    </Style.Container>
  );
};

export default HeroContent;
