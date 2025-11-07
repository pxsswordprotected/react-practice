import axios from "axios";
import { loadConfigFromFile } from "vite";

const baseUrl = "http://localhost:3001/api/notes";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newNote) => {
  const config = {
    Authorization: token,
  };

  const response = await axios.post(baseUrl, newNote, config);
  return response.data;
};

export { setToken, getAll, create };
