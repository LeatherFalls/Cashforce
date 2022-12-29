import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getNfs = async () => {
  const response = await api({
    method: "get",
    url: "/nf",
  });

  return response;
};

console.log(getNfs);
