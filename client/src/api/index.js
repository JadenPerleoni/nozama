import axios from "axios";
const url = "http://localhost:4000";

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) =>
  axios.post(`${url}/login`, user).then((res) => {
    sessionStorage.setItem("token", res.data.token);
  });
