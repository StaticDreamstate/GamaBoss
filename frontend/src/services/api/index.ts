import axios from "axios";

function getTokenFromLocalStorage() {
  const token = localStorage.getItem("user");
  if (token === null) {
    return undefined;
  }
  return token;
}

export const requestApi = axios.create({
  baseURL: "https://api-gamaboss.herokuapp.com",
  // https://api-gamaboss.herokuapp.com
  // https://reqres.in/api
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  },
});
