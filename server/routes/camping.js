const express = require("express");
const router = express.Router();
// Controllers
const {
  listCamping,
  readCamping,
  createCamping,
  updateCamping,
  deleteCamping,
} = require("../controllers/camping");

const { authCheck } = require("../middlewares/auth");

// @ENDPOINT http://localhost:5000/api/camping
// #METHOD GET [ list camping ]
// @ACCESS Public
router.get("/camping", authCheck, listCamping);

// @ENDPOINT http://localhost:5000/api/camping/5
// #METHOD GET [ read camping ]
// @ACCESS Public
router.get("/camping/:id", readCamping);
// @ENDPOINT http://localhost:5000/api/camping
// #METHOD POST [ create camping ]
// @ACCESS Private
router.post("/camping", createCamping);

// @ENDPOINT http://localhost:5000/api/camping/1
// #METHOD PUT [ edit camping ]
// @ACCESS Private
router.put("/camping/:id", updateCamping);

// @ENDPOINT http://localhost:5000/api/camping/1
// #METHOD DELETE [ delete camping ]
// @ACCESS Private
router.delete("/camping/:id", deleteCamping);
module.exports = router;
