// import libraries

const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors()); // Stuck wai gon

// Method GET, POST, PUT, PATCH, DELETE

app.get("/", (req, res) => {
  console.log("hello Easy backend");
  //   res.send("Hello from the backend");
  const data = "easy backend";
  res.json({ data });
});

app.get("/camping", (req, res) => {
  res.send("Hello from the camping route");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
