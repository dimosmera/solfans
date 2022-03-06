import Head from "next/head";

import subscribe from "utils/subscribe";
import Text from "components/UI/Text";

import * as Style from "./styled";

// https://learn.figment.io/tutorials/solana-token-streaming-protocol#writing-instruction-logic
// https://github.com/solana-labs/wallet-adapter#quick-setup-using-react-ui
// https://solanacookbook.com/guides/get-program-accounts.html#deep-dive
// https://lorisleiva.com/create-a-solana-dapp-from-scratch/fetching-tweets-from-the-program
// https://lorisleiva.com/create-a-solana-dapp-from-scratch/integrating-with-solana-wallets

// Create your API so you dont have to call Solana to get accounts
// Once someone claims a page, add them to the index. This will be public key, username, description
// Once someone starts a stream, add them to the index
// Basically every account you create on Solana, add it to the index
// When someone fetches a creators page, my backend can also call solana on the background (async lambda)
// to cross check that my index has not falled out of date. If issues are found, then it notifies me through Slack

// Home page: list of recent and/or larger creators with $$ they are making
// Creator page: total funds they making and a list of streams
// Creator page: also, who they are streaming to

// For a user id or username, give me their list of streams, both receiving and outgoing

// A solfans account index where each document has the public key id and done.

// TODO: Get the front end in. Then create simple API that indexes stuff and returns data. Then integrate with wallet and call the program.

const data = [
  {
    status: "active",
    from: "dimos851",
    amount: 6,
    months: 6,
    claimedSoFar: 2,
    token: "SOL",
    canClaim: "", // date? if past then print immediately?
  },
];

const Home = () => {
  const handleOnClick = async () => {
    subscribe()
      .then((result) => {
        console.log(`Created PDA successfully. Tx Hash: ${result}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Style.Container>
      <Style.StreamsContainer>
        <Style.Header>
          <Text font="BOLD" color="PERIWINKLE_GRAY">
            FROM
          </Text>
        </Style.Header>
        <Style.Stream>
          <Style.ColorCode />
          <Style.StreamContent>
            <Text>Get started by editing pages/index.tsx</Text>
          </Style.StreamContent>
        </Style.Stream>
      </Style.StreamsContainer>
    </Style.Container>
  );
};

export default Home;
