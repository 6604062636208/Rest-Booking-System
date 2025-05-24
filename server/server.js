// import libraries

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const { readdirSync } = require("fs");
const handleError = require("./middlewares/error");

// const campingRoutes = require("./routes/camping");
// const profileRoutes = require("./routes/profile");

// middleware
app.use(cors()); // Stuck wai gon
app.use(express.json());
app.use(morgan("dev"));

// Method GET, POST, PUT, PATCH, DELETE

// console.log(readdirSync("./routes"));
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// app.use("/api", campingRoutes);
// app.use("/api", profileRoutes);
// app.get("/", (req, res) => {
//   // code body
//   res.json({ message: "Hello," });
// });
app.use(handleError);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
