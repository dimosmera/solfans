import { useMemo } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles for wallets - can be overridden
require("@solana/wallet-adapter-react-ui/styles.css");

import "../assets/walletStyles.css";

import theme from "config/theme";
import queryConfig from "services/api/config/queryConfig";

const GlobalStyle = createGlobalStyle`
html,
  body {
    font-family: 'Nunito', sans-serif;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: #F6F6F6;
    color: #000000;
    text-align: center;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    height: 100vh;
  }
`;

const queryClient = new QueryClient({ defaultOptions: queryConfig });

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Component {...pageProps} />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
