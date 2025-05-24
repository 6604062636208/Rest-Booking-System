exports.authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello Middleware");
    if (true) {
      next();
    } else {
      res.status(401).json({
        message: "No Access Denied!!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
