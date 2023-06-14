import UserInfo from "../models/userInfo.js";

export const register = async (req, res) => {
  const userData = new UserInfo({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  try {
    console.log(userData);
    await userData.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(401).json(error.message);
    console.log(error.message);
  }
};
