import Text from "components/UI/Text";
import Heart from "components/SVGs/Heart";

import * as Style from "./styled";

const HeroContent = () => {
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

      <Style.SupportButton>
        <Heart color="#FFFFFF" style={{ marginRight: "10px", width: "18px", height: "18px" }} />

        <Text color="WHITE" font="BOLD">
          Support
        </Text>
      </Style.SupportButton>
    </Style.Container>
  );
};

export default HeroContent;
