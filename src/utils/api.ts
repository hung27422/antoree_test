import axios from "axios";
const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://api-antoree.onrender.com"
    : "http://localhost:3000/";
const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
