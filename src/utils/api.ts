import axios from "axios";
const apiURL = "https://api-antoree.onrender.com";
const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
