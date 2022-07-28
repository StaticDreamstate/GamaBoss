import axios from "axios";

function getTokenFromLocalStorage() {
  const token = localStorage.getItem("user");
  if (token === null) {
    return undefined;
  }
  return token;
}

export const requestApi = axios.create({
  baseURL: "https://reqres.in/api",
  // https://api-gamaboss.herokuapp.com
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  },
});
