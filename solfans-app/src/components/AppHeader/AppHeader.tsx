import NextLink from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Heading from "components/UI/Heading";

import * as Style from "./styled";

const AppHeader = () => {
  return (
    <Style.Container>
      <NextLink href="/" passHref>
        <Style.LogoContainer>
          <Heading style={{ marginLeft: "1rem" }}>Solfans</Heading>
        </Style.LogoContainer>
      </NextLink>

      <WalletMultiButton />
    </Style.Container>
  );
};

export default AppHeader;
