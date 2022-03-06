const config = {
  queries: {
    // when the browser window is refocused by the user we dont want to refetch
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    // will not retry if the request fails
    retry: 0,
  },
};

export default config;
