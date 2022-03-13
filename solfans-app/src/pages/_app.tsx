import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";

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
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
