import HeroContent from "./HeroContent";
import Snapshot from "./Snapshot";
import Streams from "./Streams";
import * as Style from "./styled";

// Integrate with wallet, simplify and integrate with the program. Submit for hackathon?

const Profile = () => {
  return (
    <Style.Container>
      <HeroContent />

      <Snapshot />

      <Streams />
    </Style.Container>
  );
};

export default Profile;
