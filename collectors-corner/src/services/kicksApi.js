import axios from 'axios';

const API_KEY = import.meta.env.VITE_KICKS_API_KEY;
const BASE_URL = 'https://api.kicks.dev/v1';

const kicksApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export const searchSneakers = async (query) => {
  try {
    const res = await kicksApi.get(`/sneakers?query=${query}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching sneakers from Kicks.dev:', err);
    return [];
  }
};
