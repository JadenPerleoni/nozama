import axios from "axios";
const url = "http://localhost:4000";

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) =>
  axios.post(`${url}/login`, user).then((res) => {
    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("userId", res.data.user._id);
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

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const addItem = (itemId) => {
  const headers = {
    Authorization: sessionStorage.getItem("token"),
    UserID: sessionStorage.getItem("userId"),
  };
  console.log(itemId);
  axios
    .post(`${url}/cart/add`, {itemId: itemId}, { headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCart = () => {
  
}
