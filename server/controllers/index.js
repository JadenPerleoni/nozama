export const register = async (req, res) => {
  try {
    res.status(201).json("hello world");
  } catch (error) {
    res.status(401).json(error.message);
    console.log('error')
  }
};
