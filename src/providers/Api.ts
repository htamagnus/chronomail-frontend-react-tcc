import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

if (!baseURL) {
    throw new Error("The base URL for API is not defined in the environment variables");
  }

export const Api = axios.create({ baseURL });
