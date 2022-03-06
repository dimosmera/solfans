import axios from "axios";

const http = () =>
  axios.create({
    timeout: 10000,
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

export default http;
