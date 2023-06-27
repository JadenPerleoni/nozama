import axios from "axios";
const url = "http://localhost:4000";

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) =>
  axios.post(`${url}/login`, user).then((res) => {
    sessionStorage.setItem("token", res.data.token);
  });

export const browse = (query) =>
  axios
    .get(`${url}/search`, {
      params: {
        q: query,
        minPrice: "0.0",
        maxPrice: "1000.0",
        sortOrder: "PRICE_PLUS_SHIPPING_LOWEST",
        rating: "BELOW_2",
        limit: 15,
      },
    })
    .then((response) => {
      console.log(response.data);

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
