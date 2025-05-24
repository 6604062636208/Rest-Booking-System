const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    // code body
    if (true) {
      return renderError(401, "Token is not valid");
    }
    console.log("Hello Create Profile");
    res.json({
      message: "Hello Create Profile",
    });
    // res.data.message
    // res.data.result
  } catch (error) {
    console.log(error.message);
    next(error); // Pass the error to the next middleware
  }
};
