const jwt = require("jsonwebtoken");
const generateToken = async (id) => {
  try {
    return await jwt.sign({ id }, process.env.SECRET_KEY);
  } catch (error) {
    console.log(erroe);
  }
};
module.exports = generateToken;
