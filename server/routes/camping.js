const express = require("express");
const router = express.Router();

// @ENDPOINT http://localhost:5000/api/camping
// #METHOD GET [ list camping ]
// @ACCESS Public
router.get("/camping", (req, res) => {
  // code body
  res.send("Hello routes");
});

// @ENDPOINT http://localhost:5000/api/camping/5
// #METHOD GET [ read camping ]
// @ACCESS Public
router.get("/camping/:id", (req, res) => {
  // code body
  res.send("Hello routes");
});

// @ENDPOINT http://localhost:5000/api/camping
// #METHOD POST [ create camping ]
// @ACCESS Private
router.post("/camping", (req, res) => {
  // code body
  const { title, price } = req.body;
  console.log(title);
  console.log(price);
  res.send("Hello POST camping");
});

// @ENDPOINT http://localhost:5000/api/camping/1
// #METHOD PUT [ edit camping ]
// @ACCESS Private
router.put("/camping/:id", (req, res) => {
  //code body
  console.log(req.params.id);
  res.send("Hello PUT camping");
});

// @ENDPOINT http://localhost:5000/api/camping/1
// #METHOD DELETE [ delete camping ]
// @ACCESS Private
router.delete("/camping/:id", (req, res) => {
  // code body
  res.send("Hello DELETE camping");
});

module.exports = router;
