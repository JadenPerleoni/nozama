import axios from "axios";
const url = "https://4d43-160-227-21-2.ngrok-free.app";

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) =>
  axios.post(`${url}/login`, user).then((res) => {
    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("userId", res.data.user._id);
    sessionStorage.setItem("username", user.username);
  });

export const browse = async (query) => {
  const headers = {
    "ngrok-skip-browser-warning": "69420",
  };
  return axios

    .get(`${url}/search`, {
      headers,
      params: {
        q: query,
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
};
export const addItem = (itemId) => {
  const headers = {
    Authorization: sessionStorage.getItem("token"),
    UserID: sessionStorage.getItem("userId"),
    "ngrok-skip-browser-warning": "69420",
  };
  console.log(itemId);
  axios
    .post(`${url}/cart/add`, { itemId: itemId }, { headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCart = async () => {
  const headers = {
    Authorization: sessionStorage.getItem("token"),
    UserID: sessionStorage.getItem("userId"),
    "ngrok-skip-browser-warning": "69420",
  };
  return axios
    .get(`${url}/cart/retrieve`, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const randomItem = async () => {
  const headers = {
    "ngrok-skip-browser-warning": "69420",
  };
  return axios
    .get(`${url}/randomitem`, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const removeItem = (itemId) => {
  const headers = {
    Authorization: sessionStorage.getItem("token"),
    UserID: sessionStorage.getItem("userId"),
    "ngrok-skip-browser-warning": "69420",
  };
  axios
    .post(`${url}/cart/remove`, { itemId: itemId }, { headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
