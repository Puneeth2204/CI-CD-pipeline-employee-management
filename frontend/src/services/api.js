import axios from "axios";

const API = axios.create({
  baseURL: "http://3.110.197.155:5000",
});

export default API;
