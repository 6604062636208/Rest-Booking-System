// Controllers

exports.listCamping = (req, res) => {
  try {
    // code body
    console.log("Hello Controllers");
    console.log(Aten);
    res.send("Hello Controllers");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.readCamping = (req, res) => {
  // code body
  try {
    // code body
    res.send("Hello READ");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.createCamping = (req, res) => {
  try {
    // code body
    res.send("Hello Create");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.updateCamping = (req, res) => {
  try {
    res.send("Hello Update");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.deleteCamping = (req, res) => {
  try {
    res.send("Hello Delete");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
